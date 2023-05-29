import { CardContainer } from '../../../styles/theme';
import { CardContent } from '@mui/material';
import { CardProps } from '../../../types';

const MainCard = ({ children, ...props }: CardProps) => {
	return (
		<CardContainer {...props}>
			<CardContent>{children}</CardContent>
		</CardContainer>
	);
};

export default MainCard;
