import PlaceCard from '../place-card/place-card.tsx';
import { OfferPreview } from '../../mocks/offers.ts';

export type CardClass = 'favorites' | 'cities' | 'near-places';

type OfferListProps = {
  cardClass: CardClass;
  offers: OfferPreview[];
  cardMouseEnterHandle?: (id: OfferPreview['id']) => void;
  cardMouseLeaveHandle?: () => void;
};

function OfferList({ cardClass, offers, cardMouseEnterHandle, cardMouseLeaveHandle }: OfferListProps): JSX.Element {

  return (
    <>
      {offers.map((item) => (
        <PlaceCard
          key= {item.id} cardClass={cardClass} {...item}
          cardMouseEnterHandle={cardMouseEnterHandle}
          cardMouseLeaveHandle={cardMouseLeaveHandle}
        />
      ))}
    </>
  );
}

export default OfferList;
