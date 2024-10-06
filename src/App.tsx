import './App.css';
import { useAppSelector } from './store/hooks/hooks';

function App() {
	const { isLoading } = useAppSelector((state) => state.authReducer);
	var number;
	console.log(isLoading || true);

	return <>helloe</>;
}

export default App;
