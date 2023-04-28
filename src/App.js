import './App.css';
import ModifiedCounter from './components/ModifiedCounter.jsx';
import trainers from '../src/assets/trainers.json'
import Trainer from './components/Trainer';


function App() {
  return (
    <div>
      <ModifiedCounter />
      {trainers.map(({ name, age, id }) => <Trainer key={id} name={name} age={age} />)}
    </div>
  );
}

export default App;
