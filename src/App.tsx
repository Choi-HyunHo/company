import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Theme } from './style/theme';
import { GlobalStyle } from './style/GlobalStyle';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from './store/store';
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

// page
import Home from './pages/Home';
import Login from './pages/login/LogIn';
import ErrorPage from './pages/ErrorPage';
import SignUp from './pages/login/SignUp';

const queryClient = new QueryClient();
const persistor = persistStore(store);

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
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<QueryClientProvider client={queryClient}>
						<ThemeProvider theme={Theme}>
							<GlobalStyle/>
								<RouterProvider router={router}/>
						</ThemeProvider>
					</QueryClientProvider>
				</PersistGate>
			</Provider>
		</React.Fragment>
	);
}

export default App;
