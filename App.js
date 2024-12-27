import './App.css';
import '../src/components/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Login from './components/login';

function App() {
  return(
    <div className='gt-student'>
    <Navbar />
    <Login />
    </div>
  )
}

export default App;
