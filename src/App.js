import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Grandpa from './component/Grandpa.js/Grandpa';
import Home from './component/Home/Home';
import Orders from './component/Orders.js/Orders';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:()=> fetch ('tshirts.json'),
          element:<Home></Home>
        },
        {
          path:'/orders',
          element:<Orders></Orders>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
        path:'/grandpa',
        element:<Grandpa></Grandpa>
       
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
