import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './components/css/style.css'
import './components/css/responsive.css'
import './components/css/AppStyle.css'
import routes from './routes';

function App() {

  return (
    <>
      <div className="Main">
        <HashRouter>
          <Header />
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
          </Routes>
        </HashRouter>
      </div>
    </>

  );
}

export default App;
