import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const SignOutButton = () => {
	const { t } = useTranslation();
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
