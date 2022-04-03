import Vue from "vue";
// import Vuetify from 'vuetify/lib/framework'
import Vuetify from "vuetify/lib";

import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#d76232",
        secondary: "#50aadf",
        accent: colors.shades.black,
        info: colors.lightBlue,
        error: colors.red.accent3,
        success: "#4CAF50",
        warning: "#FFC107",
      },
      dark: {
        primary: "#d76232",
        secondary: "#50aadf",
        accent: colors.shades.black,
        info: colors.lightBlue,
        error: colors.red.accent3,
        success: "#4CAF50",
        warning: "#FFC107",
      },
    },
  },
});
