import { useSelector } from 'react-redux';
import { Record } from '../../types';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { RootState } from '../../reducers';
import MainCard from '../Card/CardWrapper';

const BudgetTrackerChart = () => {
	const records = useSelector((state: RootState) => state.records);

	const totalExpenses = records
		.filter((record: Record) => record.type === 'expense')
		.reduce((sum: number, record: Record) => sum + record.value, 0);

	const budgetGoal = 9000;
	const percentageSpent = Math.min((totalExpenses / budgetGoal) * 100, 100);

	const series = [percentageSpent];
	const options: ApexOptions = {
		plotOptions: {
			radialBar: {
				startAngle: -135,
				endAngle: 135,
				hollow: {
					margin: 0,
					size: '70%',
				},
				dataLabels: {
					show: true,
					name: {
						show: false,
					},
					value: {
						color: '#111',
						fontSize: '36px',
						show: true,
					},
				},
			},
		},
		labels: ['Budget'],
	};

	return (
		<MainCard>
			<Chart options={options} series={series} type='radialBar' />
		</MainCard>
	);
};

export default BudgetTrackerChart;
