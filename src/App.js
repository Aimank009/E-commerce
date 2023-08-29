
import './App.css';
import Navigation from "./customer/components/Navigation/Navigation"
import HomePage from './customer/pages/HomaPage/HomePage';

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        <HomePage/>
      </div>
    </div>
  );
}

export default App;
