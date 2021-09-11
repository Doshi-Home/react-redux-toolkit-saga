import { PaginationParams, ListResponse, User, StatusChange } from 'models';
import axiosClient from './axiosClient';

export const userApi = {
  getAll(params: PaginationParams): Promise<ListResponse<User>> {
    const url = '/users'
    return axiosClient.get(url, { params })
  },
  updateUser(user: Partial<User>):
    Promise<{ userId: string } & StatusChange> {
    const url = `/change-status/${user.id}`
    return axiosClient.post(url, { data: user.status })
  }
}