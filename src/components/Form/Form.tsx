import { Button, MenuItem } from '@mui/material';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { TextField } from 'formik-mui';
import { useDispatch } from 'react-redux';
import { Title } from '../../styles/theme';
import Card from '../Card/CardWrapper';
import { addRecord } from '../../actions';
import { FormValues } from '../../types';
import { recordValidationSchema } from '../../schema/validation';
import 'react-datepicker/dist/react-datepicker.css';
import CurrencyField from '../CurrencyField/CurrencyField';

import { useTranslation } from 'react-i18next';

const initialValues: FormValues = {
	date: '',
	info: '',
	value: '',
	type: 'expense',
	category: 'food',
};

const EntryForm = () => {
	const { t } = useTranslation();
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
		<Card data-testid='entry-form'>
			<Title variant='h5'>{t('newTransaction')}</Title>
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
							label={t('description')}
							variant='outlined'
							name='info'
						/>
						<CurrencyField name='value' label='Amount' />
						<Field
							component={TextField}
							select
							fullWidth
							name='type'
							label={t('type')}
							variant='outlined'
							margin='normal'>
							<MenuItem value='income'> {t('income')}</MenuItem>
							<MenuItem value='expense'> {t('expense')}</MenuItem>
						</Field>
						<Field
							component={TextField}
							select
							fullWidth
							name='category'
							label={t('category')}
							variant='outlined'
							margin='normal'>
							<MenuItem value='food'> {t('food')}</MenuItem>
							<MenuItem value='entertainment'>
								{t('entertainment')} (Netfilx ect..)
							</MenuItem>
							<MenuItem value='travel'> {t('travel')}</MenuItem>
							<MenuItem value='education'> {t('education')}</MenuItem>
							<MenuItem value='other'> {t('other')}</MenuItem>
							<MenuItem value='investments'> {t('investment')}</MenuItem>
							<MenuItem value='wages'> {t('wages')}</MenuItem>
						</Field>
						<Button variant='contained' color='primary' fullWidth type='submit'>
							{t('addTransaction')}
						</Button>
					</Form>
				)}
			</Formik>
		</Card>
	);
};

export default EntryForm;
