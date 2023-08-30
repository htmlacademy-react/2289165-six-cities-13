import { OfferPreview } from '../../types';
import Header from '../../components/header/header';
import CitiesPlaces from '../../components/cities-places/cities-places';
import { getOffersByCity } from '../../utils';
import { useAppSelector } from '../../hooks';
import { useDispatch } from 'react-redux';
import { changeCity } from '../../store/action';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type MainPageProps = {
  offers: OfferPreview[];
}

function MainPage({ offers }: MainPageProps): JSX.Element {

  const dispatch = useDispatch();
  const handleCityClick = (evt: React.MouseEvent<HTMLLabelElement, MouseEvent>) =>
    dispatch(changeCity(evt.currentTarget.title));

  const selectedCity = useAppSelector((state) => state.city);

  const offersByCity = getOffersByCity(offers, selectedCity);
  if (offersByCity.length === 0) {

    return (
      <div className='page page--gray page--main page__main--index-empty'>
        <Header />

        <main className='page__main page__main--index '>
          <h1 className='visually-hidden'>Cities</h1>
          <div className='tabs'>
            <section className='locations container'>
              <ul className='locations__list tabs__list'>
                <li className='locations__item'>
                  <Link className={`locations__item-link tabs__item ${selectedCity === 'Paris' ? 'tabs__item--active' : ''}`} to={AppRoute.MainPage} title="Paris" >
                    <span title="Paris" onClick={handleCityClick}>Paris</span>
                  </Link>
                </li>
                <li className='locations__item'>
                  <Link className={`locations__item-link tabs__item ${selectedCity === 'Cologne' ? 'tabs__item--active' : ''}`} to={AppRoute.MainPage}>
                    <span title="Cologne" onClick={handleCityClick}>Cologne</span>
                  </Link>
                </li>
                <li className='locations__item'>
                  <Link className={`locations__item-link tabs__item ${selectedCity === 'Brussels' ? 'tabs__item--active' : ''}`} to={AppRoute.MainPage}>
                    <span title="Brussels" onClick={handleCityClick}>Brussels</span>
                  </Link>
                </li>
                <li className='locations__item'>
                  <Link className={`locations__item-link tabs__item ${selectedCity === 'Amsterdam' ? 'tabs__item--active' : ''}`} to={AppRoute.MainPage}>
                    <span title="Amsterdam" onClick={handleCityClick}>Amsterdam</span>
                  </Link>
                </li>
                <li className='locations__item'>
                  <Link className={`locations__item-link tabs__item ${selectedCity === 'Hamburg' ? 'tabs__item--active' : ''}`} to={AppRoute.MainPage}>
                    <span title="Hamburg" onClick={handleCityClick}>Hamburg</span>
                  </Link>
                </li>
                <li className='locations__item'>
                  <Link className={`locations__item-link tabs__item ${selectedCity === 'Dusseldorf' ? 'tabs__item--active' : ''}`} to={AppRoute.MainPage}>
                    <span title="Dusseldorf" onClick={handleCityClick}>Dusseldorf</span>
                  </Link>
                </li>
              </ul>
            </section>
          </div>
          <div className='cities'>
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in {selectedCity}</p>
                </div>
              </section>
              <div className="cities__right-section">
              </div>
            </div>
          </div>
        </main >
      </div >
    );
  }


  const selectedCityLocation = offersByCity[0].city.location;

  return (
    <div className='page page--gray page--main'>
      <Header />
      <main className='page__main page__main--index '>
        <h1 className='visually-hidden'>Cities</h1>
        <div className='tabs'>
          <section className='locations container'>
            <ul className='locations__list tabs__list'>
              <li className='locations__item'>
                <Link className={`locations__item-link tabs__item ${selectedCity === 'Paris' ? 'tabs__item--active' : ''}`} to={AppRoute.MainPage}>
                  <span title="Paris" onClick={handleCityClick}>Paris</span>
                </Link>
              </li>
              <li className='locations__item'>
                <Link className={`locations__item-link tabs__item ${selectedCity === 'Cologne' ? 'tabs__item--active' : ''}`} to={AppRoute.MainPage}>
                  <span title="Cologne" onClick={handleCityClick}>Cologne</span>
                </Link>
              </li>
              <li className='locations__item'>
                <Link className={`locations__item-link tabs__item ${selectedCity === 'Brussels' ? 'tabs__item--active' : ''}`} to={AppRoute.MainPage}>
                  <span title="Brussels" onClick={handleCityClick}>Brussels</span>
                </Link>
              </li>
              <li className='locations__item'>
                <Link className={`locations__item-link tabs__item ${selectedCity === 'Amsterdam' ? 'tabs__item--active' : ''}`} to={AppRoute.MainPage}>
                  <span title="Amsterdam" onClick={handleCityClick}>Amsterdam</span>
                </Link>
              </li>
              <li className='locations__item'>
                <Link className={`locations__item-link tabs__item ${selectedCity === 'Hamburg' ? 'tabs__item--active' : ''}`} to={AppRoute.MainPage}>
                  <span title="Hamburg" onClick={handleCityClick}>Hamburg</span>
                </Link>
              </li>
              <li className='locations__item'>
                <Link className={`locations__item-link tabs__item ${selectedCity === 'Dusseldorf' ? 'tabs__item--active' : ''}`} to={AppRoute.MainPage}>
                  <span title="Dusseldorf" onClick={handleCityClick}>Dusseldorf</span>
                </Link>
              </li>
            </ul>
          </section>
        </div>
        <div className='cities'>
          <CitiesPlaces offersByCity={offersByCity} selectedCityByName={selectedCity} selectedCityLocation={selectedCityLocation} />
        </div>
      </main >
    </div >
  );
}

export default MainPage;

