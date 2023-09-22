import { useState } from 'react';
import './NewsCard.css'
// import {Link,Routes} from 'react-router-dom';

import { NavLink } from 'react-router-dom'

const NewsCard = (props) => {
    const Newsdata = props.onenews;
    const URl = Newsdata.URL;


    const [readmore, setReadmore] = useState(false)


    return (
        <div className="CardBox">

            <div className='image-cont'>
                {
                    (Newsdata.urlToImage === null) ? (  <NavLink to={Newsdata.url} target='blank' ><img src={require('./img/news.webp')} alt='' /></NavLink>) : (<NavLink to={Newsdata.url} target='blank' ><img src={Newsdata.urlToImage}></img></NavLink>)

                

                }


            </div>

            <div className='content-box'>


                <h2 className='source'> <span></span> <span className='chl-name'>{Newsdata.source.name}</span></h2>

                <div className='para'>

                    {(Newsdata.description == null) ? (<p>{Newsdata.title.substr(0, 140)+"..."}</p>) : (<p className=''>{Newsdata.description.substr(0, 130)+"..."}</p>)

                    }
                </div>


                <span className='aut-date'>
                    <p className='Author'><span className='au'>Author:-</span>   <span className='authir'>{(Newsdata.author === null) ? ("John") : (Newsdata.author)}</span></p>
                    <p className='publishdate'>{Newsdata.publishedAt}</p>

                </span>

                <span className='NavLink'>
                    <NavLink to={Newsdata.url} target='blank' >Read More</NavLink>

                </span>

                {/* <Link to={Newsdata.url}>Read more</Link> */}



            </div>

        </div>

    );
}

export default NewsCard;