import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignOutButton = () => {
	const navigate = useNavigate();

	const handleSignOut = () => {
		// localStorage.clear();
		navigate('/');
	};

	return (
		<Button variant='contained' color='secondary' onClick={handleSignOut}>
			Sign Out
		</Button>
	);
};

export default SignOutButton;
