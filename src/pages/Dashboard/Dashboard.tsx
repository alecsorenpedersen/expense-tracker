import { Grid } from '@mui/material';
import EntryForm from '../../components/Form/Form';
import ExpenseList from '../../components/List/List';
import Layout from '../../layout/Layout';
import SummaryChart from '../../components/Charts/SummaryChart';
import CategoryPieChart from '../../components/Charts/CategoryChart';
import BudgetTrackerChart from '../../components/Charts/BudgetTracker';
import { Header } from '../../styles/theme';
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
	const { t } = useTranslation();
	return (
		<Layout>
			<Grid container spacing={3} style={{ padding: '20px' }}>
				<Grid item xs={12} md={12}>
					<Header variant='h1' align='center' paddingBottom='-100px'>
						{t('your-expenses-dashboard')}
					</Header>
				</Grid>
				<Grid item xs={12} md={3}>
					<EntryForm />
				</Grid>
				<Grid item xs={12} md={3}>
					<ExpenseList />
				</Grid>
				<Grid item xs={12} md={3}>
					<BudgetTrackerChart />
				</Grid>

				<Grid item xs={12} md={3}>
					<SummaryChart />
				</Grid>
				<Grid item xs={12} md={3}>
					<CategoryPieChart />
				</Grid>
			</Grid>
		</Layout>
	);
};

export default Dashboard;
