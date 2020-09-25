<template>
  <div class="content">
    <div class="md-layout">
      <div class="info md-layout-item md-size-100">
        <img
          style="width:100%"
          src="https://image.freepik.com/free-vector/welcome-lettering-yellow-origami-speech-bubble-with-triangles_1262-11380.jpg"
          alt=""
        />
        <div class="float-right">
          <button
            @click="getStarted"
            class="btn md-raised md-warning text-white btn-warning ml-3"
            style="margin-bottom:10px"
          >
            Get Started
          </button>
        </div>
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
      role: "",
    };
  },

  methods: {
    getStarted() {
      this.$router.push({ path: "exterior" });
    }
  }
};
</script>
