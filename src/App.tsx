import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Theme } from './style/theme';
import { GlobalStyle } from './style/GlobalStyle';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CookiesProvider } from 'react-cookie';

// page
import Home from './pages/Home';
import Login from './pages/login/LogIn';
import ErrorPage from './pages/ErrorPage';
import SignUp from './pages/login/SignUp';

const queryClient = new QueryClient();

const router = createBrowserRouter([
	{
		path : '/',
		element : <Home/>,
		errorElement : <ErrorPage/>,
		children : [
			{ path : '/login', element : <Login/>},
			{ path : '/signup', element : <SignUp/>}
		]
	}
])

function App() {
	return (
		<React.Fragment>
			<CookiesProvider>
				<QueryClientProvider client={queryClient}>
					<ThemeProvider theme={Theme}>
						<GlobalStyle/>
						<RouterProvider router={router}/>
					</ThemeProvider>
				</QueryClientProvider>
			</CookiesProvider>
		</React.Fragment>
	);
}

export default App;
