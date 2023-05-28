import { Grid } from '@mui/material';
import EntryForm from '../Form/Form';
import ExpenseList from '../List/List';
import Layout from '../../layout/Layout';
import SummaryChart from '../Charts/SummaryChart';
import CategoryPieChart from '../Charts/CategoryChart';
import BudgetTrackerChart from '../Charts/BudgetTracker';
import { Header } from '../../styles/theme';

const Dashboard = () => {
	return (
		<Layout>
			<Grid container spacing={3} style={{ padding: '20px' }}>
				<Grid item xs={12} md={12}>
					<Header variant='h1' align='center' paddingBottom='-100px'>
						Your Expenses Dashboard
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
