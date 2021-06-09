import axios from './index';

export default {
  // 查询所有留言
  getAll(params) {
    return axios.get('http://localhost:3000/api/message/all', { params });
  },
  // 删除留言
  delete(id) {
    return axios.delete(`http://localhost:3000/api/message/${id}`);
  },
  // 添加留言
  add(params) {
    return axios.post('http://localhost:3000/api/message/add', params);
  },
};
