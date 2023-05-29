import { Button } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField } from 'formik-mui';
import { loginValidationSchema } from '../../schema/validation';
import { LoginFormProps } from '../../types';
import { useTranslation } from 'react-i18next';
import { logIn } from '../../redux/actions';
import { useDispatch } from 'react-redux';
const LoginForm = ({ onSubmit }: LoginFormProps) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	return (
		<Formik
			initialValues={{
				username: '',
				password: '',
			}}
			validationSchema={loginValidationSchema}
			onSubmit={(values, { setSubmitting }) => {
				onSubmit(values);
				dispatch(logIn());
				setSubmitting(false);
			}}>
			{({ isSubmitting }) => (
				<Form>
					<Field
						component={TextField}
						fullWidth
						margin='normal'
						name='username'
						label={t('username')}
						variant='outlined'
					/>
					<ErrorMessage name='username' component='div' />
					<Field
						component={TextField}
						fullWidth
						margin='normal'
						name='password'
						label={t('password')}
						variant='outlined'
						type='password'
						style={{ marginBottom: '20px' }}
					/>
					<ErrorMessage name='password' component='div' />
					<Button
						name='loginButton'
						variant='contained'
						color='primary'
						fullWidth
						type='submit'
						disabled={isSubmitting}>
						{t('login')}
					</Button>
				</Form>
			)}
		</Formik>
	);
};

export default LoginForm;
