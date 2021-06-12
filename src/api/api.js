import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "7932c2b0-d1ab-490b-8f01-2f9e05b0b88d" },
});

export const userAPI = {
  getUsers(params) {
    return instance
      .get(`users?page=${params.currentPage}&count=${params.pageSize}`)
      .then((response) => response.data);
  },
};

// export const getUsers2 = (params) => {
//   return instance
//     .get(`follow?page=${params.currentPage}&count=${params.pageSize}`)
//     .then((response) => response.data);
// };
