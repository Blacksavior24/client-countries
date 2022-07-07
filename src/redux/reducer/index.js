import {compareAZ, compareZA, MayorPoblacion, MenorPoblacion} from './filtrado'

const initialState = {
  countries: [],
  countriesApi:[],
  loading: false,
  detail: [],
  activdad: [],
  continent: []

};

//actios = {type, payload}
const rootReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case 'GET_ALL_COUNTRIES':
      return{
        ...state,
        countries: payload,
        countriesApi: payload
      }
    case 'GET_COUNTRY_DETAIL':
      return{
        ...state,
        detail: payload
      }
    case 'GET_COUNTRIES_NAME':
      return{
        ...state,
        countriesApi: payload
      }
    case 'ADD_ACTIVITY':
      return{
        ...state, 
        actividad: payload
      }   
    case 'GET_ACTIVITY':
      return{
        ...state,
        actividad: payload
      }  
    case 'GET_CONTINENTS':
      const allcountries = state.countries
      const filtro = payload === 'All' ? 
      allcountries:
      allcountries.filter(c => c.continent === payload)
        return{
          ...state,
          countriesApi: filtro
      }
    case 'ORDER_AZ':
        return{
        ...state,
        countriesApi: state.countriesApi.sort(compareAZ), 
        loading: false
          
    };
    case 'ORDER_ZA':
        return{
        ...state, 
        countriesApi: state.countriesApi.sort(compareZA), 
        loading: false   
    };
    case 'MAYOR_POBLACION':
        return{
            ...state, 
            countriesApi: state.countriesApi.sort(MayorPoblacion), 
            loading: false     
    };
    case 'MENOR_POBLACION':
        return{
            ...state, 
            countriesApi: state.countriesApi.sort(MenorPoblacion), 
            loading: false    
    };
    case 'LOADING':
        return{
             ...state,
             loading: payload
    };

    case 'FILTER_ACTIVITY':
      const activitiesbycountries = state.actividad
      const countriesAll = state.countries
      console.log("FILTER_ACTIVITY - activitiesbycountries: " , activitiesbycountries)
             
      const filt = payload === 'todos' ? countriesAll : activitiesbycountries.filter(a=> a.name === payload)[0].countries.map(e => e)
      console.log("FILT_____:", filt)
      return{
            ...state,
            countriesApi: filt
    };
    default: 
      return state;
  }
};

export default rootReducer;
