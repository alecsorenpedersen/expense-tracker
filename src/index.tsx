import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './styles/theme';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18.n';

const saveToLocalStorage = (state: any) => {
	try {
		const serialisedState = JSON.stringify(state);
		localStorage.setItem('persistedState', serialisedState);
	} catch (e) {
		console.warn(e);
	}
};

const loadFromLocalStorage = () => {
	try {
		const serialisedState = localStorage.getItem('persistedState');
		if (serialisedState === null) return undefined;
		return JSON.parse(serialisedState);
	} catch (e) {
		console.warn(e);
		return undefined;
	}
};

const persistedState = loadFromLocalStorage();

const store = createStore(rootReducer, persistedState);

store.subscribe(() => saveToLocalStorage(store.getState()));

ReactDOM.render(
	<I18nextProvider i18n={i18n}>
		<React.StrictMode>
			<ThemeProvider theme={theme}>
				<Provider store={store}>
					<CssBaseline />
					<App />
				</Provider>
			</ThemeProvider>
		</React.StrictMode>
	</I18nextProvider>,
	document.getElementById('root'),
);

reportWebVitals();
