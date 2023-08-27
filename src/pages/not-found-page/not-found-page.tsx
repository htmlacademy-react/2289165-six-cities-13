import { Link } from 'react-router-dom';
import Header from '../../components/header/header';

function NotFoundPage(): JSX.Element {
  return (
    <>
      <Header />

      <main className="page__not-found-page">
        <div className="page__not-found-page-container container">
          <section>
            <h1 className="visually-hidden">Empty page</h1>
            <Link to="/">
              <div className="favorites__status-wrapper">
                <b className="favorites__status">404 NOT FOUND</b>
                <p className="favorites__status-description"> <u>Return to main page</u></p>
              </div>
            </Link>
          </section>
        </div>
      </main>
      <footer className="footer">
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
      </footer>
    </>
  );
}

export default NotFoundPage;

