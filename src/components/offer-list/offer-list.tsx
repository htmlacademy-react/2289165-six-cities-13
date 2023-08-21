import PlaceCard from '../place-card/place-card.tsx';
import { OfferPreview } from '../../mocks/offers.ts';

type OfferListProps = {
  offers: OfferPreview[];
  cardMouseEnterHandle?: (id: OfferPreview['id']) => void;
  cardMouseLeaveHandle?: () => void;
};

function OfferList({ offers, cardMouseEnterHandle, cardMouseLeaveHandle }: OfferListProps): JSX.Element {

  return (
    <>
      {offers.map((item) => (
        <PlaceCard
          key= {item.id} {...item}
          cardMouseEnterHandle={cardMouseEnterHandle}
          cardMouseLeaveHandle={cardMouseLeaveHandle}
        />
      ))}
    </>
  );
}

export default OfferList;
