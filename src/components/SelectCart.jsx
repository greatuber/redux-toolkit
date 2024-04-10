import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HiPlusCircle, HiMinusCircle } from "react-icons/hi";
import { Link, useNavigate } from 'react-router-dom';
import { FcAbout } from "react-icons/fc";
import { addProducts, removeUpdateProduct } from '../redux-toolkit/cartSlice';
import { isCart, isSelectedItem, quentity, selectedCart } from '../redux-toolkit/selectCartSlice';
import { GiCancel } from "react-icons/gi";

function SelectCart() {


    const selectCart = useSelector(state => state.selectCart.cartItem)
    const selectUpdateCart = useSelector(state => state.selectCart.cartItem)
    const isSelectCart = useSelector(state => state.selectCart.isCart)
    // const isSelected = useSelector(state => state.selectCart.isSelectedItem)
//   const selectQuentity = useSelector((state) => state.selectCart.quentity)

    const isSelectedItem = useSelector(state => state.cart)



    let item = isSelectedItem.filter(item => item.id === selectCart.id ) 

    let itemVal = item[0] || {}
        // console.log(itemVal.isSelected);


    // console.log("isSelectedItem", isSelectedItem);


   

  

    const dispatch = useDispatch()


    const [number, setNumber] = useState(1)
    const [updatenum, setUpdateNum] = useState(selectUpdateCart.quentity)
    // console.log(updatenum);
    const [cart, setCart] = useState(selectCart)
    
    const navigate = useNavigate()
    
    
    

    // console.log("update Pro:", isSelectCart);
    // console.log("cart", Boolean(cart));
    // console.log("cart", cart);



    const goToCart = () => {
        dispatch(addProducts({cart: cart, qty: number, isSelectedProduct:true}))
        dispatch(selectedCart(cart))
        dispatch(quentity(number))
        // dispatch(isSelectedItem(true))
        navigate('/')
    }

    const goToCartUpdate = (id) => {
        dispatch(removeUpdateProduct(id))
        dispatch(addProducts({cart: selectUpdateCart, qty: updatenum, isSelectedProduct:true }))
        dispatch(isCart(true))
        
        navigate('/cart')

    }

    const handleCancle = () => {
        dispatch(isCart(false))
        navigate('/')
    }

    const handleCancleUpdate = () => {
        navigate('/cart')
    }

    const handleInc = () => {
        setNumber(number + 1)
    }

    const UpdatehandleInc = () => {
        setUpdateNum(updatenum + 1)
    }

    const handleDec = () => {
        if (number > 1) {
            setNumber(number - 1)
        }
    }
    const UpdatehandleDec = () => {
        if (updatenum > 1) {
            setUpdateNum(updatenum - 1)
        }
    }


    useEffect(() => {
        setCart(selectCart)


    }, [])


    
    // useEffect(() => {
    //     console.log(item[0].isSelected);
    // }, [goToCart])



    if (isSelectCart) {
        return (
            <div style={{ padding: "20px 10px 0 10px", display: "flex", justifyContent: "center", width: "100%" }}>
                <div className='card ' key={cart.id} style={{ display: "block", width: "80%" }}  >
                    <div style={{ display: "flex", float: "right" }}> <button onClick={() => handleCancle()} style={{ borderRadius: "50%", border: "none" }}><GiCancel style={{ float: "right", height: "60px", width: "60px", fontWeight: "500", boxShadow: "#1f090d 2px 2px 17px 5px", borderRadius: "50%", color: "red" }} /></button></div>
                    <div style={{ display: "flex", justifyContent: "center", padding: "10px", gap: "2rem" }}>
                        <img src={cart.image} alt="" style={{ width: "50%", height: "40vh", margin: "0px", padding: "2rem", borderRadius: "40px", boxShadow: " inset 1px 1px 20px 7px black" }} />
                        <div>
                            <h1>About <span><FcAbout /></span> </h1>
                            <h2 style={{ fontWeight: "500" }}> "{cart.description}"</h2>
                        </div>
                    </div>
                    <h2>{cart.title}</h2>
                    <div style={{ fontSize: "2rem", fontWeight: "900" }}>Price: ${cart.price}</div>

                    {
                        itemVal.isSelected ?
                        <>
                            <h2 style={{color:"red"}}>"You have already added in Cart."</h2>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <button onClick={() => navigate("/cart")} className='btn-category'>Go to Cart </button>
                        </div>
                        </>

                        :
                        <>
                           <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <buttton onClick={(e) => handleDec(e)}><HiMinusCircle style={{ width: "70px", height: "70px" }} color='red' /></buttton>
                        <div style={{ fontSize: "3rem", padding: "20px", fontWeight: "900" }}><span>{number}</span></div>
                        <buttton onClick={(e) => handleInc(e)}><HiPlusCircle style={{ width: "70px", height: "70px", color: "green" }} /></buttton>
                    </div>
                    <button className='btn-category' onClick={() => goToCart()}> Add To Cart </button>
                        </>
                    }
                 
                </div>
            </div>
        )
    }

    

    else {
        return (
            <div style={{ padding: "20px 10px 0 10px", display: "flex", justifyContent: "center", width: "100%" }}>
                <div className='card ' key={selectUpdateCart.id} style={{ display: "block", width: "80%" }}  >
                    <div style={{ display: "flex", float: "right" }}> <button onClick={() => handleCancleUpdate()} style={{ borderRadius: "50%", border: "none" }}><GiCancel style={{ float: "right", height: "60px", width: "60px", fontWeight: "500", boxShadow: "#1f090d 2px 2px 17px 5px", borderRadius: "50%", color: "red" }} /></button></div>
                    <div style={{ display: "flex", justifyContent: "center", padding: "10px", gap: "2rem" }}>
                        <img src={selectUpdateCart.image} alt="" style={{ width: "50%", height: "40vh", margin: "0px", padding: "2rem", borderRadius: "40px", boxShadow: " inset 1px 1px 20px 7px black" }} />
                        <div>
                            <h1>About <span><FcAbout /></span> </h1>
                            <h2 style={{ fontWeight: "500" }}> "{selectUpdateCart.description}"</h2>
                        </div>

                    </div>

                    <h2>{selectUpdateCart.title}</h2>


                    <div style={{ fontSize: "2rem", fontWeight: "900" }}>Price: ${selectUpdateCart.price}</div>

                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <buttton onClick={(e) => UpdatehandleDec(e)}><HiMinusCircle style={{ width: "70px", height: "70px" }} color='red' /></buttton>
                        <div style={{ fontSize: "3rem", padding: "20px", fontWeight: "900" }}><span>{updatenum}</span></div>
                        <buttton onClick={(e) => UpdatehandleInc(e)}><HiPlusCircle style={{ width: "70px", height: "70px", color: "green" }} /></buttton>

                    </div>

                    <button className='btn-category ' onClick={() => goToCartUpdate(selectUpdateCart.id)}> Update To Cart </button>


                </div>
            </div>
        )
    }
}

export default SelectCart