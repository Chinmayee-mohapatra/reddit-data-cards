import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <div className="w-full h-full">
      <Header />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
