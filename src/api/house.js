import axios from './index';

export default {
  // 查询所有房源
  findAll(params) {
    return axios.get('http://localhost:3000/api/rental/all', { params });
  },
  // 更新房源信息：
  update(id, obj) {
    return axios.put(`http://localhost:3000/api/rental/${id}`, obj);
  },
  delete(id) {
    return axios.delete(`http://localhost:3000/api/rental/${id}`);
  },
};
