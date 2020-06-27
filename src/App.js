import React, {useState} from 'react'
import './App.css'
import {connect} from 'react-redux'
import Header from './component/Header/Header'
import Body from './component/Body/Body'
import {LightSpeed, Fade} from 'react-reveal';

const App = (props) => {
  const [start, setStart] = useState(false)

  return <div className="App">

    <LightSpeed left cascade>  <div className='wrapper'>
      {!start &&  <Header/> }
      <div className='body'>
        {!start ?  <div className='start-screen'><p>Хотите узнать погоду?<br/> Скорее нажимайте кнопку</p>
          <button onClick={() => setStart(true)}>Click me</button>
        </div> : <Fade> <Body {...props} /></Fade>
        }

      </div>
    </div>
    </LightSpeed>
  </div>

}

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
  }
}
let AppContainer =
    connect(mapStateToProps, {})(App)

export default AppContainer
