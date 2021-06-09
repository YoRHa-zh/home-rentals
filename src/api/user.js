import axios from './index';

export default {
  // 查询用户
  selectAll(params) {
    return axios.get('http://localhost:3000/api/user/all', params);
  },
  // 删除用户
  deleteUser(id) {
    return axios.delete(`http://localhost:3000/api/user/${id}`);
  },
  updateUser(id, obj) {
    return axios.put(`http://localhost:3000/api/user/${id}`, obj);
  },
};
