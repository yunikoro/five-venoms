export default {
  namespaced: true,
  state: {
    isLogin: false,
  },
  actions: {
    getIsLogin() {
      return 666;
    },
    async checkIsHasToken() {
      wx.showLoading();
      return new Promise((resolve) => {
        setTimeout(() => {
          wx.hideLoading();
          resolve({
            token: '12345dasfsafdgasf',
          });
        }, 1200);
      });
    },
  },
  mutations: {},
};
