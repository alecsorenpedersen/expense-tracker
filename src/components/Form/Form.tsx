import { Button, InputAdornment, MenuItem } from '@mui/material';
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik';
import { TextField } from 'formik-mui';
import { useDispatch } from 'react-redux';
import { Title } from '../../styles/theme';
import Card from '../Card/CardWrapper';
import { addRecord } from '../../actions';
import { FormValues } from '../../types';
import { recordValidationSchema } from '../../schema/validation';
import 'react-datepicker/dist/react-datepicker.css';
import CurrencyField from '../CurrencyField/CurrencyField';

const initialValues: FormValues = {
	date: '',
	info: '',
	value: '',
	type: 'expense',
	category: 'food',
};

const EntryForm = () => {
	const dispatch = useDispatch();

	const onSubmit = (
		values: FormValues,
		{ resetForm }: FormikHelpers<FormValues>,
	) => {
		dispatch(
			addRecord({
				...values,
				value: Number(values.value), // Convert the value to a number
				category: values.category,
			}),
		);
		resetForm();
	};

	return (
		<Card>
			<Title variant='h5'>New Record</Title>
			<Formik
				initialValues={initialValues}
				validationSchema={recordValidationSchema}
				onSubmit={onSubmit}>
				{() => (
					<Form>
						<Field
							component={TextField}
							type='date'
							fullWidth
							margin='normal'
							variant='outlined'
							name='date'
						/>

						<Field
							component={TextField}
							fullWidth
							margin='normal'
							label='Description'
							variant='outlined'
							name='info'
						/>
						<CurrencyField name='value' label='Amount' />
						<Field
							component={TextField}
							select
							fullWidth
							name='type'
							label='Type'
							variant='outlined'
							margin='normal'>
							<MenuItem value='income'>Income</MenuItem>
							<MenuItem value='expense'>Expense</MenuItem>
						</Field>
						<Field
							component={TextField}
							select
							fullWidth
							name='category'
							label='Category'
							variant='outlined'
							margin='normal'>
							<MenuItem value='food'>Food</MenuItem>
							<MenuItem value='entertainment'>
								Entertainment (Netfilx ect..)
							</MenuItem>
							<MenuItem value='travel'>Travel</MenuItem>
							<MenuItem value='education'>Education</MenuItem>
							<MenuItem value='travel'>Travel</MenuItem>
							<MenuItem value='investments'>Investments</MenuItem>
							<MenuItem value='wages'>Wages</MenuItem>
						</Field>
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
