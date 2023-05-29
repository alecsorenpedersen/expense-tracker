import Chart from 'react-apexcharts';
import { Title } from '../../styles/theme';
import { ChartWrapperProps } from '../../types';
import { Card, CardContent } from '@mui/material';

const ChartWrapper = ({ options, series, type, title }: ChartWrapperProps) => {
	return (
		<Card>
			<CardContent>
				<Title variant='h5'>{title}</Title>
				<Chart options={options} series={series} type={type} />
			</CardContent>
		</Card>
	);
};

export default ChartWrapper;
