import DanMan from "./components/DanMan.vue";

const DanManSimple = {
  /* eslint-disable */
  install(Vue,options) {
    // removed options.
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component("dan-man", DanMan);
  }
  /* eslint-enable */
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(DanManSimple);
}

export default DanManSimple;
