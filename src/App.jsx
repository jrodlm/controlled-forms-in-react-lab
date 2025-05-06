import './App.css';
import Bookshelf from './components/Bookshelf/Bookshelf';

console.log("Rendering Bookshelf component");

const App = () => {
 return (
 <div>
 <h1>My Bookshelf</h1>;
  <Bookshelf />
  </div>
 );
};

export default App;
