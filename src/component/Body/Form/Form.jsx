import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {Input} from '../../../assets/Forms/FormsControl'

import s from './Form.module.css'
import {getInfo} from '../../../redux/weatherReducer'
import {minLengthCreator, required} from '../../../assets/validators/validator'

const minLength2 = minLengthCreator(2)

const RequestForm = ({handleSubmit}) => {
  return (
      <form onSubmit={handleSubmit} className={s.container}>
        <div>
          <Field className={s.input} component={Input}  validate={[required, minLength2]} name={'city'} placeholder={`Название города`}/>
        </div>
        <div>
          <button >Найти</button>
        </div>
      </form>
  )
}
const ReduxForm = reduxForm({
  form: 'find',
})(RequestForm)


const FormInput = (props) => {
  const handleSubmit = (data) => {

    props.getInfo(data.city)
  }
  return <div>
    <h2 className={s.label}>Введите название города</h2>
    <ReduxForm onSubmit={handleSubmit}/>
  </div>
}
const mapStateToProps = (state) => ({
  weather: state.weather,
})

export default connect(mapStateToProps, {getInfo})(FormInput)
