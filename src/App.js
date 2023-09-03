
import './App.css';
import { countrydata } from "./data"
import SideNavbar from './Components/sideNavbar';
import Newscont from './Components/NewsCont';
import { useEffect, useState } from 'react';



const NewsAPI = "https://newsapi.org/v2/top-headlines?country=hu&apiKey=029e54450e4540c39351a30c01b18aff";
function App() {
  const countryIcon = countrydata;

  const [catagry, setCatagry] = useState('ar');

  const [contrynews, setContrynews] = useState();

  console.log(contrynews);
  useEffect(() => {


    async function Newsdata() {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${catagry}&apiKey=029e54450e4540c39351a30c01b18aff`)
        const output = await response.json();
        // console.log(output);
        setContrynews(output)
      } catch (error) {
        console.log("dekho bhayia error aaya h ")
      }
    }

    Newsdata();

  }, [catagry])













  console.log(countryIcon)

  return (
    <div className="App">
      <h1 className="heading">All OVER World News</h1>
      <div>
        cbind
      </div>

      <div className='container'>
        {/* <sideNavbar countrydata={countryIcon} ></SideNavbar> */}
        <SideNavbar countrydata={countryIcon} catagry={catagry} setCatagry={setCatagry}></SideNavbar>
        <Newscont contrynews={contrynews} setContrynews={setContrynews}  ></Newscont>
      </div>

    </div>
  );
}

export default App;
