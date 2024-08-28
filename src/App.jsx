import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import {useState} from 'react';
import satData from "./components/satData.jsx";


function App() {
  const [sat, setSat] = useState(satData); //from task 3
  const displaySats = [...new Set(satData.map((data) => data.orbitType))]; //from task 3

   const filterByType = (currentType) => { //from task 3
     const displaySats = satData.filter((newSatDisplay) => { //from task 3
        return newSatDisplay.orbitType === currentType; //fromt task 3
     }); //from task 3
     setSat(displaySats); //from task 3
    }; //from task 3

  return (
    <div>
      <Banner />
      <Buttons 
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats}
      />
      <Table sat={sat}/>
    </div>
  );
}

export default App;