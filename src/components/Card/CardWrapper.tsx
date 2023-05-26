import { ReactNode } from 'react';
import { CardContainer } from '../../styles/theme';
import { CardContent } from '@mui/material';

interface CardProps {
	children: ReactNode;
}
const Card = ({ children }: CardProps) => {
	return (
		<CardContainer>
			<CardContent>{children}</CardContent>
		</CardContainer>
	);
};

export default Card;
