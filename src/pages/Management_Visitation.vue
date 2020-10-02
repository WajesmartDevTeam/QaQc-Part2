<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-size-100">
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="title">Management Visitation Checklist</h4>
          </md-card-header>
          <md-card-content>
            <form id="Am-StandardOperation" role="form">
              <div id="form-fields" class="card-content">
                <div
                  id="1"
                  class="form-group row question"
                  data-name="Auditor's Name"
                >
                  <label for="staticEmail" class="col-3 col-form-label"
                    >Inspector's Name</label
                  >
                  <div class="col-9">
                    <input
                      v-model="username"
                      type="text"
                      class="form-control"
                      id="staticEmail"
                      title="Inspector's name"
                      required
                    />
                  </div>
                </div>
                <div id="2" class="form-group row question" data-name="Date">
                  <label for="inputPassword" class="col-3 col-form-label"
                    >Date</label
                  >
                  <div class="col-9">
                    <input
                      type="text"
                      class="form-control"
                      id="date"
                      disabled
                    />
                  </div>
                </div>
                <div
                  id="3"
                  class="form-group row question loc"
                  data-name="Restaurant/Location"
                >
                  <label for="staticEmail" class="col-3 col-form-label"
                    >Restaurant/Location</label
                  >
                  <div class="col-9">
                    <select
                      class="form-control"
                      id="location"
                      v-model="form.store_id"
                      title="Select store visited"
                      required
                    >
                      <option hidden value="">select store...</option>
                      <option
                        v-for="(store, index) in stores"
                        :key="index"
                        v-bind:value="store.id"
                        >{{ store.address + ", " + store.location }}</option
                      >
                    </select>
                  </div>
                </div>
                <div
                  id="4"
                  class="form-group row question"
                  data-name="Manager(s) on Duty"
                >
                  <label for="inputPassword" class="col-3 col-form-label"
                    >Branch Manager on Duty</label
                  >
                  <div class="col-9">
                    <input
                      type="text"
                      class="form-control"
                      id="inputPassword"
                      v-model="store_manager"
                      required
                    />
                  </div>
                </div>

                <br />
                <div class="float-right">
                  <button
                    @click="checkForm"
                    class="btn md-raised md-warning text-white btn-warning "
                    style="margin-bottom:10px"
                  >
                    Save
                  </button>
                  <button
                    @click="saveContinue"
                    class="btn md-raised md-warning text-white btn-warning ml-3"
                    style="margin-bottom:10px"
                  >
                    Save & Continue
                  </button>
                </div>
              </div>
              <!-- store exterior -->
              <div class="card-content"></div>
            </form>
          </md-card-content>
        </md-card>

        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
export default {
  components: {
    vSelect
  },
  data() {
    return {
      username: "",
      o365_users: [],
      all_users: [],
      tasks: {
        task1: " ",
        task2: " ",
        task3: " ",
        task4: " ",
        task5: " "
      },
      toggle: false,
      image: false,
      stores: [],
      images: [],
      store_manager: "",
      opening_procedures: {
        s1: "",
        s2: "",
        s3: "",
        s4: "",
        s5: "",
        s6: "",
        s7: ""
      },
      staff_issues: {
        s1: "",
        s2: "",
        s3: "",
        s4: ""
      },
      production_management: {
        s1: "",
        s2: "",
        s3: "",
        s4: "",
        s5: "",
        s6: "",
        s7: ""
      },
      haccp_compliance: {
        s1: "",
        s2: "",
        s3: "",
        s4: "",
        s5: "",
        s6: "",
        s7: ""
      },
      hygiene: {
        s1: "",
        s2: "",
        s3: "",
        s4: "",
        s5: "",
        s6: "",
        s7: "",
        s8: "",
        s9: "",
        s10: "",
        s11: "",
        s12: ""
      },
      customer_experience: {
        s1: "",
        s2: "",
        s3: "",
        s4: "",
        s5: "",
        s6: "",
        s7: "",
        s8: "",
        s9: "",
        s10: "",
        s11: "",
        s12: "",
        s13: ""
      },

      total_point: "",
      points: {
        p1: "",
        p2: "",
        p3: "",
        p4: "",
        p5: "",
        p6: ""
      },
      percents: {
        p1: "",
        p2: "",
        p3: "",
        p4: "",
        p5: "",
        p6: ""
      },
      form: {
        store_id: "",
        total_percent: "",
        question_answer: [],
        taskplanner: [],
        images: []
      },
      myMSALObj: null,
      msalConfig: {
        auth: {
          clientId: "dfd74765-cfab-4e7f-bdcb-c619d600dfee", //This is your client ID
          authority:
            "https://login.microsoftonline.com/ce18dbbe-5ce8-4dac-bbcc-874dba4c0a40" //This is your tenant info
        }
      }
    };
  },
  beforeMount() {
    //msal init
    this.myMSALObj = new Msal.UserAgentApplication(this.msalConfig);
    this.getTokenPopupAndCallMSGraph2();
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
    document.getElementById("date").value = today;
    document.getElementById("taskdate1").setAttribute("min", today);
    document.getElementById("taskdate2").setAttribute("min", today);
    document.getElementById("taskdate3").setAttribute("min", today);
    document.getElementById("taskdate4").setAttribute("min", today);
    document.getElementById("taskdate5").setAttribute("min", today);
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
      this.checkForm();
      this.$router.push({ path: "exterior" });
    },
    checkForm() {
      let radioButtonGroups = document.getElementsByClassName(
        "form-check-inline"
      );
      let outerStatus = "";
      let count = 0;
      for (let group of radioButtonGroups) {
        let status = "";
        //console.log(group);
        group = group.querySelectorAll("input");
        //console.log(group);
        for (let el of group) {
          if (el.checked) {
            status = "filled";
            console.log("filled");
            break;
          }
        }
        if (status === "filled") {
          count++;
          continue;
          }
        else {
          alert("Fill all fields!!!");
          break;
          }
      }
      if (count === radioButtonGroups.length) {
        this.submitForm();
      }
    },
    submitForm() {
      let points = this.getTotal();
      let qa = [];
      let taskplanner = [];
      var divs = document.querySelectorAll(".question").forEach(function(el) {
        let index = el.id;
        let label = el.childNodes[0].innerText;
        let qtext = el.dataset.name.replace(/\n/g, " ");
        let ans;

        if (el.childNodes[1].localName == "div") {
          ans = el.childNodes[1].childNodes[0].value;
        } else if (
          el.childNodes[2] &&
          el.childNodes[2].className == "textarea"
        ) {
          ans = el.childNodes[2].childNodes[0].value;
        } else {
          // ans = el.childNodes[1].value;
        }
        qa.push({
          questionno: index,
          questiontext: qtext,
          questionlabel: label,
          answer: ans
        });
      });

      //microsoft planner-action tasks

      document
        .querySelectorAll("[data-name='assignedTo']")
        .forEach((i, index1) => {
          let my_index = index1;
          let title;
          let user_id;
          let user;
          let due_date;

          if (i.childNodes[1].value) {
            this.o365_users.forEach(j => {
              if (j.displayName == i.childNodes[1].value) {
                user_id = j.id;
                user = j.displayName;
              }
            });
            document
              .querySelectorAll("[data-name='task']")
              .forEach((task_el, index2) => {
                if (my_index == index2) {
                  title = task_el.childNodes[1].value;
                }
              });
            document
              .querySelectorAll("[data-name='dueDate']")
              .forEach((date_el, index3) => {
                if (my_index == index3) {
                  due_date = date_el.childNodes[1].value;
                  // console.log(date_el.childNodes[1].value);
                }
              });

            let plannerTask = {
              planId: "iciLfcUe4keB_41IBcpwJWUAHkh2",
              title: title,
              dueDateTime: due_date,
              assignments: {}
            };
            plannerTask.assignments[user_id] = {
              "@odata.type": "#microsoft.graph.plannerAssignment",
              orderHint: " !"
            };
            taskplanner.push({
              task: title,
              assignedto: user,
              status: "pending",
              due_date: due_date,
              store_id: this.form.store_id
            });
            // console.log(plannerTask)

            this.acquireTokenPopupAndCallMSGraph(JSON.stringify(plannerTask));
          }
        });

      let data = [this.form.store_id, qa, points, taskplanner, this.images];
      this.form.question_answer = qa;
      this.points = points;
      this.form.taskplanner = taskplanner;
      this.form.images = this.images;
      this.setPercents();
      this.getSum();

      // this.$store.dispatch('updateAmmvr', data)
      // this.$router.push('amvrfeedback')
    },
    setPercents() {
      this.percents.p1 = Math.ceil((this.points.p1 / 35) * 100);
      this.percents.p2 = Math.ceil((this.points.p2 / 20) * 100);
      this.percents.p3 = Math.ceil((this.points.p3 / 35) * 100);
      this.percents.p4 = Math.ceil((this.points.p4 / 35) * 100);
      this.percents.p5 = Math.ceil((this.points.p5 / 60) * 100);
      this.percents.p6 = Math.ceil((this.points.p6 / 65) * 100);
    },
    getTotal() {
      //opening procedures
      var oSum = 0;
      for (var property in this.opening_procedures) {
        let p = Number(this.opening_procedures[property]);
        oSum += p;
      }

      //staff_issues
      var sSum = 0;
      for (var property in this.staff_issues) {
        let p = Number(this.staff_issues[property]);
        sSum += p;
      }
      //production_management
      var pSum = 0;
      for (var property in this.production_management) {
        let p = Number(this.production_management[property]);
        pSum += p;
      }
      //haccp_compliance
      var haSum = 0;
      for (var property in this.haccp_compliance) {
        let p = Number(this.haccp_compliance[property]);
        haSum += p;
      }
      //hygiene
      var hySum = 0;
      for (var property in this.hygiene) {
        let p = Number(this.hygiene[property]);
        hySum += p;
      }
      //customer_experience
      var cSum = 0;
      for (var property in this.customer_experience) {
        let p = Number(this.customer_experience[property]);
        cSum += p;
      }

      let points = {
        p1: oSum,
        p2: sSum,
        p3: pSum,
        p4: haSum,
        p5: hySum,
        p6: cSum
      };
      return points;
    },
    getSum() {
      var sum = 0;
      for (var property in this.points) {
        let p = Number(this.points[property]);
        sum += p;
      }
      this.total_point = sum;

      var psum = 0;
      for (var property in this.percents) {
        psum += Number(this.percents[property]);
      }
      this.form.total_percent = Math.ceil(psum / 6);
      this.submitMvr();
    },
    submitMvr() {
      var html =
        '<img src="https://freefrontend.com/assets/img/css-loaders/css-fun-Little-loader.gif"/>';

      this.$swal.fire({
        title: "Processing",
        html: html,
        showConfirmButton: false,
        showCancelButton: false,
        width: "380px",
        allowOutsideClick: false
      });
      let that = this;
      var divs = document
        .querySelectorAll(".points")
        .forEach(function(el, ind) {
          let label = el.childNodes[0].innerText;
          let qtext = el.dataset.name.replace(/\n/g, " ");
          let ans;
          Object.keys(that.points).map(function(value, key) {
            if (key == ind) {
              ans = that.points[value];
            }
          });
          if (ans == undefined) {
            ans = that.total_point;
          }
          let index = el.id;
          that.form.question_answer.push({
            questionno: index,
            questiontext: qtext,
            questionlabel: label,
            answer: ans
          });
        });
      var divs = document
        .querySelectorAll(".percent")
        .forEach(function(el, ind) {
          let label = el.childNodes[0].innerText;
          let qtext = el.dataset.name.replace(/\n/g, " ");
          let ans;
          Object.keys(that.percents).map(function(value, key) {
            if (key == ind) {
              ans = that.percents[value];
            }
          });
          if (ans == undefined) {
            ans = that.form.total_percent;
          }
          let index = el.id;
          that.form.question_answer.push({
            questionno: index,
            questiontext: qtext,
            questionlabel: label,
            answer: ans
          });
        });

      var req = {
        what: "ammvr",
        data: this.form
      };
      // console.log(req.data)
      this.$socket
        .makePostRequest(req)
        .then(response => {
          // console.log(response.data.message);

          this.$swal.fire("Success", response.data.message, "success");
          // location.reload();
          // this.$store.dispatch('updateAmmvr', {})
          location.reload();
        })
        .catch(error => {
          // console.log(error);
          this.$swal.fire("Error", error.message, "error");
          this.form.question_answer = [];
          // this.$store.dispatch('updateAmmvr', {})
          // this.$router.push('openingsoa')
        });
    },

    onFileChange(e) {
      if (this.images.length > 4) {
        this.$swal.fire("Warning", "Maximum of 5 images allowed", "warning");
        return;
      }
      var files = e.target.files || e.dataTransfer.files;

      if (!files.length) return;
      else {
        var fsize = (files[0].size / (1024 * 1024)).toFixed(2);
        if (!(fsize <= 10)) {
          this.$swal.fire(
            "Warning",
            "Maximum image size allowed is 10MB",
            "warning"
          );
          return;
        } else {
          this.createImage(files);
        }
      }
    },
    createImage(files) {
      for (let i = 0; i < files.length; i++) {
        var image = new Image();
        var reader = new FileReader();

        reader.onload = e => {
          let image = { image: e.target.result };
          this.images.push(image);
        };
        reader.readAsDataURL(files[i]);
      }
    },
    removeImage(index) {
      this.images.splice(index, 1);
    },
    async acquireTokenPopupAndCallMSGraph(task) {
      //Always start with acquireTokenSilent to obtain a token in the signed in user from cache

      try {
        let tokenResponse = this.$store.getters.msalToken;

        this.callMSGraphPost(
          "https://graph.microsoft.com/v1.0/planner/tasks",
          tokenResponse.accessToken,
          task,
          data => {
            // console.log(data)
          }
        );
      } catch (ex) {
        console.log(ex);
      }
    },

    async getTokenPopupAndCallMSGraph2() {
      let requestObj = {
        scopes: ["groupMember.read.all"]
      };
      try {
        const tokenResponse = await this.myMSALObj.acquireTokenSilent(
          requestObj
        );
        this.callMSGraphGet(
          "https://graph.microsoft.com/v1.0/groups/5d66bed8-adaa-45f3-8db6-a25148b5171b/members",
          tokenResponse.accessToken,
          this.userAPICallback
        );
      } catch (ex) {
        console.log(ex);
      }
    },
    userAPICallback(data) {
      this.o365_users = data.value;
      let that = this;
      this.o365_users.forEach(i => {
        that.all_users.push({
          name: i.displayName
        });
      });
    },
    callMSGraphGet(theUrl, accessToken, callback) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
          callback(JSON.parse(this.responseText));
      };
      xmlHttp.open("GET", theUrl, true); // true for asynchronous
      xmlHttp.setRequestHeader("Authorization", "Bearer " + accessToken);
      xmlHttp.send();
    },
    callMSGraphPost(theUrl, accessToken, data, callback) {
      let config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "Content-type": "application/json"
        }
      };
      // console.log(data)
      // var data = JSON.parse(data)

      let url = theUrl;

      this.$axios
        .post(url, data, config)
        .then(response => {
          // console.log(response)
        })
        .catch(err => {
          console.log(err);
        });
    }

    // async graphAPICallback (data) {
    //   console.log(data)
    // },
  }
};
</script>
<style scoped>
.form-box {
  border: 1px solid #dee2e6;
  height: 120px !important;
  padding: 5px;
}
.md-card img {
  width: 200px !important;
  height: 200px !important;
}
.label {
  display: none;
}
.hidden {
  display: none;
}
#mvr {
  display: none;
}
</style>
