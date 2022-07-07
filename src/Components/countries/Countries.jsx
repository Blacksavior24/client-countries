import Nav from '../nav/Nav'
import Country from '../country/Country'
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './countries.css'
import { getActivity, getAllCountries} from '../../redux/actions/index';
import Pagination from '../pagination/Pagination'

export const Countries = () => {
    const dispatch = useDispatch()
    const countries = useSelector((state) => state.countriesApi)
    // console.log(countries)
    const changeLoading = useSelector(state => state.loading)
    const [currentPage, setCurrentPage] = useState(1);
    const counPerPage = 9
    const indexOfLastCountry = currentPage * counPerPage;
    const indexOfFirstCountry= indexOfLastCountry - counPerPage;
    const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);
    const paginate = (pageNumber) => setCurrentPage(pageNumber )
    
    useEffect (() => {
        dispatch(getAllCountries())
        dispatch(getActivity())
          
      
    }, [])


    return(
        
        <div className="home">
            <h1>Countries</h1>
        <div className="container__countries">
        {
         currentCountries?.map (e => {
             return(
                <Country id={e.id} name={e.name} flag ={e.flag} continent ={e.continent} poblation = {e.poblation}>
                </Country>
         )})
         
        }
         </div>
         <Pagination 
          counPerPage={counPerPage}
          paginate = {paginate}
         />
     
        </div>
        
    )
        
    
}

export default Countries