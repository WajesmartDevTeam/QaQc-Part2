<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <!-- <notifications></notifications> -->

    <side-bar>
      <sidebar-link to="/audit/home">
        <md-icon>dashboard</md-icon>
        <p>Home</p>
      </sidebar-link>
      <sidebar-link to="/audit/exterior">
        <md-icon>library_books</md-icon>
        <p>Store Exterior</p>
      </sidebar-link>
      <sidebar-link to="/audit/merchandise">
        <md-icon>library_books</md-icon>
        <p>Merchandise</p>
      </sidebar-link>
      <sidebar-link to="/audit/production">
        <md-icon>library_books</md-icon>
        <p>Production</p>
      </sidebar-link>
      <sidebar-link to="/audit/checkout">
        <md-icon>library_books</md-icon>
        <p>Checkout</p>
      </sidebar-link>
      <sidebar-link to="/audit/instore_displays">
        <md-icon>library_books</md-icon>
        <p>In-store Displays</p>
      </sidebar-link>
      <sidebar-link to="/audit/warehouse">
        <md-icon>library_books</md-icon>
        <p>Warehouse</p>
      </sidebar-link>
      <sidebar-link to="/audit/staff">
        <md-icon>library_books</md-icon>
        <p>Staff</p>
      </sidebar-link>
      <sidebar-link to="/audit/opportunities">
        <md-icon>library_books</md-icon>
        <p>Opportunities</p>
      </sidebar-link>
      <sidebar-link to="/audit/competition">
        <md-icon>library_books</md-icon>
        <p>Competition</p>
      </sidebar-link>
      <sidebar-link to="/audit/general">
        <md-icon>library_books</md-icon>
        <p>General</p>
      </sidebar-link>
      <sidebar-link to="/audit/loss_prevention">
        <md-icon>library_books</md-icon>
        <p>Loss Prevention</p>
      </sidebar-link>
      <sidebar-link to="/audit/store_opening">
        <md-icon>library_books</md-icon>
        <p>Store Opening</p>
      </sidebar-link>
      <sidebar-link to="/audit/store_closing">
        <md-icon>library_books</md-icon>
        <p>Store Closing</p>
      </sidebar-link>
      <sidebar-link to="/audit/night_time">
        <md-icon>library_books</md-icon>
        <p>Night Time Visitation</p>
      </sidebar-link>

      <sidebar-link to="/" style="margin-bottom:50px;margin-left:18px">
        <span style="height:25px" @click="logOut">
          <md-icon>power_settings_new</md-icon>
          <p>Log Out</p>
        </span>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu
  },
  data() {
    return {
      role: ""
    };
  },
  mounted() {
    this.role = this.$store.getters.role;
  },
  methods: {
    logOut() {
      this.$store.dispatch("logout", true);
      this.$router.push("index");
    }
  }
};
</script>
