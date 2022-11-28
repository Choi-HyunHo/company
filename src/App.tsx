import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Theme } from './style/theme';

// page
import Home from './pages/Home';
import { GlobalStyle } from './style/GlobalStyle';

const router = createBrowserRouter([
	{
		path : '/home',
		element : <Home/>
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
