import { FavouriteOffer } from '../../mocks/favourite';
import Header from '../../components/header/header';
import FavouriteOffers from '../../components/favourite-offers/favourite-offers';
import { AuthorizationStatus } from '../../const';

type FavouriteProps = {
  favouriteData: FavouriteOffer[];
}

function FavouritesPage({ favouriteData }: FavouriteProps): JSX.Element {
  const classNameForEmptyPage = favouriteData.length < 1 ? 'page--favorites-empty' : '';

  return (
    <div className={`page ${classNameForEmptyPage}`}>
      <Header authorizationStatus={AuthorizationStatus.Auth}/>

      <FavouriteOffers favouriteData= {favouriteData}/>
      <footer className='footer container'>
        <a className='footer__logo-link' href='main.html'>
          <img className='footer__logo' src='img/logo.svg' alt='6 cities logo' width='64' height='33' />
        </a>
      </footer>
    </div>
  );
}

export default FavouritesPage;

