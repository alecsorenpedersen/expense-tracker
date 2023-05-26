import { Button, MenuItem } from '@mui/material';
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik';
import { TextField } from 'formik-mui';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Title } from '../../styles/theme';
import Card from '../Card/CardWrapper';
import { addRecord } from '../../actions';

interface FormValues {
	date: string;
	info: string;
	value: string;
	type: 'income' | 'expense';
}

const initialValues: FormValues = {
	date: '',
	info: '',
	value: '',
	type: 'expense',
};

const validationSchema = Yup.object({
	date: Yup.string().required('Required'),
	info: Yup.string().required('Required'),
	value: Yup.number().required('Required'),
	type: Yup.string().oneOf(['income', 'expense']).required('Required'),
});

const EntryForm = () => {
	const dispatch = useDispatch();

	const onSubmit = (
		values: FormValues,
		{ resetForm }: FormikHelpers<FormValues>,
	) => {
		dispatch(addRecord({ ...values, value: Number(values.value) }));
		resetForm();
	};

	return (
		<Card>
			<Title variant='h5'>New Record</Title>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}>
				{() => (
					<Form>
						<Field
							component={TextField}
							fullWidth
							margin='normal'
							label='Date'
							variant='outlined'
							name='date'
						/>
						<ErrorMessage name='date' component='div' />
						<Field
							component={TextField}
							fullWidth
							margin='normal'
							label='Description'
							variant='outlined'
							name='info'
						/>
						<ErrorMessage name='info' component='div' />
						<Field
							component={TextField}
							fullWidth
							margin='normal'
							label='Value'
							variant='outlined'
							name='value'
						/>
						<ErrorMessage name='value' component='div' />
						<Field
							component={TextField}
							fullWidth
							margin='normal'
							label='Type'
							variant='outlined'
							name='type'
							select>
							<MenuItem value='income'>Income</MenuItem>
							<MenuItem value='expense'>Expense</MenuItem>
						</Field>
						<ErrorMessage name='type' component='div' />
						<Button variant='contained' color='primary' fullWidth type='submit'>
							Add Record
						</Button>
					</Form>
				)}
			</Formik>
		</Card>
	);
};

export default EntryForm;
