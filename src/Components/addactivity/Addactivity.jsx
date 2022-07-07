import React from "react";
import { useEffect, useState } from "react";
import { addActivity, getAllCountries } from "../../redux/actions";
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { compareAZ } from "../../redux/reducer/filtrado";
import './add.css'
import validater from "./helpers";


export default function Addactivity(){
    const dispatch = useDispatch();
    const paises = useSelector(state => state.countries.sort(compareAZ))

  if(!paises.length){
      dispatch(getAllCountries())
  }
    const [err, setError] = useState("")

    const [activities, setActivities] = useState({
        name: '',
        season: '',
        duration: '',
        difficulty: '',
        idCountry:[],
    })
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addActivity(activities))
        console.log(activities)
        alert('Activity Created')
        setActivities({
            name : '',
            season: '',
            duration: '',
            difficulty: '',
            idCountry:[],
        })
 
    }
function handleSelect(e) {
    setActivities({...activities, idCountry:[...activities.idCountry,e.target.value]})
}

    const handleChange = e => {
        setActivities({
            ...activities,
            [e.target.name]: e.target.value
        })
        
    }
    useEffect (() => {
        setError( validater(activities))
    }, [activities])
     
    const deleteId = id =>{
    
        let borrar  = activities.idCountry.filter(e => e !== id)
        console.log(borrar)
        setActivities({
            ...activities,
            idCountry: borrar  
        })
        
    }
    
        return(
        <div className="pruebas">
        <div className="post">
            <h2> Create your Activity! </h2>
            <form className="container-post" onSubmit ={handleSubmit}>
                <label htmlFor="countries">
                    <select className="label__container" name="countries" id="countries" onChange={handleSelect} required>
                        <option value="" > Select a country: </option>
                        {paises.map(e => ( <option value={e.id}> {e.name} {e.id} </option>) ) }
                    </select>
                </label>
                <label htmlFor="name"  onChange={handleChange}>
                    <input type="text" placeholder="Write an activity" name="name" className="input--select" value={activities.name} required/>
                </label>
                <div className="cuadros">
                <label htmlFor="season">
                    <select type="text" name="season"  onChange={handleChange} required className="select--boton" >
                        <option value="" > Season </option>
                        { ['Invierno', 'Primavera', 'Otoño', 'Verano' ].map(e => ( <option value={e}>  {e} </option> )) }
                    </select> 
                </label>
                <label htmlFor="difficulty">
                    <select type="text" name="difficulty" onChange={handleChange} required className="select--boton">
                        <option value=""  > Difficulty </option>
                        { [1, 2, 3, 4, 5 ].map(e => ( <option value={e}> {e} </option> )) }
                    </select> 
                </label>
                </div>
                <label htmlFor="duration" onChange={handleChange}>
                    <input type="number" placeholder="duration in hours.." name="duration" className="input--selto"  value={activities.duration }  required/> 
                </label>

                    { <div>
                        <span >{err}</span>  
                    </div> }
                  
                {activities.idCountry.length > 0 ?    
                        <ul className="pais-seleccionado" onChange={handleSelect}>  
                             {activities.idCountry.map(e => (<li key={e}> {e} <button className="X" onClick={()=> deleteId(e)} > X </button> </li> ) )} 
                        </ul> : null }
               <div className="btn-div">
                    <button type="submit" className="btn-submit">Add New Activity</button>
                <Link to='/countries'>
                    <button className='btn-atras'>Back</button> 
                </Link>
                </div>
            </form>
        </div>
        </div>
    )
}