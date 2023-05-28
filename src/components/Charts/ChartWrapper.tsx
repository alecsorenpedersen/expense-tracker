import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import MainCard from '../Card/CardWrapper';
import { Title } from '../../styles/theme';

type ChartWrapperProps = {
	options: ApexOptions;
	series: any[];
	type: 'bar' | 'line' | 'radialBar' | 'pie';
	title: string;
};

const ChartWrapper: React.FC<ChartWrapperProps> = ({
	options,
	series,
	type,
	title,
}) => {
	return (
		<MainCard>
			<Title variant='h5'>{title}</Title>
			<Chart options={options} series={series} type={type} />
		</MainCard>
	);
};

export default ChartWrapper;
