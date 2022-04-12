<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-container>
            <form @submit.prevent="onSignup()">
              <h3></h3>
              <v-text-field
                v-model="email"
                name="email"
                label="Mail"
                id="email"
                type="email"
                required
                clearable
              >
              </v-text-field>

              <v-text-field
                v-model="password"
                name="password"
                label="Password"
                id="password"
                type="password"
                required
                clearable
              >
              </v-text-field>

              <v-text-field
                v-model="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                id="confirmPassword"
                type="password"
                :rules="[comparePasswords]"
                required
                clearable
              >
              </v-text-field>

              <v-layout row class="ma-1">
                <v-flex xs12>
                  <v-btn type="submit">Sign up</v-btn>
                </v-flex>
              </v-layout>
            </form>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  },

  computed: {
    comparePasswords() {
      return this.password !== this.confirmPassword
        ? "Passwords do not match!!"
        : "";
    },
    user() {
      return this.$store.getters.user;
    },
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    },
  },
  methods: {
    onSignup() {
      // Vuex
      //   console.log({
      //     email: this.email,
      //     password: this.password,
      //     confirmPassword: this.confirmPassword,
      //   });
      this.$store.dispatch("signupUser", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style></style>
