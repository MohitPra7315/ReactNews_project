// import { Route } from 'react-router-dom';
import './App.css';
import { countrydata } from "./data"
import SideNavbar from './Components/sideNavbar';
import Newscont from './Components/NewsCont';
import { useEffect, useState } from 'react';
import Spinner from './Components/Spinner';
import Catagoryicon from './Components/Catagoryicon';

import { Filtercatagry } from './data'

const MohitAccountkey='029e54450e4540c39351a30c01b18aff'
const mukeshAccountkey='f6636d4b04264056837a5ec656b046a5'

// const NewsAPI = "https://newsapi.org/v2/top-headlines?country=hu&apiKey=029e54450e4540c39351a30c01b18aff";
function App() {
  const countryIcon = countrydata;

  const [catagry, setCatagry] = useState('in');
  const [title, setTitle] = useState('')
  const [page, setPage] = useState(1)
  // const [totalart, setTotalart] = useState([])
  const [article, setarticle] = useState([])
  const [contrynews, setContrynews] = useState([]);
  const [contruName, setCountruName] = useState([])
  const [isloading, setIsloding] = useState(true);
  console.log(page)
  // console.log(totalart)
  console.log(contrynews)

// console.log(contrynews)

  // console.log(` this country${catagry} and ${title}`)

  useEffect(() => {


    async function Newsdata() {
      setIsloding(true)
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${catagry}&category=${title}&page=${page}&apiKey=f6636d4b04264056837a5ec656b046a5`)
        const output = await response.json();
        // console.log(output);
        setContrynews(output)
        // setContrynews((prevdata)=>[...prevdata,...output])
        // setTotalart(output.totalResults)
        setarticle((prevdata)=>[...prevdata,output.articles])


      } catch (error) {
        console.log("dekho bhayia error aaya h ")
      }
      setIsloding(false)
    }

    Newsdata();

  }, [catagry, title, page])



  //  this is for Infinite scroll fetch data 

  // useEffect(() => {
  //   // Add a scroll event listener
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     // Remove the event listener when the component unmounts
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const handleScroll = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop ===
  //     document.documentElement.offsetHeight
  //   ) {
  //     // User has reached the bottom of the page
  //     // setPage((prevPage) => prevPage + 1); // Load more data for the next page
  //   }
  // };





  function pageHandler() {

    console.log(page + 1)
    if (page <2) {
      setPage(page + 1)
    }
    else {
      setPage(1)
    }

  }




  // console.log(countryIcon)

  return (
    <div className="App">
      <h1 className="heading">All OVER World News</h1>
      <div className='upperNav'>
        <Catagoryicon title={title} setTitle={setTitle} Filtercatagry={Filtercatagry}></Catagoryicon>
      </div>

      <div className='container'>
        {/* <sideNavbar countrydata={countryIcon} ></SideNavbar> */}

        <div className="side">
          <SideNavbar countrydata={countryIcon} setCountruName={setCountruName} catagry={catagry} setCatagry={setCatagry}></SideNavbar>

        </div>


        <div className='nesside'>

          <div className='cont-card'>

            {isloading ?
              (<Spinner></Spinner>) :

              (<Newscont contrynews={contrynews} article={article} setContrynews={setContrynews}  ></Newscont>)}
          </div>
{
  contrynews.status=="ok"&&
          <button onClick={pageHandler} className='More-news'>More News</button>
}

        </div>
      </div>

    </div>
  );
}

export default App;
