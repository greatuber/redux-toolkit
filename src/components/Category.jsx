import React, { useEffect, useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { filterItem, products } from '../redux-toolkit/filterSlice'
import { useNavigate } from 'react-router-dom'

function Category() {

    const [filterData, setFilter] = useState([])
    const [select, setSelect] = useState(false)

    const navigate = useNavigate()

 const data = useSelector(state => state.product.data)
 const dispatchFilter = useDispatch()

    // console.log(data);


    const handleFilterData = (e) => {
        let optionVal = e.target.value;
        // console.log(optionVal);
        navigate('/')
        if(e.target.value === "all"){
            setFilter(data)
            dispatchFilter(filterItem(data))
            dispatchFilter(products(true))
        //    return navigate('/')


        } 
         else {
            let filData = data.filter((item) => item.category === optionVal )
            // console.log(filData);
            setFilter(filData)
            dispatchFilter(filterItem(filData))
             dispatchFilter(products(false))
             
         }

    }

    // console.log(filterData);

    // useEffect(() => {
    //     setFilter(data)
    //     dispatchFilter(products(true))
    //     // navigate('/')

        
    // }, [])


  return (

    <>

    <div >
        <select onChange={(e) => handleFilterData(e)}>
            <option  value="all">All</option>
            <option value="men's clothing">Men</option>
            <option value="women's clothing">Women</option>
            <option value="jewelery">jewelery</option>
            <option value="electronics">electronics</option>
        </select>
    </div>


    </>


  )
}

export default Category