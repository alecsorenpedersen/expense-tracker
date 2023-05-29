import { CardContainer } from '../../../styles/theme';
import { CardContent } from '@mui/material';
import { CardProps } from '../../../types';

const MainCard = ({ children }: CardProps) => {
	return (
		<CardContainer>
			<CardContent>{children}</CardContent>
		</CardContainer>
	);
};

export default MainCard;
