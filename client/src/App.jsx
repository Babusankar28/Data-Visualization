import DataChart from "./components/DataChart";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-5">
        <h3 className="text-center text-2xl mb-4">
          Car sales bar diagram using MERN Stack
        </h3>
        <div className="w-3/5 p-10 shadow-lg mx-auto bg-white">
          <DataChart />
        </div>
      </div>
    </>
  );
}

export default App;
