<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-size-100">
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="title">Management Visitation Checklist</h4>
          </md-card-header>
          <md-card-content>
            <form
              id="Am-StandardOperation"
              role="form"
              v-on:submit.prevent="saveContinue"
            >
              <div
                id="form-fields"
                class="card-content"
              >
                <div
                  id="1"
                  class="form-group row question"
                  data-name="Auditor's Name"
                >
                  <label
                    for="staticEmail"
                    class="col-3 col-form-label"
                  >Inspector's Name</label>
                  <div class="col-9">
                    <input
                      v-model="username"
                      type="text"
                      class="form-control"
                      id="staticEmail"
                      title="Inspector's name"
                      required
                    >
                  </div>
                </div>
                <div
                  id="2"
                  class="form-group row question"
                  data-name="Date"
                >
                  <label
                    for="inputPassword"
                    class="col-3 col-form-label"
                  >Date</label>
                  <div class="col-9">
                    <input
                      type="text"
                      class="form-control"
                      id="date"
                      disabled
                    >
                  </div>
                </div>
                <div
                  id="3"
                  class="form-group row question loc"
                  data-name="Restaurant/Location"
                >
                  <label
                    for="staticEmail"
                    class="col-3 col-form-label"
                  >Restaurant/Location</label>
                  <div class="col-9">
                    <select
                      class="form-control"
                      id="location"
                      v-model="form.store_id"
                      title="Select store visited"
                      required
                    >
                      <option
                        hidden
                        value=""
                      >select store...</option>
                      <option
                        v-for="(store, index) in stores"
                        :key="index"
                        v-bind:value="store.id"
                      >{{store.address +", "+store.location}}</option>
                    </select>
                  </div>
                </div>
                <div
                  id="4"
                  class="form-group row question"
                  data-name="Manager(s) on Duty"
                >
                  <label
                    for="inputPassword"
                    class="col-3 col-form-label"
                  >Branch Manager on Duty</label>
                  <div class="col-9">
                    <input
                      type="text"
                      class="form-control"
                      id="inputPassword"
                      v-model="store_manager"
                      required
                    >
                  </div>
                </div>

                <br>
                <div class="float-right">
                  <!-- <button
                    @click="submitForm"
                    class="btn md-raised md-warning text-white btn-warning "
                    style="margin-bottom:10px"
                  >Save
                  </button> -->
                  <button
                    class="btn md-raised md-warning text-white btn-warning ml-3"
                    style="margin-bottom:10px"
                  >Save & Continue
                  </button>
                </div>

              </div>
              <!-- store exterior -->
              <div class="card-content">

              </div>
            </form>
          </md-card-content>
        </md-card>

        <!-- </div> -->

      </div>
    </div>
  </div>
</template>


<script>

export default {
  beforeCreate: function () {
    document.body.className.replace("home", "");
  },
  data () {
    return {
      username: "",
      toggle: false,
      image: false,
      stores: [],
      images: [],
      store_manager: "",
      form: {

      },
    };
  },
  mounted () {
    this.role = this.$store.getters.role;
    this.getStores()
  },
  methods: {
    getStores () {
      this.$store.dispatch("stores")
        .then(response => {
          // console.log(response)
        })
        .catch(error => {
          this.$swal.fire("Error", error.message, "error");
        });

    }
  },

  mounted () {

    this.stores = this.$store.getters.stores;
    this.username = this.$store.getters.user;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }
    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("date").value = today;
  },
  watch: {
    'form.store_id': function (val) {

      this.stores.forEach((i) => {

        if (i.id === val) {
          this.store_manager = i.store_admin_name
        }
      })
    },

  },

  methods: {
    saveContinue () {
      let qa = [];
      var divs = document.querySelectorAll('.question').forEach(function (el) {
        let index = el.id;
        let qtext = el.dataset.name.replace(/\n/g, ' ');
        let ans;

        if (el.childNodes[1].localName == "div") {
          ans = el.childNodes[1].childNodes[0].value;
        }
        qa.push({
          questionno: index,
          question: qtext,
          answer: ans,
        })
      })
      console.log(qa)
      this.$router.push({ path: 'exterior' })
    },

  },

};
</script>
