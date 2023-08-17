import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
/* ------------------------------------------------- */
import MyProjectsView from "../views/MyProjectsView.vue"
import ProjectsView from "../views/ProjectsView.vue"
/* ------------------------------------------------- */
import PyLearnView from "../views/PyLearnView.vue"

/* ------------------------------------------------- */
import NotFoundView from "../views/NotFoundView.vue"





const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/about",
            name: "about",
            component: AboutView
        },
        {
            path: "/projects",
            name: "projects",
            component: MyProjectsView
        },
        {
            path: "/project/:id",
            name: "project",
            component: ProjectsView
        },
        {
            path: "/pylearn",
            name: "pylearn",
            component: PyLearnView
        },
        {
            path: "/:pathMatch(.*)*",
            name: "notFound",
            component: NotFoundView
        },
    ]
})

export default router