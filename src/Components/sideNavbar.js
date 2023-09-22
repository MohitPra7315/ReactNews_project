// import './SideNavbar.css';
import Links from "./Links";
function SideNavbar(props) {
    const countrydata = props.countrydata;
    const catagry =props.catagry;
    const setCatagry=props.setCatagry;
    const setCountruName=props.setCountruName;

    return (

        <div className="link-cont">
            {
                countrydata.map((country) => {
                    return (<Links country={country} key={country.id}   setCountruName={setCountruName}   catagry={catagry} setCatagry={setCatagry}  ></Links>)})
            }

        </div>

    )
}

export default SideNavbar;