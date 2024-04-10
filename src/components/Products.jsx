
// // 
import React, { useEffect, useId, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProducts } from '../redux-toolkit/cartSlice'
import { fetchProducts } from '../redux-toolkit/productSlice'
import { STATUSE } from '../redux-toolkit/productSlice'
import RingLoader from "react-spinners/RingLoader";
import { isCart, selectedCart } from '../redux-toolkit/selectCartSlice'
import { Navigate, useNavigate } from 'react-router-dom'




const Products = () => {

    // const [products, setProducts] = useState([])

    const dispatch = useDispatch()
    // const selectFilterItem = useSelector(state => state.filter.filterData)
    // console.log("product", selectFilterItem);

    // const data = useSelector((state) => state.product.data)
    // const status = useSelector((state) => state.product.status)
    // // or 
    const { data, status } = useSelector((state) => state.product)

    const {filterData, isSelect, isProduct} = useSelector(state => state.filter)

    const navigate = useNavigate()


    // console.log("productin", isProduct);


    useEffect(() => {
        dispatch(fetchProducts())

    }, [])




    const addToCart = (item) => {
        // dispatch(addProducts(item))
        dispatch(selectedCart(item))
        dispatch(isCart(true))
        navigate("/selectCart")
       
    }

   



    if (status === STATUSE.LOADING) {
        return <><h1 style={{ color: "blue", display: "flex", justifyContent: "center", alignItems:"center", height:"60vh" }}>  
        <RingLoader color="black" />
        </h1></>
    }

    if (status === STATUSE.ERROR) {
        return <div style={{ color: "red", display: "flex", justifyContent: "center", alignItems:"center" }}> Oops ... ! Somthing Went Wrong  </div>
    }


    if (isProduct) {
        return (

            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(4, 1fr)', 
                gap: '30px' ,
            
            }}>
    
                {
                    // products.map((item) => {
                    data.map((item) => {
    
                        return (
    
                            <div className='card ' key={item.id} >
                                <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100%", padding:"10px"}}>
    
                                <img src={item.image} alt="" style={{width:"80px", height:"80px"}}  />
                                </div>
    
                                <h4>{item.title}</h4>
    
                                <h3>price:{item.price}</h3>
    
                                <button className='btn' onClick={() => addToCart(item)}> Explore more.. </button>
    
                            </div>
                        )
    
                    })
    
                }
    
            </div>
    
        )
    } 

    else if(isSelect){
        return (

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px'  }}>
    
                {
                    // products.map((item) => {
                    filterData.map((item) => {
    
                        return (
    
                            <div className='card ' key={item.id} >
                                <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100%", padding:"10px"}}>
    
                                <img src={item.image} alt="" style={{width:"80px", height:"80px"}}  />
                                </div>
    
                                <h4>{item.title}</h4>
    
                                <h3>price:{item.price}</h3>
    
                                <button className='btn' onClick={() => addToCart(item)}> Explore more.. </button>
    
                            </div>
                        )
    
                    })
    
                }
    
            </div>
    
        )
    }


   
}

export default Products
