import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Theme } from './style/theme';
import Home from './pages/Home';
import { GlobalStyle } from './style/GlobalStyle';
import Login from './pages/LogIn';

const router = createBrowserRouter([
	{
		path : '/',
		element : <Home/>,
		children : [
			{ path : '/login', element : <Login/>}
		]
	}
])

function App() {
	return (
		<React.Fragment>
			<ThemeProvider theme={Theme}>
				<GlobalStyle/>
				<RouterProvider router={router}/>
			</ThemeProvider>
		</React.Fragment>
	);
}

export default App;
