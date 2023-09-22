import './Links.css';


function Links({ country, catagry, setCatagry,setCountruName }) {



    // const country=props.country;
    function getsmallnamecountHandler(data) {
        // console.log(data.sn)
        // console.log(data.fn)
        setCountruName(data.fn)
        setCatagry(data.sn);

    }



    return (
        <div className="aside">

            <p onClick={() => { getsmallnamecountHandler(country) }}   className={`links ${country.isSelected ? 'selected' : ''}`}> 
                
               
             <span className='current'>{country.fn}</span></p>



        </div>

    )
}
export default Links


// <button onClick={() => { filterHandler(course.title) }} className={` rounded-md text-white bg-black hover:bg-opacity-50  p-3 border-1 text-bold
//                     ${catagry === course.title ? "bg-opacity-60 border-white" : "bg-opacity-50 border-transparent"}
                    
//                     `}