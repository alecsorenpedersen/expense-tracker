import { useCategoryTotals } from '../../hooks/useSelectors';
import { ApexOptions } from 'apexcharts';
import ChartWrapper from './ChartWrapper';
import { useTranslation } from 'react-i18next';

const CategoryPieChart = () => {
	const { t } = useTranslation();
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
			title={t('categories')}
		/>
	);
};

export default CategoryPieChart;
