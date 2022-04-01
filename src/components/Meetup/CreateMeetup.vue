<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="primary--text ma-0">Create New Meetup</h1>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <form @submit.prevent="onCreateMeetup()" action="">
          <v-layout row>
            <v-flex xs12>
              <v-text-field
                v-model="form.title"
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
                v-model="form.location"
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
                v-model="form.imageUrl"
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
              <img height="200px" :src="form.imageUrl" alt="" srcset="" />
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12>
              <v-textarea
                v-model="form.description"
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
      terms: false,
    });

    return {
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
        this.form.title !== "" &&
        this.form.imageUrl !== "" &&
        this.form.location !== "" &&
        this.form.description !== ""
      );
    },
  },
  methods: {
    onCreateMeetup() {
      if (!this.formIsValid) {
        return;
      }
      const meetupDate = {
        title: this.form.title,
        location: this.form.location,
        imageUrl: this.form.imageUrl,
        description: this.form.description,
        date: new Date(),
      };

      this.$store.dispatch("createMeetup", meetupDate);

      this.$router.push("/meetups");
    },
  },
};
</script>

<style></style>
