import PlaceCard from '../place-card/place-card.tsx';
import { useAppSelector } from '../../hooks/index.ts';
import { sortOffers } from '../../utils.ts';
import { CardClass, OfferPreview } from '../../types.ts';


type OfferListProps = {
  cardClass: CardClass;
  offers: OfferPreview[];
  handleCardMouseEnter?: (id: OfferPreview['id']) => void;
  handleCardMouseLeave?: () => void;
};

function OfferList({ cardClass, offers, handleCardMouseEnter, handleCardMouseLeave }: OfferListProps): JSX.Element {
  const selectedSortType = useAppSelector((state) => state.sortType);
  const sortedOffers = sortOffers(offers, selectedSortType);

  return (
    <>
      {sortedOffers.map((item) => (
        <PlaceCard
          key={item.id} cardClass={cardClass} {...item}
          onPlaceCardMouseEnter={handleCardMouseEnter}
          onPlaceCardMouseLeave={handleCardMouseLeave}
        />
      ))}
    </>
  );
}

export default OfferList;
