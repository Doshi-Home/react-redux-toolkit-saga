import { LoginPayload, LoginResponse, ResponseData } from 'models'
import axiosClient from './axiosClient'
// const categoryApi = {
// 	getAll(params) { },
// 	get(id: string) { },
// 	add(data) { },
// 	update(data) { },
// 	remove(id) { }
// }
export const loginApi = {
  login(payload: LoginPayload): Promise<ResponseData<LoginResponse>> {
    const url = '/login'
    return axiosClient.post(url, payload)
  },
}
