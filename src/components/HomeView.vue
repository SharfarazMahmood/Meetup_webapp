<template>
  <div>
    <v-container>
      <v-layout row wrap class="mb-2">
        <v-flex xs12 sm6 class="text-center pa-1">
          <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
        </v-flex>
        <v-flex xs12 sm6 class="text-center pa-1">
          <v-btn large router to="/meetup/create" class="info"
            >Organaize Meetup</v-btn
          >
        </v-flex>
      </v-layout>
      <v-layout row wrap class="mb-2">
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for="(item, i) in meetups"
              :key="i"
              :title="item.title"
              :src="item.imageUrl"
            >
              <v-flex xs12 class="title text-center">
                <div class="">{{ item.title }}</div>
              </v-flex>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "HomeView",

  data: () => ({
    meetups: [
      {
        id: "1",
        title: "Meetup in Berlin",
        imageUrl: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
      },
      {
        id: "2",
        title: "Meetup in Quater",
        imageUrl: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
      },
      {
        id: "3",
        title: "Meetup in Astria",
        imageUrl: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
      },
      {
        id: "4",
        title: "Meetup in UK",
        imageUrl: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      },
    ],
  }),
};
</script>

<style scoped>
.title {
  /* position: absolute; */
  bottom: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2em;
}
</style>
