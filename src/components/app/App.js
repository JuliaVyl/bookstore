import Books from "../books/Books";
import Home from "../home-page/Home";
import Navbar from "../navbar/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Books />
    </div>
  );
}

export default App;
