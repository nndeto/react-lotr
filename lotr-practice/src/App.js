import logo from './logo.svg';
import './App.css';
import Movies from './components/Movies'

function App() {
  return (
    <div className="App">
      <h1>Finally, we've made it</h1>
      <Movies movieTitle = "Frodo" runTime = "72 minutes"/>
      <Movies movieTitle = "Samwise" runTime = "62 minutes"/>
      <Movies movieTitle = "Gollum" runTime = "65 minutes"/>
    </div>
  );
}

export default App;
