import { TextField } from '@mui/material';
import { useField } from 'formik';
import CurrencyInput from 'react-currency-input-field';
import { CurrencyFieldProps } from '../../../types';

const CurrencyField = ({ name, label }: CurrencyFieldProps) => {
	const [field, meta, helpers] = useField(name);

	return (
		<TextField
			label={label}
			error={meta.touched && !!meta.error}
			helperText={meta.touched ? meta.error : ''}
			margin='normal'
			variant='outlined'
			fullWidth
			placeholder='£0.00'
			InputProps={{
				inputComponent: CurrencyInput as any,
				inputProps: {
					name: name,
					value: field.value,
					prefix: '£',
					decimalsLimit: 2,
					groupSeparator: ',',
					decimalSeparator: '.',
					onValueChange: (value: string, name: string) => {
						helpers.setValue(value);
					},
				},
			}}
		/>
	);
};

export default CurrencyField;
