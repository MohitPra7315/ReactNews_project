import './Catagoryicon.css';
// import { btn } from './btn';

function Catagoryicon({Filtercatagry,setTitle,title}) {
   
    // console.log(Filtercatagry)


   function dataHandler(val){
    // console.log(val)
    setTitle(val)

   }

 return(
    <div className='cata-icon' >
{
    Filtercatagry.map((item)=>(
        <button  className='Btn' onClick={()=>dataHandler(item.catname)} key={item.id}>{item.catname}</button>
    ))
}
    </div>
 )

 
}



export default Catagoryicon;