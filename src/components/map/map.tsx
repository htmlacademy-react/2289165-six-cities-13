import { layerGroup, Marker, Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import { City, OfferPreview } from '../../mocks/offers';
import useMap from './use-map';

type MapProps = {
  city: City;
  offers: OfferPreview[];
  selectedOfferId: OfferPreview['id'];
};

function Map({ city, offers, selectedOfferId }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = new Icon({
    iconUrl: 'img/pin.svg',
    iconSize: [28, 40],
    iconAnchor: [14, 40]
  });

  const currentCustomIcon = new Icon({
    iconUrl: 'img/pin-active.svg',
    iconSize: [28, 40],
    iconAnchor: [14, 40]
  });

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });
        marker
          .setIcon(
            selectedOfferId !== undefined && offer.id === selectedOfferId
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOfferId]);

  return (
    <div
      ref={mapRef}
      style={{height: '100vh'}}
    >
    </div>
  );


}

export default Map;
