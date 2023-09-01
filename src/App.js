
import './App.css';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Footer from './customer/components/Footer/Footer';
import Navigation from "./customer/components/Navigation/Navigation"
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Product from './customer/components/Products/Product';
import HomePage from './customer/pages/HomePage/HomePage.jsx';

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        {/* <HomePage/> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        {/* <Checkout/> */}
        {/* <Order/> */}
        <OrderDetails/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
