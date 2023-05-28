/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import MainCard from './CardWrapper';

describe('MainCard', () => {
	it('should render the children inside the card content', () => {
		const { getByText } = render(
			<MainCard>
				<p>Test content</p>
			</MainCard>,
		);

		const contentElement = getByText('Test content');
		expect(contentElement).toBeInTheDocument();
	});
});
