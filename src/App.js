
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers/main';
import Header from './views/Header';
import Characters from "./components/Characters";
import Episodes from './components/Episodes';
import Locations from './components/Locations';
import SearchResults from './components/SearchResults';
import './App.css';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

function App() {
  return (

      <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Header></Header>
            <Switch>
              <Route path="/episodes" component={Episodes} />
              <Route path="/locations" component={Locations} />
              <Route path="/search" component={SearchResults} />
              <Route exact path="/" component={Characters} />
            </Switch>
        </BrowserRouter>
      </Provider>
    
  );
}

export default App;
