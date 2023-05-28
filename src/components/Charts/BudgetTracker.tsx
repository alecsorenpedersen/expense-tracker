import { useSelector } from 'react-redux';
import { Record } from '../../types';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { RootState } from '../../reducers';
import MainCard from '../Card/CardWrapper';
import { Title } from '../../styles/theme';
import SetBudgetForm from '../BudgetForm/SetBudgetForm';
import { t } from 'i18next';

const BudgetTrackerChart = () => {
	const records = useSelector((state: RootState) => state.records);
	const budgetGoal = useSelector((state: RootState) => state.budget);

	const totalExpenses = records
		.filter((record: Record) => record.type === 'expense')
		.reduce((sum: number, record: Record) => sum + record.value, 0);

	const percentageSpent =
		budgetGoal > 0 ? Math.min((totalExpenses / budgetGoal) * 100, 100) : 0;

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
			<Title variant='h5'>
				{t('budget')}: £{budgetGoal}
			</Title>
			<Chart options={options} series={series} type='radialBar' />
			<SetBudgetForm />
		</MainCard>
	);
};

export default BudgetTrackerChart;
