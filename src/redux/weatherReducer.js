import {weatherAPI} from '../api/api'


const SET_INFO = 'weather/SET_INFO'
const CATCH_ERROR = 'weather/CATCH_ERROR'
const CLEAR = 'weather/CLEAR'

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
    case CLEAR: {
      return {
        state: initialState
      }
    }
    default:
      return state
  }
}
export const setInfo = (payload) => ({type: SET_INFO, payload})
export const catchError = (error) => ({type: CATCH_ERROR, error})
export const clear = () => ({type: CLEAR})

export const getInfo = (city) => async (dispatch) => {
    dispatch(clear())
  try {
    let data = await weatherAPI.getInfo(city)
    dispatch(setInfo(data))
  }catch (data) {
    dispatch(catchError(data.response.data.message))
  }




}


export default weatherReducer
