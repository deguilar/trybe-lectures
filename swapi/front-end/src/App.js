import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Planets from './pages/Planets';
import People from './pages/People';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className='container'>
			<BrowserRouter>
				<Switch>
					<Route exact path='/planets' component={Planets} />
					<Route exact path='/people' component={People} />
				</Switch>
			</BrowserRouter>
    </div>
  );
}

export default App;
