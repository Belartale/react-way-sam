import axios from "axios";

export const getUsers = (params) => {
  if (params.currentPage !== Number) {
    params.currentPage = 1;
    params.pageSize = 5;
  }

  return axios.get(
    `https://social-network.samuraijs.com/api/1.0/users?page=${params.currentPage}&count=${params.pageSize}`,
    {
      withCredentials: true,
    }
  );
};
