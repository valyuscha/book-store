import BaseAxios from 'axios'
import {getCookie} from './cookie'

export const axios = BaseAxios.create({
  baseURL: 'https://js-band-store-api.glitch.me'
})

axios.interceptors.request.use(
  config => {
    if (config.params && config.params.token) {
      config.headers = {
        "Authorization": `Bearer ${config.params.token}`,
        "Content-Type": "application/json"
      }
    } else {
      config.headers = {
        "Content-Type": "application/json"
      }
    }

    return config
  }
)