import ThemePreview from './ThemePreview.vue';

module.exports = {
  install: function (Vue, options) {
    Vue.component('vuetify-theme-preview', ThemePreview);
  }
};
