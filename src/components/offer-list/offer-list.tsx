import PlaceCard from '../place-card/place-card.tsx';
import { OfferPreview } from '../../mocks/offers.ts';
import { useAppSelector } from '../../hooks/index.ts';
import { sortOffers } from '../../utils.ts';

export type CardClass = 'favorites' | 'cities' | 'near-places';


type OfferListProps = {
  cardClass: CardClass;
  offers: OfferPreview[];
  cardMouseEnterHandle?: (id: OfferPreview['id']) => void;
  cardMouseLeaveHandle?: () => void;
};

function OfferList({ cardClass, offers, cardMouseEnterHandle, cardMouseLeaveHandle }: OfferListProps): JSX.Element {
  const selectedSortType = useAppSelector((state) => state.sortType);
  const sortedOffers = sortOffers(offers, selectedSortType);

  return (
    <>
      {sortedOffers.map((item) => (
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
