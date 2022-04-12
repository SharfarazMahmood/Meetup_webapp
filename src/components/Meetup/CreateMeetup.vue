<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="primary--text ma-0 pa-0">Create New Meetup</h1>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <form @submit.prevent="onCreateMeetup()" action="">
          <v-layout row>
            <v-flex xs12>
              <v-text-field
                v-model="title"
                name="Title"
                label="Title"
                id="title"
                :rules="rules.title"
                required
                clearable
              >
              </v-text-field> </v-flex
          ></v-layout>
          <v-layout row>
            <v-flex xs12>
              <v-text-field
                v-model="location"
                name="location"
                label="Location"
                id="location"
                :rules="rules.location"
                required
                clearable
              >
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <v-text-field
                v-model="imageUrl"
                name="imageUrl"
                label="Image Url"
                id="imageUrl"
                :rules="rules.imageUrl"
                required
                clearable
              >
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <img height="200px" :src="imageUrl" alt="" srcset="" />
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <v-textarea
                v-model="description"
                color="teal"
                :rules="rules.description"
                required
                counter
                clearable
              >
                <template v-slot:label>
                  <div>Description <small></small></div>
                </template>
              </v-textarea>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs6>
              <h4>Choose Date</h4>
              <v-date-picker v-model="date" scrollable> </v-date-picker>
              <!-- <p>{{ date }}</p> -->
              <!-- <p>{{ submitableDateTime }}</p> -->
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs6>
              <h4>Choose time</h4>
              <v-time-picker v-model="time" format="ampm" scrollable>
              </v-time-picker>
              <!-- <p>{{ time }}</p> -->
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-spacer></v-spacer>
            <v-btn type="submit" class="primary" :disabled="!formIsValid"
              >Create</v-btn
            >
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    const defaultForm = Object.freeze({
      title: "",
      imageUrl: "",
      location: "",
      description: "",
      terms: false,
    });
    const form = Object({
      title: "",
      imageUrl: "",
      location: "",
      description: "",
      setReminder: true,
    });

    return {
      menuDate: false,
      menuTime: false,
      title: "",
      imageUrl: "",
      location: "",
      description: "",
      setReminder: true,
      date: null,
      menu: false,
      modal: false,
      menu2: false,
      time: new Date(),
      form: Object.assign({}, form),
      rules: {
        title: [(val) => (val || "").length > 0 || "Title is required"],
        imageUrl: [(val) => (val || "").length > 0 || "Image link is required"],
        location: [(val) => (val || "").length > 0 || "Location is required"],
        description: [
          (val) => (val || "").length > 0 || "Description is required",
        ],
      },
      defaultForm,
    };
  },
  computed: {
    formIsValid() {
      return (
        this.title !== "" &&
        this.imageUrl !== "" &&
        this.location !== "" &&
        this.description !== ""
      );
    },
    submitableDateTime() {
      const date = new Date(this.date);
      if (typeof this.time === "string") {
        // console.log(typeof this.time);
        let hours = this.time.match(/^(\d+)/)[1];
        const mins = this.time.match(/:(\d+)/)[1];

        date.setHours(hours);
        date.setMinutes(mins);
      } else {
        // console.log(typeof this.time);
        date.setHours(this.time.getHours());
        date.setMinutes(this.time.getMinutes());
      }
      // console.log(date);

      return date;
    },
  },
  methods: {
    onCreateMeetup() {
      if (!this.formIsValid) {
        return;
      }
      const meetupDate = {
        title: this.title,
        location: this.location,
        imageUrl: this.imageUrl,
        description: this.description,
        date: this.submitableDateTime,
      };

      this.$store.dispatch("createMeetup", meetupDate);

      this.$router.push("/meetups");
    },
  },
};
</script>

<style></style>
