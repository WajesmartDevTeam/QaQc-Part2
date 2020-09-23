<template>
  <div class="content">
    <div class="md-layout">
      <div class="info md-layout-item md-size-100">
        <img
          style="width:100%"
          src="https://image.freepik.com/free-vector/welcome-lettering-yellow-origami-speech-bubble-with-triangles_1262-11380.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeCreate: function() {
    document.body.className.replace("home", "");
  },
  data() {
    return {
      username: "",
      toggle: false,
      image: false,
      stores: [],
      images: [],
      store_manager: "",
      form: {}
    };
  },
  mounted() {
    this.getStores();
  },
  methods: {
    getStores() {
      this.$store
        .dispatch("stores")
        .then(response => {
          // console.log(response)
        })
        .catch(error => {
          this.$swal.fire("Error", error.message, "error");
        });
    }
  },

  mounted() {
    this.stores = this.$store.getters.stores;
    this.username = this.$store.getters.user;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    today = yyyy + "-" + mm + "-" + dd;
    // document.getElementById("date").value = today;
  },
  watch: {
    "form.store_id": function(val) {
      this.stores.forEach(i => {
        if (i.id === val) {
          this.store_manager = i.store_admin_name;
        }
      });
    }
  },

  methods: {
    saveContinue() {
      let qa = [];
      var divs = document.querySelectorAll(".question").forEach(function(el) {
        let index = el.id;
        let qtext = el.dataset.name.replace(/\n/g, " ");
        let ans;

        if (el.childNodes[1].localName == "div") {
          ans = el.childNodes[1].childNodes[0].value;
        }
        qa.push({
          questionno: index,
          question: qtext,
          answer: ans
        });
      });
      console.log(qa);
      this.$router.push({ path: "exterior" });
    }
  }
};
</script>
