import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { SMC_AUTH } from 'configs/constants'
import { getDataStorage, removeAllDataStorage, history } from 'utils'

const API_URL = 'http://3.121.214.48:3000/api'
const axiosClient = axios.create({
  baseURL: API_URL + '/admin',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
})

const refreshAccessToken = () => {
  const authInfo = getDataStorage(SMC_AUTH)
  return axios.get(`${API_URL}/auth/refresh-token`, {
    headers: {
      refresh_token: authInfo.refreshToken,
    },
  })
}

axiosClient.interceptors.request.use(
  function (config) {
    const accessToken = getDataStorage(SMC_AUTH)
    config.headers = {
      Authorization: `Bearer ${accessToken}`,
    }
    return config
  },
  function (error) {
    return Promise.reject(error.response.data)
  }
)

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    return response.data
  },
  async function (error: AxiosError) {
    const originalRequest = error?.config as AxiosRequestConfig & {
      _retry: boolean
    }

    if (error?.response?.status === 403 && !originalRequest?._retry) {
      originalRequest._retry = true
      try {
        const access_token = await refreshAccessToken()
        axios.defaults.headers.common['Authorization'] =
          'Bearer ' + access_token
        return axiosClient(originalRequest)
      } catch (error) {
        removeAllDataStorage()
        history.push('*')
        window.location.reload()
        return Promise.reject(error)
      }
    }
    return Promise.reject(error?.response?.data)
  }
)
export default axiosClient
