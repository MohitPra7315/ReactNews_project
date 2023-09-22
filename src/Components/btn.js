
import './btn.css';

function btn({uniqcatogory,setUniqcatogory,cat}){
    console.log(cat)
function uniqueCatHandler(data){
    console.log(data)
}

    return(
        <div className='cat-cont' >
 <button className='Link' onClick={() => { uniqueCatHandler(cat.catname) }}  >{cat.catname}</button>
        </div>
    )
}

export default btn





