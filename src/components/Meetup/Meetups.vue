<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 class="mb-2">
        <v-simple-table class="mx-sm-4 mx-md-8 mx-lg-16">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left titleOrDatetruncate">Title</th>
                <th class="text-left titleOrDatetruncate">Date</th>
                <th class="text-left imgUrlOrdescriptiontruncate">Image Url</th>
                <th class="text-left ma-0 pa-0"></th>
                <th class="text-left imgUrlOrdescriptiontruncate">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in meetups"
                :key="item.id"
                @click="goToMeetupDetails(item.id)"
              >
                <td class="titleOrDatetruncate">{{ item.title }}</td>
                <td class="titleOrDatetruncate">{{ item.date }}</td>
                <td class="imgUrlOrdescriptiontruncate">
                  {{ item.imageUrl }}
                </td>
                <td class="ma-0 pa-0">
                  <v-img height="20px" width="20px" v-bind:src="item.imageUrl">
                  </v-img>
                </td>
                <td class="imgUrlOrdescriptiontruncate">
                  {{ item.description }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-flex>
    </v-layout>

    <v-layout row wrap v-for="meetup in meetups" :key="meetup.id" class="mb-2">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="info pa-0">
          <v-container fluid>
            <v-layout row class="ma-0">
              <v-flex xs5 sm4 md3>
                <v-img height="160px" v-bind:src="meetup.imageUrl"></v-img>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title class="pt-0">
                  <div>
                    <h5 class="white--text mb-0">My Meetup</h5>
                    <div class="imgUrlOrdescriptiontruncate">
                      {{ meetup.date }}
                    </div>
                  </div>
                </v-card-title>
                <v-card-text class="ma-0"> </v-card-text>
                <v-divider class="mx-4"></v-divider>
                <v-card-actions>
                  <v-btn
                    class="white--text"
                    text
                    v-bind:to="'/meetup/' + meetup.id"
                  >
                    See Details
                    <v-icon> mdi-chevron-right</v-icon>
                  </v-btn></v-card-actions
                >
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  methods: {
    goToMeetupDetails(id) {
      console.log(id);
      this.$router.push("/meetup/" + id);
    },
  },
  computed: {
    meetups() {
      return this.$store.getters.loadedMeetups;
    },
  },
};
</script>

<style>
.titleOrDatetruncate {
  max-width: 5vw;
  white-space: nowrap;
  overflow: hidden;
  overflow-x: hidden;
  text-overflow: ellipsis;
}
.imgUrlOrdescriptiontruncate {
  max-width: 20vw;
  white-space: nowrap;
  overflow-x: hidden;
  overflow: hidden;
  text-overflow: ellipsis;
}
tr td {
  cursor: pointer !important;
}
</style>
