import logo from './logo.svg';
import './App.css';
import CustomerDetails from './components/CustomerDetails';
import OrderInfo from './components/OrderInfo';
import ItemTable from './components/ItemTable';

function App() {
  return (
  <div className='info'>
  <div className='details'>
    <CustomerDetails/>
    <OrderInfo/>
  </div>
  <ItemTable />
  </div>
  );
}

export default App;
