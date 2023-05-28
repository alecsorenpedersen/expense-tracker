import { useTotalIncome, useTotalExpenses } from '../../hooks/useSelectors';
import ChartWrapper from './ChartWrapper';

const SummaryChart = () => {
	const totalIncome = useTotalIncome();
	const totalExpenses = useTotalExpenses();

	const series = [
		{
			name: 'Summary',
			data: [totalIncome, totalExpenses],
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
		<ChartWrapper
			options={options}
			series={series}
			type='bar'
			title='Summary'
		/>
	);
};

export default SummaryChart;
