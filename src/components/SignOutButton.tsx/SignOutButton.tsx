import { Button } from '@mui/material';
import { t } from 'i18next';
import { useNavigate } from 'react-router-dom';

const SignOutButton = () => {
	const navigate = useNavigate();

	const handleSignOut = () => {
		navigate('/');
	};

	return (
		<Button variant='contained' color='secondary' onClick={handleSignOut}>
			{t('signOut')}
		</Button>
	);
};

export default SignOutButton;
