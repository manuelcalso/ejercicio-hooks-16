import "./index.css";
import Crud from "./components/Crud";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Crud />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
