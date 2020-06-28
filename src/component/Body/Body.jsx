import React from 'react'
import Response from './Response/Response'
import FormInput from './Form/Form'

const Body = (props) => {
  const error = (e) => {
    if (e === 'city not found')
      return 'Такого города не существует'
  }
  return <div>
    <FormInput/>
    {props.weather.weather && <Response {...props}/>}
    <p>{error(props.weather.error)}</p>

  </div>

}

export default Body
