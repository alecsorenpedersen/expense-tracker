import Chart from 'react-apexcharts';
import MainCard from '../Card/CardWrapper';
import { Title } from '../../styles/theme';
import { ChartWrapperProps } from '../../types';

const ChartWrapper = ({ options, series, type, title }: ChartWrapperProps) => {
	return (
		<MainCard>
			<Title variant='h5'>{title}</Title>
			<Chart options={options} series={series} type={type} />
		</MainCard>
	);
};

export default ChartWrapper;
