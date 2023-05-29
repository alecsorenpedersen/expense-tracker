import { Grid, Typography, styled } from '@mui/material';
import EntryForm from '../../components/Form/Form';
import ExpenseList from '../../components/List/List';

import SummaryChart from '../../components/Charts/SummaryChart';
import CategoryPieChart from '../../components/Charts/CategoryChart';
import BudgetTrackerChart from '../../components/Charts/BudgetTracker';

import { useTranslation } from 'react-i18next';
import Layout from '../../layout/Layout';

export const Header = styled(Typography)({
	align: 'center',
	fontSize: '1.5rem',
});

const Dashboard = () => {
	const { t } = useTranslation();
	return (
		<Layout>
			<Grid container spacing={3} style={{ padding: '40px' }}>
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
