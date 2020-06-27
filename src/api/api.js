import * as axios from 'axios'

const instance = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/`,
})

export const weatherAPI = {
  getInfo(city) {
    return instance.get(`weather?q=${city}&appid=e79bb102689b86de23f064e7f683e0d0&lang=ru`).then(response => {
      return response.data
    })
  },
}

