import { Button } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField } from 'formik-mui';
import { loginValidationSchema } from '../../schema/validation';
import { LoginFormProps } from '../../types';

const LoginForm = ({ onSubmit }: LoginFormProps) => {
	return (
		<Formik
			initialValues={{
				username: '',
				password: '',
			}}
			validationSchema={loginValidationSchema}
			onSubmit={onSubmit}>
			{({ isSubmitting }) => (
				<Form>
					<Field
						component={TextField}
						fullWidth
						margin='normal'
						name='username'
						label='Username'
						variant='outlined'
					/>
					<ErrorMessage name='username' component='div' />
					<Field
						component={TextField}
						fullWidth
						margin='normal'
						name='password'
						label='Password'
						variant='outlined'
						type='password'
					/>
					<ErrorMessage name='password' component='div' />
					<Button
						variant='contained'
						color='primary'
						fullWidth
						type='submit'
						disabled={isSubmitting}>
						Login
					</Button>
				</Form>
			)}
		</Formik>
	);
};

export default LoginForm;
