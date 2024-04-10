
// // 
import React from 'react'
import { Link, useLocation} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaCartPlus } from "react-icons/fa";
import { SiReactivex } from "react-icons/si";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import Category from './Category';

const Navbar = () => {

    // //useSelector is works as "Subscriber". It gives all data from state, When data is changed or updated.
    const productCount = useSelector(state => state.cart)
    const location = useLocation()

    const isHome = location.pathname === "/"
    const isCart = location.pathname === "/cart"
    // const isSelectCart = useSelector()

    if(true){

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderRadius: "5px", background: "#dadee8", padding: "0 10px 0 10px", position: "sticky", top: "0px", boxShadow: "10px 10px 15px #4d2c81" }}>

            <span className='logo' style={{marginLeft:"20px"}}><SiReactivex style={{ height: "60px", width: "60px", color: "#51347e" }} /></span>

            <div style={{ display: "flex", justifyContent: "end", width: "70%", alignItems: "center", padding: "10px 0 10px 0" }}>
                <Category />
                <Link className='navLink' to='/' ><h2>Home <span><SiHomeassistantcommunitystore style={{color: isHome ? "#7335d3": "black" }} /></span> </h2></Link>
                <Link className='navLink' to='/cart'><h2 style={{display:"flex"}}>Cart <span className='cartCount' style={{marginLeft:"10px"}}>
                    <span style={{ marginLeft: "7px", color: "red", position: "absolute", top: "-22px", right: "10px" }}><h6>{productCount.length} </h6> </span>
                    <div><FaCartPlus style={{ height: "30px", width: "30px",  position: "relative", color: isCart ? "#7335d3": "black" }} /></div>
                </span></h2></Link>

            </div>



        </div>
    )
    }
}

export default Navbar
