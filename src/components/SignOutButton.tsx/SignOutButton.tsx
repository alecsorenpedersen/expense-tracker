import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/actions/index';

const SignOutButton = () => {
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const navigate = useNavigate();

	const handleSignOut = () => {
		dispatch(logOut());
		navigate('/');
	};

	return (
		<Button
			data-testid='sign-out-button'
			variant='contained'
			color='secondary'
			onClick={handleSignOut}
			style={{
				borderRadius: '20px',
				backgroundColor: 'white',
				color: 'black',
			}}>
			{t('signOut')}
		</Button>
	);
};

export default SignOutButton;
