<template>
  <div>
    <md-table v-model="forms" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell
          class="text-left"
          md-label="Name"
          v-if="item.show == true"
          >{{ item.name }}</md-table-cell
        >
        <md-table-cell md-label="Action" v-if="item.show == true"
          ><a
            :href="item.url"
            title="edit"
            class="btn btn-simple btn-warning btn-icon edit"
            ><i class="material-icons text-white">dvr</i></a
          ></md-table-cell
        >
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "ordered-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      role: "",
      selected: [],
      forms: [
        {
          id: 1,
          name: "AM STANDARD OPERATIONS AUDIT FORM",
          url: "/audit/management_visit",
          show: true
        }
      ]
    };
  },
  created() {
    this.role = this.$store.getters.role;
    if (this.role == "storemanagers") {
      this.forms.forEach(i => {
        if (i.id == 1 || i.id == 2 || i.id == 3) {
          i.show = false;
        }
      });
    } else {
      this.forms.forEach(i => {
        i.show = true;
      });
    }
  },
  mounted() {}
};
</script>
