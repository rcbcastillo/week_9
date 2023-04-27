import Header from './components/Header.jsx'
import Trainer from './components/Trainer.jsx';
import AnotherComponent from './components/AnotherComponent.jsx';
import MyComponent from './components/MyComponent.jsx';
import PropComp from './components/PropComp.jsx';
import PropsTrainer from './components/PropsTrainer.jsx';
import ShowTrainers from './components/ShowTrainers.jsx';
import Counter from './components/Counter.jsx';
import Converter from './components/Converter.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Header />
      <Trainer />
      <h1><AnotherComponent /></h1>
      <MyComponent />
      <PropComp />
      <PropsTrainer name='James' age='37' />
      <ShowTrainers />
      <Counter />
      <Converter />
    </>
  );
}

export default App;
