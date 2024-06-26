import { $t } from "@/plugins/i18n";
import { about } from "@/router/enums";

export default {
  path: "/about",
  redirect: "/about/index",
  meta: {
    icon: "info",
    title: $t("menus.hsAbout"),
    rank: about
  },
  children: [
    {
      path: "/about/index",
      name: "About",
      component: () => import("@/views/about/index.vue"),
      meta: {
        title: $t("menus.hsAbout")
      }
    },
    {
      path: "/about/test",
      name: "test",
      component: () => import("@/views/testdemo/index.vue"),
      meta: {
        title: $t("menus.hsAbout")
      }
    }
  ]
} satisfies RouteConfigsTable;
