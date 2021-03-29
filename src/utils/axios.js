import BaseAxios from 'axios'
import {getCookie} from './cookie'

export const axios = BaseAxios.create({
  baseURL: 'https://js-band-store-api.glitch.me'
})

axios.interceptors.request.use(
  config => {
    const token = getCookie('token')

    config.headers = {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    }

    return config
  }
)