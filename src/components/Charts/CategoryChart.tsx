import { useSelector } from 'react-redux';
import { Record } from '../../types';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { RootState } from '../../reducers';
import MainCard from '../Card/CardWrapper';

const CategoryPieChart = () => {
	const records = useSelector((state: RootState) => state.records);

	const expenseRecords = records.filter(
		(record: Record) => record.type === 'expense',
	);

	const categoryTotals: { [key: string]: number } = expenseRecords.reduce(
		(totals: { [key: string]: number }, record: Record) => {
			if (!totals[record.category]) {
				totals[record.category] = 0;
			}
			totals[record.category] += record.value;
			return totals;
		},
		{},
	);

	const categories = Object.keys(categoryTotals);
	const totals = Object.values(categoryTotals);

	const series = totals;
	const options: ApexOptions = {
		labels: categories,
	};
	return (
		<MainCard>
			<Chart options={options} series={series} type='pie' />
		</MainCard>
	);
};

export default CategoryPieChart;
