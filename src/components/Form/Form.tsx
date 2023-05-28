import { Button } from '@mui/material';
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
import SelectField from '../SelectField/SelectField';
import { INITIAL_VALUES } from './constants';
import MainCard from '../Card/CardWrapper';

const EntryForm = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();

	const CATEGORIES = [
		{ value: 'food', label: t('food') },
		{ value: 'entertainment', label: t('entertainment') },
		{ value: 'travel', label: t('travel') },
		{ value: 'education', label: t('education') },
		{ value: 'investment', label: t('investment') },
		{ value: 'wages', label: t('wages') },
		{ value: 'other', label: t('other') },
	];

	const TYPES = [
		{ value: 'income', label: t('income') },
		{ value: 'expense', label: t('expense') },
	];

	const onSubmit = (
		values: FormValues,
		{ resetForm }: FormikHelpers<FormValues>,
	) => {
		dispatch(
			addRecord({
				...values,
				value: Number(values.value),
				category: values.category,
			}),
		);
		resetForm();
	};

	return (
		<MainCard data-testid='entry-form'>
			<Title variant='h5'>{t('newTransaction')}</Title>
			<Formik
				initialValues={INITIAL_VALUES}
				validationSchema={recordValidationSchema}
				onSubmit={onSubmit}>
				<Form>
					<Field
						label={t('date')}
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
					<SelectField
						data-testid='type'
						name='type'
						label={t('type')}
						items={TYPES}
					/>
					<SelectField
						data-testid='category'
						name='category'
						label={t('category')}
						items={CATEGORIES}
					/>
					<Button variant='contained' color='primary' fullWidth type='submit'>
						{t('addTransaction')}
					</Button>
				</Form>
			</Formik>
		</MainCard>
	);
};

export default EntryForm;
