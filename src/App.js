import logo from './logo.svg';
import './App.css';
import Header from './app/components/layout/Header';
import CircleDots from './app/components/layout/CircleDots';
import './app/assets/styles/main.css';


function App() {
  return (
    <div className='container'>
      <div className='vectorV-1'>
        <Header />
        <div className='small-container'>
          <CircleDots />
        </div></div>
    </div>
  )
}

export default App;
