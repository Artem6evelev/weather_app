import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducers from './store/reducers/index';
import { Provider } from 'react-redux';

import Particles from 'react-particles-js';

const particlesOptions = {
	particles: {
		line_linked: {
			shadow: {
				enable: true,
				color: "#3CA9D1",
				blur: 5
			}
		}
	}
}

const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<BrowserRouter>
		<React.StrictMode>
			<Provider store={store}>

			<Particles className='particles'
			params={particlesOptions}
		  />

				<App />
			</Provider>
		</React.StrictMode>
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
