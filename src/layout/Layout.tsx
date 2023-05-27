import SideNav from './SideBar';
import { LayoutContainer, LayoutMain } from '../styles/theme';
import { LayoutProps } from '../types';

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<SideNav />
			<LayoutMain>
				<LayoutContainer>{children}</LayoutContainer>
			</LayoutMain>
		</>
	);
};

export default Layout;
