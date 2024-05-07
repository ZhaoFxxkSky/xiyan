import axios from 'axios';

export function geSysUserListByPage(body: {
  current: number;
  pageSize: number;
}) {
  return axios
    .post('http://localhost:7070/getListByPage', body)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}
