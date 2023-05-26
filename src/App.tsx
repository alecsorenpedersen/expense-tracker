import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/dashboard' element={<Dashboard />} />
			</Routes>
		</Router>
	);
}

export default App;
