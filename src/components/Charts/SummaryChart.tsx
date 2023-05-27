import Chart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import { Record } from '../../types';
import { RootState } from '../../reducers';
import MainCard from '../Card/CardWrapper';

const SummaryChart = () => {
	const records = useSelector((state: RootState) => state.records);

	const totalIncome = records
		.filter((record: Record) => record.type === 'income')
		.reduce((sum: number, record: Record) => sum + record.value, 0);
	const totalExpenses = records
		.filter((record: Record) => record.type === 'expense')
		.reduce((sum: number, record: Record) => sum + record.value, 0);

	const series = [
		{
			name: 'Summary',
			data: [totalIncome ?? 0, totalExpenses ?? 0],
		},
	];

	const options = {
		chart: { type: 'bar' as const },
		plotOptions: { bar: { horizontal: true } },
		xaxis: {
			categories: ['Income', 'Expenses'],
		},
	};

	return (
		<MainCard>
			<Chart options={options} series={series} type='bar' />
		</MainCard>
	);
};

export default SummaryChart;
