import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";
import Index from "@/pages/Index.vue";
import Home from "@/pages/Home.vue";
import StoreExterior from "@/pages/Store_Exterior.vue";
import Merchandise from "@/pages/Merchandise.vue";
import Production from "@/pages/Production.vue";
import Checkout from "@/pages/Checkout.vue";
//import InstoreDisplays from "@/pages/InstoreDisplays.vue";
//import Warehouse from "@/pages/Warehouse.vue";
//import Staff from "@/pages/Staff.vue";
//import Opportunities from "@/pages/Opportunities.vue";
//import Competition from "@/pages/Competition.vue";
//import General from "@/pages/General.vue";
//import LossPrevention from "@/pages/LossPrevention.vue";
//import StoreOpening from "@/pages/StoreOpening.vue";
//import StoreClosing from "@/pages/StoreClosing.vue";
//import NightTime from "@/pages/NightTime.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
    meta: {
      public: true, // Allow access to even if not logged in
      onlyWhenLoggedOut: true
    }
  },

  {
    path: "/audit",
    component: DashboardLayout,

    children: [
      {
        path: "home",
        name: "Home",
        component: Home
      },
      {
        path: "exterior",
        name: "Store Exterior",
        component: StoreExterior
      },
      {
        path: "merchandise",
        name: "Merchandise",
        component: Merchandise
      },
      {
        path: "production",
        name: "Production",
        component: Production
      },
      {
        path: "checkout",
        name: "Checkout",
        component: Checkout
      },
      {
        path: "instore_displays",
        name: "In-store Displays",
        component: InstoreDisplays
      },
      {
        path: "warehouse",
        name: "Warehouse",
        component: Warehouse
      },
      {
        path: "staff",
        name: "Staff",
        component: Staff
      },
      {
        path: "opportunities",
        name: "Opportunities",
        component: Opportunities
      },
      {
        path: "competition",
        name: "Competition",
        component: Competition
      },
      {
        path: "general",
        name: "General",
        component: General
      },
      {
        path: "loss_prevention",
        name: "Loss Prevention",
        component: LossPrevention
      },
      {
        path: "store_opening",
        name: "Store Opening",
        component: StoreOpening
      },
      {
        path: "store_closing",
        name: "Store Closing",
        component: StoreClosing
      },
      {
        path: "night_time",
        name: "Night Time Visitation",
        component: NightTime
      }
    ]
  }
];

export default routes;
