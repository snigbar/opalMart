import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthLayout from './pages/auth/AuthLayout';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* auth */}
				<Route path="/" element={<div>home</div>}></Route>
				<Route path="/auth" element={<AuthLayout />}>
					<Route path="/auth/login" element={<Login />}></Route>
					<Route path="/auth/register" element={<Register />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
