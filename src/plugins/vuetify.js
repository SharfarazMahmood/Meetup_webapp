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
        primary: colors.teal,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        info: colors.lightBlue,
        error: colors.red.accent3,
        success: "#4CAF50",
        warning: "#FFC107",
      },
      dark: {
        primary: colors.teal,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        info: colors.lightBlue,
        error: colors.red.accent3,
        success: "#4CAF50",
        warning: "#FFC107",
      },
    },
  },
});
