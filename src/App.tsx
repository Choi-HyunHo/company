import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
			<GlobalStyle/>
			<RouterProvider router={router}/>
		</React.Fragment>
		
	);
}

export default App;
