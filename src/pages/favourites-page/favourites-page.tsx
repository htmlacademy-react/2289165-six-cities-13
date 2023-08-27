import Header from '../../components/header/header';
import FavouriteOffers from '../../components/favourite-offers/favourite-offers';
import { useEffect } from 'react';
import { fetchFavoritesAction } from '../../store/api-actions.ts';
import { useAppDispatch, useAppSelector } from '../../hooks/index.ts';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';


function FavouritesPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const favorites = useAppSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [dispatch]);


  const classNameForEmptyPage = favorites.length < 1 ? 'page--favorites-empty' : '';

  return (
    <div className={`page ${classNameForEmptyPage}`}>
      <Header />

      <FavouriteOffers favouriteData= {favorites}/>
      <footer className='footer container'>
        <Link className='footer__logo-link' to={AppRoute.MainPage}>
          <img className='footer__logo' src='img/logo.svg' alt='6 cities logo' width='64' height='33' />
        </Link>
      </footer>
    </div>
  );
}

export default FavouritesPage;

