import React from "react";
import { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import { orderAZ, orderZA, poblaMayor, poblaMenor, getAllCountries, filterName, areaMayor } from "../../redux/actions/index";
import './order.css'
export default function Order(){
    const dispatch = useDispatch()
    const[currentPage, setCurrentPage] = useState(1)
    const [order, setOrder] = useState('')
    const countries = useSelector((state) => state.countriesApi)
    // console.log(countries)
    function handleChange(e) {
        e.preventDefault()
        dispatch(filterName(e.target.value));
        setCurrentPage(1)
        setOrder(`${order} Ordenado, ${e.target.value}`)

        if (e.target.value === 'all') {
            dispatch(getAllCountries())
            
        }
        else  if (e.target.value === 'ORDER_AZ') {
           
                dispatch(orderAZ());
            }
        else if (e.target.value === 'ORDER_ZA') {
                dispatch(orderZA());
            }
        else if (e.target.value === 'MAYOR_POBLACION') {
                dispatch(poblaMayor());
            }
        else if (e.target.value === 'MENOR_POBLACION') {
                dispatch(poblaMenor());
        }
     
         
    }
    return(
        <select className="order" onChange={(e) => handleChange(e)}>
            <option className="option" value= 'ALL'> Order by: </option>
            <option className="option" value = 'ORDER_AZ'> A-Z </option>
            <option className="option" value= 'ORDER_ZA'> Z-A </option>
            <option className="option" value ='MAYOR_POBLACION'> Higher population </option>
            <option className="option" value ='MENOR_POBLACION'> Smaller population </option>
        </select>
    )
}