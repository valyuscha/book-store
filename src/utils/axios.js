import BaseAxios from 'axios'
import {getCookie} from './getCookie'

export const axios = BaseAxios.create({
  baseURL: 'https://js-band-api.glitch.me'
})

axios.interceptors.request.use(
  config => {
    if (config.params && config.params.isLoggedIn) {
      const token = getCookie('token')

      config.headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    } else {
      config.headers = {
        'Content-Type': 'application/json'
      }
    }

    return config
  }
)