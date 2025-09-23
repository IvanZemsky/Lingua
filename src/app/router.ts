import {
  createRouter,
  createWebHashHistory,
} from "vue-router"

const router = createRouter({
  history: createWebHashHistory("/Lingua/"),
  routes: [
    {
      path: "/",
      redirect: "/sections",
      children: [
        {
          path: "sections",
          name: "sections",
          component: () => import("@/pages/sections-page.vue"),
        },
        {
          path: "sections/:sectionNumber",
          name: "section",
          component: () => import("@/pages/units-page.vue"),
        },
        {
          path: "sections/:sectionNumber/lessons/:lessonNumber/variants/:variantNumber",
          name: "lesson",
          component: () => import("@/pages/lesson-page.vue"),
        },
      ],
    },
  ],
})

export default router
