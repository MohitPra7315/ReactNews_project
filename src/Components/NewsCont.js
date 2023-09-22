// import Spinner from './Spinner';
import './Newscont.css'
import NewsCard from './NewsCard';


function Newscont(props) {
    const contrynews = props.contrynews;
    const article=props.article;
    // console.log(article)

    // console.log("i ma inside the NewsContainer ")
    // console.log(contrynews);
    const articles=contrynews.articles;
    console.log("this i Articles nes data")
    // console.log(articles)
    return (
        <div className='Newscont'>
            {/* <h1 className="contheading"> News is here</h1> */}
        

            {
             contrynews.status!=="error"?
             
             articles.map((onenews,index)=><NewsCard key={index} onenews={onenews}></NewsCard> )
                   :
                   <div> Not data found</div>
            }
        
    
        </div>
    );
}

export default Newscont;
