<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-size-100">

        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="title">Merchandise</h4>
          </md-card-header>
          <md-card-content>
            <form
              id=""
              role="form"
              v-on:submit.prevent=""
            >
              <div
                id="form-fields"
                class="card-content"
              >

                <div>
                  <h5 class="subtitle"><u>Scoring</u></h5>
                  <ol class="d-flex justify-content-between">
                    <li>Unacceptable</li>
                    <li>Fair</li>
                    <li>Satisfactory</li>
                    <li>Good</li>
                    <li>Exceeds expectations</li>
                  </ol>
                </div>

                <!-- questions -->

                <md-card class="md-raised">
                  <md-card-content>

                    <p>Are the department managers on the shop floor and actively managing the depts?</p>

                    <div class="form-check-inline">

                      <label class="customradio"><span class="radiotextsty">1</span>
                        <input
                          type="radio"
                          name="radio1"
                          value="1"
                        >
                        <span class="checkmark"></span>
                      </label>        
                      <label class="customradio"><span class="radiotextsty">2</span>
                        <input
                          type="radio"
                          name="radio1"
                          value="2"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">3</span>
                        <input
                          type="radio"
                          name="radio1"
                          value="3"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">4</span>
                        <input
                          type="radio"
                          name="radio1"
                          value="4"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">5</span>
                        <input
                          type="radio"
                          name="radio1"
                          value="5"
                        >
                        <span class="checkmark"></span>
                      </label>

                    </div>

                  </md-card-content>
                </md-card>
                <md-card class="md-raised">
                  <md-card-content>

                    <p>Are all key aisles fully manned by merchandisers that are well trained to service shoppers?</p>

                    <div class="form-check-inline">

                      <label class="customradio"><span class="radiotextsty">1</span>
                        <input
                          type="radio"
                          name="radio2"
                          value="1"
                        >
                        <span class="checkmark"></span>
                      </label>        
                      <label class="customradio"><span class="radiotextsty">2</span>
                        <input
                          type="radio"
                          name="radio2"
                          value="2"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">3</span>
                        <input
                          type="radio"
                          name="radio2"
                          value="3"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">4</span>
                        <input
                          type="radio"
                          name="radio2"
                          value="4"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">5</span>
                        <input
                          type="radio"
                          name="radio2"
                          value="5"
                        >
                        <span class="checkmark"></span>
                      </label>

                    </div>

                  </md-card-content>
                </md-card>
                <md-card class="md-raised">
                  <md-card-content>

                    <p>Are all products on display well packed and not damaged?</p>

                    <div class="form-check-inline">

                      <label class="customradio"><span class="radiotextsty">1</span>
                        <input
                          type="radio"
                          name="radio3"
                          value="1"
                        >
                        <span class="checkmark"></span>
                      </label>        
                      <label class="customradio"><span class="radiotextsty">2</span>
                        <input
                          type="radio"
                          name="radio3"
                          value="2"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">3</span>
                        <input
                          type="radio"
                          name="radio3"
                          value="3"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">4</span>
                        <input
                          type="radio"
                          name="radio3"
                          value="4"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">5</span>
                        <input
                          type="radio"
                          name="radio3"
                          value="5"
                        >
                        <span class="checkmark"></span>
                      </label>

                    </div>

                  </md-card-content>
                </md-card>
                <md-card class="md-raised">
                  <md-card-content>

                    <p>Are merchandise displayed based on categories?</p>

                    <div class="form-check-inline">

                      <label class="customradio"><span class="radiotextsty">1</span>
                        <input
                          type="radio"
                          name="radio4"
                          value="1"
                        >
                        <span class="checkmark"></span>
                      </label>        
                      <label class="customradio"><span class="radiotextsty">2</span>
                        <input
                          type="radio"
                          name="radio4"
                          value="2"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">3</span>
                        <input
                          type="radio"
                          name="radio4"
                          value="3"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">4</span>
                        <input
                          type="radio"
                          name="radio4"
                          value="4"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">5</span>
                        <input
                          type="radio"
                          name="radio4"
                          value="5"
                        >
                        <span class="checkmark"></span>
                      </label>

                    </div>

                  </md-card-content>
                </md-card>
                <md-card class="md-raised">
                  <md-card-content>

                    <p>Sales floor layout and positioning are compliant with current company planograms and branding standards.</p>

                    <div class="form-check-inline">

                      <label class="customradio"><span class="radiotextsty">1</span>
                        <input
                          type="radio"
                          name="radio5"
                          value="1"
                        >
                        <span class="checkmark"></span>
                      </label>        
                      <label class="customradio"><span class="radiotextsty">2</span>
                        <input
                          type="radio"
                          name="radio5"
                          value="2"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">3</span>
                        <input
                          type="radio"
                          name="radio5"
                          value="3"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">4</span>
                        <input
                          type="radio"
                          name="radio5"
                          value="4"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">5</span>
                        <input
                          type="radio"
                          name="radio5"
                          value="5"
                        >
                        <span class="checkmark"></span>
                      </label>

                    </div>

                  </md-card-content>
                </md-card>
                <md-card class="md-raised">
                  <md-card-content>

                    <p>Are the shelves fully stocked i.e. there are no product holes?</p>

                    <div class="form-check-inline">

                      <label class="customradio"><span class="radiotextsty">1</span>
                        <input
                          type="radio"
                          name="radio6"
                          value="1"
                        >
                        <span class="checkmark"></span>
                      </label>        
                      <label class="customradio"><span class="radiotextsty">2</span>
                        <input
                          type="radio"
                          name="radio6"
                          value="2"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">3</span>
                        <input
                          type="radio"
                          name="radio6"
                          value="3"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">4</span>
                        <input
                          type="radio"
                          name="radio6"
                          value="4"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">5</span>
                        <input
                          type="radio"
                          name="radio6"
                          value="5"
                        >
                        <span class="checkmark"></span>
                      </label>

                    </div>

                  </md-card-content>
                </md-card>
                <md-card class="md-raised">
                  <md-card-content>

                    <p>Are all products fronted correctly?</p>

                    <div class="form-check-inline">

                      <label class="customradio"><span class="radiotextsty">1</span>
                        <input
                          type="radio"
                          name="radio7"
                          value="1"
                        >
                        <span class="checkmark"></span>
                      </label>        
                      <label class="customradio"><span class="radiotextsty">2</span>
                        <input
                          type="radio"
                          name="radio7"
                          value="2"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">3</span>
                        <input
                          type="radio"
                          name="radio7"
                          value="3"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">4</span>
                        <input
                          type="radio"
                          name="radio7"
                          value="4"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">5</span>
                        <input
                          type="radio"
                          name="radio7"
                          value="5"
                        >
                        <span class="checkmark"></span>
                      </label>

                    </div>

                  </md-card-content>
                </md-card>
                <md-card class="md-raised">
                  <md-card-content>

                    <p>Are all products on display correctly priced?</p>

                    <div class="form-check-inline">

                      <label class="customradio"><span class="radiotextsty">1</span>
                        <input
                          type="radio"
                          name="radio8"
                          value="1"
                        >
                        <span class="checkmark"></span>
                      </label>        
                      <label class="customradio"><span class="radiotextsty">2</span>
                        <input
                          type="radio"
                          name="radio8"
                          value="2"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">3</span>
                        <input
                          type="radio"
                          name="radio8"
                          value="3"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">4</span>
                        <input
                          type="radio"
                          name="radio8"
                          value="4"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">5</span>
                        <input
                          type="radio"
                          name="radio8"
                          value="5"
                        >
                        <span class="checkmark"></span>
                      </label>

                    </div>

                  </md-card-content>
                </md-card>
                <md-card class="md-raised">
                  <md-card-content>

                    <p>Is the merchandise display clean visually pleasing?</p>

                    <div class="form-check-inline">

                      <label class="customradio"><span class="radiotextsty">1</span>
                        <input
                          type="radio"
                          name="radio9"
                          value="1"
                        >
                        <span class="checkmark"></span>
                      </label>        
                      <label class="customradio"><span class="radiotextsty">2</span>
                        <input
                          type="radio"
                          name="radio9"
                          value="2"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">3</span>
                        <input
                          type="radio"
                          name="radio9"
                          value="3"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">4</span>
                        <input
                          type="radio"
                          name="radio9"
                          value="4"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">5</span>
                        <input
                          type="radio"
                          name="radio9"
                          value="5"
                        >
                        <span class="checkmark"></span>
                      </label>

                    </div>

                  </md-card-content>
                </md-card>
                <md-card class="md-raised">
                  <md-card-content>

                    <p>Are all top selling stocks available ?</p>

                    <div class="form-check-inline">

                      <label class="customradio"><span class="radiotextsty">1</span>
                        <input
                          type="radio"
                          name="radio10"
                          value="1"
                        >
                        <span class="checkmark"></span>
                      </label>        
                      <label class="customradio"><span class="radiotextsty">2</span>
                        <input
                          type="radio"
                          name="radio10"
                          value="2"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">3</span>
                        <input
                          type="radio"
                          name="radio10"
                          value="3"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">4</span>
                        <input
                          type="radio"
                          name="radio10"
                          value="4"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">5</span>
                        <input
                          type="radio"
                          name="radio10"
                          value="5"
                        >
                        <span class="checkmark"></span>
                      </label>

                    </div>

                  </md-card-content>
                </md-card>
                <md-card class="md-raised">
                  <md-card-content>

                    <p>Are products on promotion well displayed and well tagged?</p>

                    <div class="form-check-inline">

                      <label class="customradio"><span class="radiotextsty">1</span>
                        <input
                          type="radio"
                          name="radio11"
                          value="1"
                        >
                        <span class="checkmark"></span>
                      </label>        
                      <label class="customradio"><span class="radiotextsty">2</span>
                        <input
                          type="radio"
                          name="radio11"
                          value="2"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">3</span>
                        <input
                          type="radio"
                          name="radio11"
                          value="3"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">4</span>
                        <input
                          type="radio"
                          name="radio11"
                          value="4"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">5</span>
                        <input
                          type="radio"
                          name="radio11"
                          value="5"
                        >
                        <span class="checkmark"></span>
                      </label>

                    </div>

                  </md-card-content>
                </md-card>
                <md-card class="md-raised">
                  <md-card-content>

                    <p>Are correct products cross-merchandised with primary stock to increase basket size.?</p>

                    <div class="form-check-inline">

                      <label class="customradio"><span class="radiotextsty">1</span>
                        <input
                          type="radio"
                          name="radio12"
                          value="1"
                        >
                        <span class="checkmark"></span>
                      </label>        
                      <label class="customradio"><span class="radiotextsty">2</span>
                        <input
                          type="radio"
                          name="radio12"
                          value="2"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">3</span>
                        <input
                          type="radio"
                          name="radio12"
                          value="3"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">4</span>
                        <input
                          type="radio"
                          name="radio12"
                          value="4"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">5</span>
                        <input
                          type="radio"
                          name="radio12"
                          value="5"
                        >
                        <span class="checkmark"></span>
                      </label>

                    </div>

                  </md-card-content>
                </md-card>
                <md-card class="md-raised">
                  <md-card-content>

                    <p>All Aisles are free from debris?</p>

                    <div class="form-check-inline">

                      <label class="customradio"><span class="radiotextsty">1</span>
                        <input
                          type="radio"
                          name="radio13"
                          value="1"
                        >
                        <span class="checkmark"></span>
                      </label>        
                      <label class="customradio"><span class="radiotextsty">2</span>
                        <input
                          type="radio"
                          name="radio13"
                          value="2"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">3</span>
                        <input
                          type="radio"
                          name="radio13"
                          value="3"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">4</span>
                        <input
                          type="radio"
                          name="radio13"
                          value="4"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">5</span>
                        <input
                          type="radio"
                          name="radio13"
                          value="5"
                        >
                        <span class="checkmark"></span>
                      </label>

                    </div>

                  </md-card-content>
                </md-card>
                <md-card class="md-raised">
                  <md-card-content>

                    <p>Are all merchandise placed on a shelf or on a pallet? i.e. no merchandise is placed on the floor?</p>

                    <div class="form-check-inline">

                      <label class="customradio"><span class="radiotextsty">1</span>
                        <input
                          type="radio"
                          name="radio14"
                          value="1"
                        >
                        <span class="checkmark"></span>
                      </label>        
                      <label class="customradio"><span class="radiotextsty">2</span>
                        <input
                          type="radio"
                          name="radio14"
                          value="2"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">3</span>
                        <input
                          type="radio"
                          name="radio14"
                          value="3"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">4</span>
                        <input
                          type="radio"
                          name="radio14"
                          value="4"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">5</span>
                        <input
                          type="radio"
                          name="radio14"
                          value="5"
                        >
                        <span class="checkmark"></span>
                      </label>

                    </div>

                  </md-card-content>
                </md-card>
                <md-card class="md-raised">
                  <md-card-content>

                    <p>Check that floor/bulk displays do not block aisles or customer movement. No tripping hazards.?</p>

                    <div class="form-check-inline">

                      <label class="customradio"><span class="radiotextsty">1</span>
                        <input
                          type="radio"
                          name="radio15"
                          value="1"
                        >
                        <span class="checkmark"></span>
                      </label>        
                      <label class="customradio"><span class="radiotextsty">2</span>
                        <input
                          type="radio"
                          name="radio15"
                          value="2"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">3</span>
                        <input
                          type="radio"
                          name="radio15"
                          value="3"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">4</span>
                        <input
                          type="radio"
                          name="radio15"
                          value="4"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">5</span>
                        <input
                          type="radio"
                          name="radio15"
                          value="5"
                        >
                        <span class="checkmark"></span>
                      </label>

                    </div>

                  </md-card-content>
                </md-card>
                <md-card class="md-raised">
                  <md-card-content>

                    <p>Do staff have a good view of the store at all times from their stations?</p>

                    <div class="form-check-inline">

                      <label class="customradio"><span class="radiotextsty">1</span>
                        <input
                          type="radio"
                          name="radio16"
                          value="1"
                        >
                        <span class="checkmark"></span>
                      </label>        
                      <label class="customradio"><span class="radiotextsty">2</span>
                        <input
                          type="radio"
                          name="radio16"
                          value="2"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">3</span>
                        <input
                          type="radio"
                          name="radio16"
                          value="3"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">4</span>
                        <input
                          type="radio"
                          name="radio16"
                          value="4"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">5</span>
                        <input
                          type="radio"
                          name="radio16"
                          value="5"
                        >
                        <span class="checkmark"></span>
                      </label>

                    </div>

                  </md-card-content>
                </md-card>
                <md-card class="md-raised">
                  <md-card-content>

                    <p>Have potential blind spots identified and managed?</p>

                    <div class="form-check-inline">

                      <label class="customradio"><span class="radiotextsty">1</span>
                        <input
                          type="radio"
                          name="radio17"
                          value="1"
                        >
                        <span class="checkmark"></span>
                      </label>        
                      <label class="customradio"><span class="radiotextsty">2</span>
                        <input
                          type="radio"
                          name="radio17"
                          value="2"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">3</span>
                        <input
                          type="radio"
                          name="radio17"
                          value="3"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">4</span>
                        <input
                          type="radio"
                          name="radio17"
                          value="4"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">5</span>
                        <input
                          type="radio"
                          name="radio17"
                          value="5"
                        >
                        <span class="checkmark"></span>
                      </label>

                    </div>

                  </md-card-content>
                </md-card>
                <md-card class="md-raised">
                  <md-card-content>

                    <p>Are key sales floor areas are merchandised with new products and high margin SKUs?</p>

                    <div class="form-check-inline">

                      <label class="customradio"><span class="radiotextsty">1</span>
                        <input
                          type="radio"
                          name="radio18"
                          value="1"
                        >
                        <span class="checkmark"></span>
                      </label>        
                      <label class="customradio"><span class="radiotextsty">2</span>
                        <input
                          type="radio"
                          name="radio18"
                          value="2"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">3</span>
                        <input
                          type="radio"
                          name="radio18"
                          value="3"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">4</span>
                        <input
                          type="radio"
                          name="radio18"
                          value="4"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">5</span>
                        <input
                          type="radio"
                          name="radio18"
                          value="5"
                        >
                        <span class="checkmark"></span>
                      </label>

                    </div>

                  </md-card-content>
                </md-card>
                <md-card class="md-raised">
                  <md-card-content>

                    <p>Are key sales floor displays changed at least monthly?</p>

                    <div class="form-check-inline">

                      <label class="customradio"><span class="radiotextsty">1</span>
                        <input
                          type="radio"
                          name="radio19"
                          value="1"
                        >
                        <span class="checkmark"></span>
                      </label>        
                      <label class="customradio"><span class="radiotextsty">2</span>
                        <input
                          type="radio"
                          name="radio19"
                          value="2"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">3</span>
                        <input
                          type="radio"
                          name="radio19"
                          value="3"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">4</span>
                        <input
                          type="radio"
                          name="radio19"
                          value="4"
                        >
                        <span class="checkmark"></span>
                      </label>
                      <label class="customradio"><span class="radiotextsty">5</span>
                        <input
                          type="radio"
                          name="radio19"
                          value="5"
                        >
                        <span class="checkmark"></span>
                      </label>

                    </div>

                  </md-card-content>
                </md-card>

                <div v-show='toggle'>
                  <h5 class="subtitle">Assign Tasks on things that need improvement / Correction</h5>
                  <table class="table table-bordered">
                    <thead>
                      <th>Project/Task</th>
                      <th>Assigned To</th>
                      <th>Due Date</th>

                    </thead>
                    <tbody>
                      <tr>
                        <td
                          id="24"
                          class=""
                          data-name="task"
                        >
                          <label
                            for=""
                            class="label"
                          > </label>
                          <input
                            class="form-control"
                            type="text"
                            name=""
                          >
                        </td>
                        <td
                          id="25"
                          class=""
                          data-name="assignedTo"
                        >
                          <label
                            for=""
                            class="label"
                          > </label>
                          <input
                            id="task1"
                            class="form-control"
                            type="hidden"
                            name=""
                          >

                          <v-select
                            class="form-control"
                            v-model="tasks.task1"
                            :options="all_users"
                            label="name"
                            :reduce="name => name.name"
                          >
                          </v-select>
                        </td>
                        <td
                          id="26"
                          class=""
                          data-name="dueDate"
                        >
                          <label
                            for=""
                            class="label"
                          > </label>
                          <input
                            id="taskdate1"
                            class="form-control"
                            type="date"
                            name=""
                          >
                        </td>

                      </tr>
                      <tr>
                        <td
                          id="28"
                          class=""
                          data-name="task"
                        >
                          <label
                            for=""
                            class="label"
                          > </label>
                          <input
                            class="form-control"
                            type="text"
                            name=""
                          >
                        </td>
                        <td
                          id="29"
                          class=""
                          data-name="assignedTo"
                        >
                          <label
                            for=""
                            class="label"
                          > </label>
                          <input
                            id="task2"
                            class="form-control"
                            type="hidden"
                            name=""
                          >

                          <v-select
                            class="form-control"
                            v-model="tasks.task2"
                            :options="all_users"
                            label="name"
                            :reduce="name => name.name"
                          >
                          </v-select>
                        </td>
                        <td
                          id="30"
                          class=""
                          data-name="dueDate"
                        >
                          <label
                            for=""
                            class="label"
                          > </label>
                          <input
                            id="taskdate2"
                            class="form-control"
                            type="date"
                            name=""
                          >
                        </td>

                      </tr>
                      <tr>
                        <td
                          id="32"
                          class=""
                          data-name="task"
                        >
                          <label
                            for=""
                            class="label"
                          > </label>
                          <input
                            class="form-control"
                            type="text"
                            name=""
                          >
                        </td>
                        <td
                          id="33"
                          class=""
                          data-name="assignedTo"
                        >
                          <label
                            for=""
                            class="label"
                          > </label>
                          <input
                            id="task3"
                            class="form-control"
                            type="hidden"
                            name=""
                          >

                          <v-select
                            class="form-control"
                            v-model="tasks.task3"
                            :options="all_users"
                            label="name"
                            :reduce="name => name.name"
                          >
                          </v-select>
                        </td>
                        <td
                          id="34"
                          class=""
                          data-name="dueDate"
                        >
                          <label
                            for=""
                            class="label"
                          > </label>
                          <input
                            id="taskdate3"
                            class="form-control"
                            type="date"
                            name=""
                          >
                        </td>

                      </tr>
                      <tr>
                        <td
                          id="36"
                          class=""
                          data-name="task"
                        >
                          <label
                            for=""
                            class="label"
                          > </label>
                          <input
                            class="form-control"
                            type="text"
                            name=""
                          >
                        </td>
                        <td
                          id="37"
                          class=""
                          data-name="assignedTo"
                        >
                          <label
                            for=""
                            class="label"
                          > </label>
                          <input
                            id="task4"
                            class="form-control"
                            type="hidden"
                            name=""
                          >

                          <v-select
                            class="form-control"
                            v-model="tasks.task4"
                            :options="all_users"
                            label="name"
                            :reduce="name => name.name"
                          >
                          </v-select>
                        </td>
                        <td
                          id="38"
                          class=""
                          data-name="dueDate"
                        >
                          <label
                            for=""
                            class="label"
                          > </label>
                          <input
                            id="taskdate4"
                            class="form-control"
                            type="date"
                            name=""
                          >
                        </td>

                      </tr>
                      <tr>
                        <td
                          id="40"
                          class=""
                          data-name="task"
                        >
                          <label
                            for=""
                            class="label"
                          > </label>
                          <input
                            class="form-control"
                            type="text"
                            name=""
                          >
                        </td>
                        <td
                          id="41"
                          class=""
                          data-name="assignedTo"
                        >
                          <label
                            for=""
                            class="label"
                          > </label>
                          <input
                            id="task5"
                            class="form-control"
                            type="hidden"
                            name=""
                          >

                          <v-select
                            class="form-control"
                            v-model="tasks.task5"
                            :options="all_users"
                            label="name"
                            :reduce="name => name.name"
                          >
                          </v-select>
                        </td>
                        <td
                          id="42"
                          class=""
                          data-name="dueDate"
                        >
                          <label
                            for=""
                            class="label"
                          > </label>
                          <input
                            id="taskdate5"
                            class="form-control"
                            type="date"
                            name=""
                          >
                        </td>

                      </tr>

                    </tbody>

                  </table>
                </div>
                <div v-show="image">

                  <div
                    id="imgprv"
                    style="display:flex"
                  >
                    <div
                      style="position:relative"
                      v-for="(imag, index) in images"
                      v-bind:key="index"
                    >
                      <span
                        v-on:click='removeImage(index)'
                        class=" text-danger "
                        title="remove image"
                        style="right: 2px;
                         position: absolute;padding-top:2px; border-radius: 50%;  font-weight: bold; height: 25px; top: 2px;  width: 25px; text-align: center; background-color: rgba(255, 255, 255, 0.6);"
                      >x</span>
                      <img
                        :height="100"
                        :width="100"
                        :src="imag.image"
                      />
                    </div>

                  </div>
                  <div>
                    <small class="text-warning">* Maximum of 5 images</small> <br><small class="text-warning">* Maximum of 10MB image size</small><br>
                    <small class="text-warning">* Only JPEG, JPG and PNG allowed </small>
                    <input
                      accept="image/jpg, image/jpeg, image/png"
                      id="img_url"
                      @change="onFileChange"
                      type="file"
                      class="form-control"
                    />
                    <!-- <div><img id="imgprv" :height="200" :src="thumbnail.image" /></div> -->
                  </div>

                </div>
                <md-button
                  @click='toggle = !toggle'
                  class="btn md-raised md-info"
                  title="Assign tasks to be carried out"
                >Action Plans</md-button>
                <md-button
                  @click='image = !image'
                  class="btn md-raised md-success"
                  title="Upload maximum of 5 images"
                >Upload Image(s)</md-button>
                <br>
                <div class="float-right">
                  <button
                    @click="submitForm"
                    class="btn md-raised md-warning text-white btn-warning "
                    style="margin-bottom:10px"
                  >Save
                  </button>
                  <button
                    @click="saveContinue"
                    class="btn md-raised md-warning text-white btn-warning ml-3"
                    style="margin-bottom:10px"
                  >Save & Continue
                  </button>
                </div>

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
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
export default {
  components: {
    vSelect
  },
  data () {
    return {
      username: "",
      o365_users: [],
      all_users: [],
      tasks: {
        task1: " ",
        task2: " ",
        task3: " ",
        task4: " ",
        task5: " ",
      },
      toggle: false,
      image: false,
      images: [],
      form: {
        section: "Store Exterior",
        total_point: "",
        total_percent: "",
        taskplanner: [],
        images: []
      },
      myMSALObj: null,
      msalConfig: {
        auth: {
          clientId: 'dfd74765-cfab-4e7f-bdcb-c619d600dfee', //This is your client ID
          authority: "https://login.microsoftonline.com/ce18dbbe-5ce8-4dac-bbcc-874dba4c0a40",//This is your tenant info
        }
      },
    };
  },
  beforeMount () {
    // msal init
    this.myMSALObj = new Msal.UserAgentApplication(this.msalConfig);
    this.getTokenPopupAndCallMSGraph2()
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
    document.getElementById("taskdate1").setAttribute("min", today);
    document.getElementById("taskdate2").setAttribute("min", today);
    document.getElementById("taskdate3").setAttribute("min", today);
    document.getElementById("taskdate4").setAttribute("min", today);
    document.getElementById("taskdate5").setAttribute("min", today);


  },
  watch: {
    'form.store_id': function (val) {

      this.stores.forEach((i) => {

        if (i.id === val) {
          this.store_manager = i.store_admin_name
        }
      })
    },
    'tasks.task1': function (val) {
      document.getElementById('task1').value = val
    },
    'tasks.task2': function (val) {
      document.getElementById('task2').value = val
    },
    'tasks.task3': function (val) {
      document.getElementById('task3').value = val
    },
    'tasks.task4': function (val) {
      document.getElementById('task4').value = val
    },
    'tasks.task5': function (val) {
      document.getElementById('task5').value = val
    },

  },

  methods: {
    saveContinue () {
      this.submitForm()
      this.$router.push({ path: 'production' })

    },
    submitForm () {
      let total_point = 0;
      let taskplanner = [];
      document.querySelectorAll('input').forEach(function (el, ind) {
        if (el.checked) {
          total_point += parseInt(el.value)
          //   console.log(el.value)
        }
      });
      this.form.total_point = total_point;
      this.form.total_percent = Math.ceil((this.form.total_point / 85) * 100);

      //microsoft planner-action tasks

      document.querySelectorAll("[data-name='assignedTo']").forEach((i, index1) => {
        let my_index = index1;
        let title;
        let user_id;
        let user; let due_date;

        if (i.childNodes[1].value) {
          this.o365_users.forEach(j => {
            if (j.displayName == i.childNodes[1].value) {
              user_id = j.id;
              user = j.displayName;
            }
          });
          document.querySelectorAll("[data-name='task']").forEach((task_el, index2) => {

            if (my_index == index2) {
              title = task_el.childNodes[1].value;
            }

          })
          document.querySelectorAll("[data-name='dueDate']").forEach((date_el, index3) => {

            if (my_index == index3) {
              due_date = date_el.childNodes[1].value;
              // console.log(date_el.childNodes[1].value);
            }

          });

          let plannerTask =
          {
            "planId": "qIHpeHJuykm_kq3m15BkZGUAHlCA",
            "title": title,
            "dueDateTime": due_date,
            assignments: {},
          }
          plannerTask.assignments[user_id] = {
            "@odata.type": "#microsoft.graph.plannerAssignment",
            "orderHint": " !"
          }
          taskplanner.push({
            task: title,
            assigned_to: user,
            status: "pending",
            due_date: due_date

          })
          console.log(plannerTask)

          //   this.acquireTokenPopupAndCallMSGraph(JSON.stringify(plannerTask))
        }
      });


      this.form.taskplanner = taskplanner;
      this.form.images = this.images;
      console.log(this.form);
      return;
    },

    onFileChange (e) {
      if (this.images.length > 4) {
        this.$swal.fire("Warning", "Maximum of 5 images allowed", "warning");
        return;
      }
      var files = e.target.files || e.dataTransfer.files;

      if (!files.length) return;
      else {
        var fsize = (files[0].size / (1024 * 1024)).toFixed(2);
        if (!(fsize <= 10)) {
          this.$swal.fire("Warning", "Maximum image size allowed is 10MB", "warning");
          return;
        }
        else {
          this.createImage(files);
        }
      }
    },
    createImage (files) {
      for (let i = 0; i < files.length; i++) {
        var image = new Image();
        var reader = new FileReader();

        reader.onload = e => {
          let image = { "image": e.target.result }
          this.images.push(image);
        };
        reader.readAsDataURL(files[i]);
      }


    },
    removeImage (index) {
      this.images.splice(index, 1);
    },
    async acquireTokenPopupAndCallMSGraph (task) {

      //Always start with acquireTokenSilent to obtain a token in the signed in user from cache

      try {
        let tokenResponse = this.$store.getters.msalToken

        this.callMSGraphPost("https://graph.microsoft.com/v1.0/planner/tasks", tokenResponse.accessToken, task, (data) => {
          // console.log(data)
        });
      } catch (ex) {
        console.log(ex);

      }
    },

    async getTokenPopupAndCallMSGraph2 () {

      let requestObj = {
        scopes: ["groupMember.read.all"]
      }
      try {
        const tokenResponse = await this.myMSALObj.acquireTokenSilent(requestObj);
        this.callMSGraphGet("https://graph.microsoft.com/v1.0/groups/df8ec304-ccda-4c33-b244-edb05f0e5731/members", tokenResponse.accessToken, this.userAPICallback);
      } catch (ex) {
        console.log(ex);

      }
    },
    userAPICallback (data) {
      this.o365_users = data.value
      let that = this;
      this.o365_users.forEach(i => {
        that.all_users.push({
          name: i.displayName
        })
      })
    },
    callMSGraphGet (theUrl, accessToken, callback) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)
          callback(JSON.parse(this.responseText));
      }
      xmlHttp.open("GET", theUrl, true); // true for asynchronous
      xmlHttp.setRequestHeader('Authorization', 'Bearer ' + accessToken);
      xmlHttp.send();
    },
    callMSGraphPost (theUrl, accessToken, data, callback) {

      let config = {
        headers: {
          'Authorization': 'Bearer ' + accessToken,
          'Content-type': 'application/json'
        }
      }
      // console.log(data)
      // var data = JSON.parse(data)

      let url = theUrl

      this.$axios.post(url, data, config)
        .then((response) => {
          // console.log(response)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
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
/* Custom Radio Button Start*/

.radiotextsty {
  color: #a5a4bf;
  font-size: 15px;
}

.customradio {
  display: block;
  position: relative;
  padding-left: 24px;
  margin-bottom: 0px;
  margin-right: 12px;
  cursor: pointer;
  font-size: 18px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.customradio input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 22px;
  width: 22px;
  background-color: white;
  border-radius: 50%;
  border: 1px solid #bebebe;
}

/* On mouse-over, add a grey background color */
.customradio:hover input ~ .checkmark {
  background-color: transparent;
}

/* When the radio button is checked, add a blue background */
.customradio input:checked ~ .checkmark {
  background-color: white;
  border: 1px solid #a5a5a5;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.customradio input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.customradio .checkmark:after {
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fc930a;
}

/* Custom Radio Button End*/
</style>
