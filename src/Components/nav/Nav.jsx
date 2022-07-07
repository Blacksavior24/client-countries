import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Search from '../search/Search'
import Order from '../order/Order'
import Continent from '../continent/Continent'
import './nav.css'

export default class Nav extends Component {
    render() {
        return (
            <div className='nav'>
            <Search />
            <div>
            <Order />
            <Continent />
            <Link to="/"><button className='button'>Home</button>
                </Link>
              <Link to='/countries'><button className='button'>Paises</button>
                </Link>
              <Link to="/activity/create">
                <button className='add'>Crear Actividad</button>
                </Link>
            </div>
            </div>
        )
    }
}
