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
		<Button
			data-testid='sign-out-button'
			variant='contained'
			color='secondary'
			onClick={handleSignOut}
			style={{ borderRadius: '20px', color: 'white' }}>
			{t('signOut')}
		</Button>
	);
};

export default SignOutButton;
