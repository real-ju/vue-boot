import Api from '../source/Api';

export default {
  login: new Api({
    url: 'login',
    method: 'post',
    public: true
  })
};
