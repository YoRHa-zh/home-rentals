import axios from './index';

export default {
  // 查询用户
  selectAll() {
    return axios.get('http://localhost:3000/api/user/all');
  },
  // 删除用户
  deleteUser(id) {
    return axios.delete(`http://localhost:3000/api/user/${id}`);
  },
};
