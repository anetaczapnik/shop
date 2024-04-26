import {
    HashRouter,
    Route,
    Routes
} from 'react-router-dom';
import Header from './components/Header';
import Main from "./components/Main";
import Clothes from "./components/Clothes";
import Shoes from "./components/Shoes";

const App = () =>  {
  return (
          <HashRouter>
              <Routes>
                  <Route path='/' element={
                      <div>
                          <Header/>
                          <Main />
                      </div>} />
                  <Route path='/shoes' element={
                      <div>
                          <Header/>
                          <Shoes />
                      </div>} />
                  <Route path='/clothes' element={
                      <div>
                          <Header/>
                          <Clothes />
                      </div>} />
              </Routes>
          </HashRouter>
  );
}

export default App;