import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {getCountryDetail} from '../../redux/actions/index';
import './country.css'

export default function Country({ id,name, flag,  continent, poblation}) {
  const dispatch = useDispatch()
  return(
          <Link className='link' to = {`/countries/${id}`} >
      <div className='card' key={id} onClick={ () => dispatch(getCountryDetail(id))}>
          <h4 className='name'> {name} </h4>
          <h5 className='name'> {continent} </h5>
          <h5 className='name'> Poblation: {poblation} </h5>
          <img src={flag} alt="imagen no encontrada" width='145px' height='145px' className='image' />
      </div>
          </Link>        
  )
}