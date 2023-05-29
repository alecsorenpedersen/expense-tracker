import { render, screen } from '@testing-library/react';
import { Formik, Form } from 'formik';
import SelectField from './SelectField';

describe('SelectField', () => {
	const options = [
		{ value: 'option1', label: 'Option 1' },
		{ value: 'option2', label: 'Option 2' },
		{ value: 'option3', label: 'Option 3' },
	];

	it('renders the select field', () => {
		render(
			<Formik initialValues={{}} onSubmit={() => {}}>
				<Form>
					<SelectField name='myField' label='My Field' items={options} />
				</Form>
			</Formik>,
		);

		const selectField = screen.getByLabelText('My Field-input');
		expect(selectField).toBeInTheDocument();
	});
});
