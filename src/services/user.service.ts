import axios from 'axios';
import type {IUser, IUserForm} from "../types/user.interface";

const API_URL = 'http://localhost:8000'; // або import.meta.env.VITE_API_URL

export const UserService = {
  async getUsers(): Promise<IUser[] | null> {
    try {
      const res = await axios.get(`${API_URL}/users`);
      return res.data;
    } catch (error) {
      console.warn(error);
      return null;
    }
  },

  async createUser(user: IUserForm): Promise<IUser | null> {
    try {
      const res = await axios.post(`${API_URL}/users`, user);
      return res.data;
    } catch (error) {
      console.warn(error);
      return null;
    }
  },
};
