import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './Layout';

jest.mock('react-i18next', () => ({
	useTranslation: () => ({
		t: jest.fn(),
		i18n: { language: 'en' }, // Provide a mock value for i18n.language
	}),
}));

describe('Layout', () => {
	it('renders the layout components with correct content', () => {
		render(
			<Router>
				<Layout>
					<div>Content</div>
				</Layout>
			</Router>,
		);

		expect(screen.getByTestId('layout-main')).toBeInTheDocument();
		expect(screen.getByTestId('layout-container')).toBeInTheDocument();
		expect(screen.getByText('Content')).toBeInTheDocument();
	});

	it('renders the layout components with correct styling', () => {
		render(
			<Router>
				<Layout>
					<div>Content</div>
				</Layout>
			</Router>,
		);

		expect(screen.getByTestId('layout-main')).toHaveStyle({
			display: 'flex',
			flex: '1 1 auto',
			maxWidth: '100%',
		});

		expect(screen.getByTestId('layout-container')).toHaveStyle({
			display: 'flex',
			flex: '1 1 auto',
			flexDirection: 'column',
			width: '100%',
		});
	});
});
