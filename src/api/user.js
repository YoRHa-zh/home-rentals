import axios from './index';

export default {
  // 查询用户
  selectAll() {
    return axios.get('http://localhost:3000/api/user/all');
  },
};
