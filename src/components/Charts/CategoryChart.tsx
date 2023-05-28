import { useCategoryTotals } from '../../hooks/useSelectors';
import { ApexOptions } from 'apexcharts';
import ChartWrapper from './ChartWrapper';

const CategoryPieChart = () => {
	const categoryTotals = useCategoryTotals();
	const categories = Object.keys(categoryTotals);
	const totals = Object.values(categoryTotals);
	const series = totals;
	const options: ApexOptions = {
		labels: categories,
	};

	return (
		<ChartWrapper
			options={options}
			series={series}
			type='pie'
			title='Categories'
		/>
	);
};

export default CategoryPieChart;
