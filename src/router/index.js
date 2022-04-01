import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/components/HomeView";
import Meetups from "@/components/Meetup/Meetups";
import CreateMeetup from "@/components/Meetup/CreateMeetup";
import MeetupDetails from "@/components/Meetup/MeetupDetails";
import Profile from "@/components/User/Profile";
import Signin from "@/components/User/Signin";
import Signup from "@/components/User/Signup";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/meetups",
    name: "Meetups",
    component: Meetups,
  },
  {
    path: "/meetup/create",
    name: "CreateMeetup",
    component: CreateMeetup,
  },
  {
    path: "/meetup/:id",
    name: "MeetupDetails",
    props: true,
    component: MeetupDetails,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
