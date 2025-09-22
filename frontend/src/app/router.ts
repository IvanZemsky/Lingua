import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
          component: () => import("@/pages/section-page.vue"),
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
