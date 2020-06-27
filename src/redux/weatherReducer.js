import {weatherAPI} from '../api/api'


const SET_INFO = 'weather/SET_INFO'
const CATCH_ERROR = 'weather/CATCH_ERROR'

let initialState = {
  weather: null,
  error: null,
}


const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INFO: {
      return {
        ...state,
        ...action.payload,
        error: null,
      }
    }
    case CATCH_ERROR: {
      return {
        ...state,
        error: action.error,
        weather: null,
      }
    }
    default:
      return state
  }
}
export const setInfo = (payload) => ({type: SET_INFO, payload})
export const catchError = (error) => ({type: CATCH_ERROR, error})

export const getInfo = (city) => async (dispatch) => {


  try {
    let data = await weatherAPI.getInfo(city)
    dispatch(setInfo(data))
  }catch (data) {
    dispatch(catchError(data.response.data.message))
  }




}


export default weatherReducer
