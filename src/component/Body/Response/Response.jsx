import React from 'react'
import buildings from './buildings.png'
import temp from './temperature.png'
import wind from './wind.png'
import arrow from './up-arrow.png'
import s from './Response.module.css'
import {Fade} from 'react-reveal'

const Response = (props) => {
  const windDerection = (direction) => {
    if (direction > 1 && direction <= 89) {
      return 'Северо-восточный'
    } else if (direction >= 91 && direction <= 179) {
      return 'Юго-восточный'
    } else if (direction >= 181 && direction <= 269) {
      return 'Юго-Западный'
    } else if (direction >= 271 && direction <= 359) {
      return 'Северо-Западный'
    } else if (direction === 0) {
      return 'Северный'
    } else if (direction === 90) {
      return 'Восточный'
    } else if (direction === 180) {
      return 'Южный'
    } else if (direction === 270) {
      return 'Западный'
    }
  }
  return <div className={s.wrapper}>
    {props.weather ? <Fade cascade> <div className={s.container}>

          <div className={s.row}>
            <img src={buildings} alt='' className={s.icon}/>
            <p> {props.weather.name}</p>
          </div>

          <div className={s.row}>
            <img src={`http://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`}  className={s.icon} alt=''/>
            <p>{props.weather.weather[0].description}</p>
          </div>

          <div className={s.row}>
            <img src={temp} className={s.icon} alt=''/>
            <p> {Number(props.weather.main.temp - 273.15).toFixed()} &ordm;</p>
          </div>

          <div className={s.row}>
            <img src={wind} className={s.icon} alt=''/>
            <p> <img src={arrow} style={{transform: `rotate(${props.weather.wind.deg}deg)`, height: '16px'}}/> {windDerection(props.weather.wind.deg)}  {props.weather.wind.speed} м\с</p>
          </div>

        </div>
      </Fade>
        : 'Что то пошло не так'}
  </div>
}

export default Response
