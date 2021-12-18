import Vue from 'vue';

import axiosInstance from './axios';
// import Mock from 'mockjs'
// import mockConfig from './mock'
// import anime from 'animejs/lib/anime.es.js'
import util from '../lib/util';

/**
 * 配置Vue
 */
function configVue() {
  if (process.env.NODE_ENV === 'production') {
    Vue.config.silent = true;
    Vue.config.productionTip = false;
  }
}

/**
 * 配置axios
 */
function configAxios() {
  Vue.prototype.$axios = axiosInstance;
}

/**
 * 配置mockjs
 */
function configMock() {
  mockConfig.forEach((item) => {
    let re = new RegExp(`\\S+${item.api}\\S*`);
    Mock.mock(re, item.tpl);
  });
}

/**
 * 配置anime
 */
function configAnime() {
  Vue.prototype.$anime = anime;
}

/**
 * 配置自定义util库
 */
function configUtil() {
  Vue.prototype.$util = util;
}

export default {
  configVue,
  configAxios,
  // configMock,
  // configAnime,
  configUtil,
};
