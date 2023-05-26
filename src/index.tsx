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

const store = createStore(rootReducer);

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
