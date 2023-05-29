import { useSelector } from 'react-redux';
import { Record } from '../../types';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { RootState } from '../../redux/reducers';
import { Title } from '../../styles/theme';
import SetBudgetForm from '../BudgetForm/SetBudgetForm';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@mui/material';

const BudgetTrackerChart = () => {
	const { t } = useTranslation();
	const records = useSelector((state: RootState) => state.records);
	const budgetGoal = useSelector((state: RootState) => state.budget);

	const totalExpenses = records
		.filter((record: Record) => record.type === 'expense')
		.reduce((sum: number, record: Record) => sum + record.value, 0);

	// Calculate the remaining budget
	const remainingBudget = budgetGoal - totalExpenses;

	// Calculate the percentage of the remaining budget
	const percentageRemaining =
		budgetGoal > 0 ? Math.max((remainingBudget / budgetGoal) * 100, 0) : 100;

	// Calculate the percentage of the spent budget
	const percentageSpent = 100 - percentageRemaining;

	// Include both series
	const series = [percentageSpent, percentageRemaining];

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
		labels: ['Spent Budget', 'Remaining Budget'],
	};

	return (
		<Card data-testid='budget-tracker-chart'>
			<CardContent>
				<Title variant='h5'>
					{t('budget')}: £{budgetGoal}
				</Title>
				<Title variant='h5'>
					{t('remaining')}: £{remainingBudget}
				</Title>
				<Chart options={options} series={series} type='radialBar' />
				<SetBudgetForm />
			</CardContent>
		</Card>
	);
};

export default BudgetTrackerChart;
