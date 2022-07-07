import React from "react";
import { useSelector } from "react-redux";
import './pagination.css'
export default function Pagination ({counPerPage, paginate}) {
    const countries = useSelector((state) => state.countries)
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(countries.length / counPerPage); i++) {
        pageNumbers.push(i)
    }
    return(
        <div className= 'paginado'>
        { pageNumbers &&
        pageNumbers.map(number => (
            <li className="lista__paginada">
                <a className="sal" onClick={() => paginate(number)} >{number}</a>
            </li>
        ))}
        
     </div>
    )
}
