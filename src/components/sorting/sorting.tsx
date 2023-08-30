import { SortingType } from '../../const';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeSortingType } from '../../store/action';

function Sorting(): JSX.Element {
  const [isOpened, setIsOpened] = useState(false);
  const selectedSortType = useAppSelector((state) => state.sortType);
  const dispatch = useAppDispatch();

  const sortingClickHandle = () => setIsOpened(!isOpened);


  const handleSortTypeClick = (sortType: SortingType) => {
    dispatch(changeSortingType(sortType));
    setIsOpened(false);
  };

  return (
    <form className='places__sorting' action='#' method='get'>
      <span className='places__sorting-caption'>Sort by </span>
      <span className='places__sorting-type' tabIndex={0} onClick={sortingClickHandle}>
        {selectedSortType}
        <svg className='places__sorting-arrow' width={7} height={4}>
          <use xlinkHref='#icon-arrow-select'></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ?
        'places__options--opened' :
        'places__options--closed'}`}
      >

        {Object.entries(SortingType).map(([key, value]) => (
          <li
            key={key}
            className={`places__option, ${key === value ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => handleSortTypeClick(value)}
          >
            {value}
          </li>
        ))}

      </ul>
    </form>
  );
}

export default Sorting;
