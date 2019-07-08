import axios from 'axios';

const apiZipCode = axios.create({
  baseURL: 'https://api.postmon.com.br/v1/cep/',
});
export default apiZipCode;
