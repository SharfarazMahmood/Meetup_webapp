<template>
  <v-app id="inspire">
    <v-app-bar app dark absolute color="primary">
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="//hidden-md-and-up"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          DevMeetup
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          text
          v-for="item in menuItems"
          :key="item.title"
          router
          :to="item.link"
        >
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}</v-btn
        >
      </v-toolbar-items>

      <!-- <v-menu left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->
    </v-app-bar>

    <v-navigation-drawer dark v-model="drawer" fixed temporary class="primary">
      <v-list shaped>
        <v-list-item-group v-model="selectedItem">
          <v-list-item
            v-for="(item, i) in menuItems"
            :key="i"
            router
            :to="item.link"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="mt-1" fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: false,
    group: null,
    selectedItem: 1,
    menuItems: [
      {
        title: "View Meetups",
        icon: "mdi-account-supervisor",
        link: "/meetups",
      },
      {
        title: "Create meeting",
        icon: "mdi-google-classroom",
        link: "/meetup/create",
      },
      { title: "Profile", icon: "mdi-account-circle", link: "/profile" },
      { title: "Sign up", icon: "mdi-account-plus", link: "/signup" },
      { title: "Sign in", icon: "mdi-login", link: "/signin" },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped></style>
