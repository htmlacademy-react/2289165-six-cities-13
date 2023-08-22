import { OfferPreview } from '../../mocks/offers';
import Header from '../../components/header/header';
import CitiesPlaces from '../../components/cities-places/cities-places';
import { AuthorizationStatus } from '../../const';
import { useState } from 'react';


type MainPageProps = {
  offers: OfferPreview[];
}

function MainPage({ offers }: MainPageProps): JSX.Element {
  const classNameForEmptyPage = offers.length < 1 ? 'page__main--index-empty' : '';

  const [selectedCity, setSelectedCity] = useState<string>('Amsterdam');
  const cityClickHandle = (evt: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    const value = evt.currentTarget.title;
    setSelectedCity(value);
  };

  return (
    <div className={`page page--gray page--main ${classNameForEmptyPage}`}>
      <Header authorizationStatus={AuthorizationStatus.Auth} />

      <main className='page__main page__main--index '>
        <h1 className='visually-hidden'>Cities</h1>
        <div className='tabs'>
          <section className='locations container'>
            <ul className='locations__list tabs__list'>
              <li className='locations__item'>
                <a className='locations__item-link tabs__item' href='#' title="Paris">
                  <span title="Paris" onClick={cityClickHandle}>Paris</span>
                </a>
              </li>
              <li className='locations__item'>
                <a className='locations__item-link tabs__item' href='#'>
                  <span title="Cologne" onClick={cityClickHandle}>Cologne</span>
                </a>
              </li>
              <li className='locations__item'>
                <a className='locations__item-link tabs__item' href='#'>
                  <span title="Brussels" onClick={cityClickHandle}>Brussels</span>
                </a>
              </li>
              <li className='locations__item'>
                <a className='locations__item-link tabs__item tabs__item--active'>
                  <span title="Amsterdam" onClick={cityClickHandle}>Amsterdam</span>
                </a>
              </li>
              <li className='locations__item'>
                <a className='locations__item-link tabs__item' href='#'>
                  <span title="Hamburg" onClick={cityClickHandle}>Hamburg</span>
                </a>
              </li>
              <li className='locations__item'>
                <a className='locations__item-link tabs__item' href='#'>
                  <span title="Dusseldorf" onClick={cityClickHandle}>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className='cities'>
          <CitiesPlaces offers={offers} selectedCityByName={selectedCity}/>
        </div>
      </main >
    </div >
  );
}

export default MainPage;

