import './App.css';
import Nav from './Components/Nav';
import Aboutus from './Components/Aboutus';
import Container from './Components/Container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
          <Container />
          <Aboutus />
      </header>
    </div>
  );
}

export default App;



//Components
// 1)Navbar
// 2)CSI VIT heading
// 3)About us & contact us
