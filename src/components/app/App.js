import Books from "../books/Books";
import Footer from "../footer/Footer";
import Home from "../home-page/Home";
import Navbar from "../navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Books />
      <Footer />
    </div>
  );
}

export default App;
