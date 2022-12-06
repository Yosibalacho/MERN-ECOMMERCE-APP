import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DataProvider from "./contexts/OrderContext";
import NavBar from "./components/features/Navbar/NavBar";
import Header from "./components/features/Header/Header";
import BarChart from "./components/pages/LineChart/LineChart";
import Tables from "./components/pages/Tables/Tables";
function App() {
  return (
    <div className="App">
      <DataProvider>
        <NavBar />
        <Header />
        <BarChart />
        <Tables />
      </DataProvider>
    </div>
  );
}

export default App;
