import LandingPage from '../../module/landingPage';
// import HelloPage from '../../module/hello';
import CartPage from '../../module/cart';
import { createBrowserRouter } from 'react-router-dom';

const routerList = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: 'cart',
    element: <CartPage />,
  },
  // {
  //   path: 'hello',
  //   element: <HelloPage />,
  // },
]);

export default routerList;
