import { createRouter, createWebHistory } from "vue-router";
import store from "../services/Store";
import Home from "../views/Home";
import Login from "../views/Auth/Login";
import Subscribe from "../views/Auth/Subscribe";
import StudentListValidCV from "../views/StudentList/StudentListValidCV";
import InternshipOfferForm from "../views/InternshipOfferForm/InternshipOfferForm";
import InternshipOfferListValidation from "../views/InternshipOfferList/InternshipOfferListValidation";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/subscribe",
    name: "Subscribe",
    component: Subscribe,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/studentList/validation/cv",
    name: "StudentListValidCV",
    component: StudentListValidCV,
  },
  {
    path: "/internshipOffer/form/deposit",
    name: "InternshipOfferFormDeposit",
    component: InternshipOfferForm,
  },
  {
    path: "/internshipOfferList/validation",
    name: "InternshipOfferListValidation",
    component: InternshipOfferListValidation,
  },
  {
    path: "/:pathMatch(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.fullPath !== "/" && to.fullPath !== "/subscribe") {
    if (!store.getters.isAuthenticated) {
      next("/");
    }
  }
  next();
});

export default router;
