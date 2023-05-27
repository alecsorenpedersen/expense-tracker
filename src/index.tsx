import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './styles/theme';

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

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Provider store={store}>
				<App />
			</Provider>
		</ThemeProvider>
	</React.StrictMode>,
);
reportWebVitals();
