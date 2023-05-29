import { LayoutContainer, LayoutMain } from '../styles/theme';
import { LayoutProps } from '../types';

const Layout = ({ children, ...props }: LayoutProps) => {
	return (
		<LayoutMain data-testid='layout-main' style={{ padding: '20px' }}>
			<LayoutContainer data-testid='layout-container'>
				{children}
			</LayoutContainer>
		</LayoutMain>
	);
};

export default Layout;
