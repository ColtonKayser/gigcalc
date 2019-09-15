<template>
  <div>
    <h1>Calculator</h1>
    <form @submit.prevent="addGig">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Venue:</label>
            <input type="text" class="form" v-model="gig.venue">
          </div>
        </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Date:</label>
              <input class="form" v-model="gig.date">
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Contact:</label>
              <input type="text" class="form" v-model="gig.contact">
            </div>
          </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label>Pay Amount:</label>
                <input type="text" class="form" v-model="gig.payAmount">
              </div>
            </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Length of Gig:</label>
                  <input type="text" class="form" v-model="gig.gigLength">
                </div>
              </div>
              </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Travel Distance (Round Trip in miles):</label>
                  <input type="text" class="form" v-model="gig.travelDistance">
                </div>
              </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Travel Time (Round Trip):</label>
                    <input type="text" class="form" v-model="gig.travelTime">
                  </div>
                </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Cost of Gas per Gallon:</label>
                      <input type="text" class="form" v-model="gig.costOfGas">
                    </div>
                  </div>
                  </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Vehicle's Miles Per Gallon:</label>
                    <input type="text" class="form" v-model="gig.milesPerGallon">
                  </div>
                </div>
                </div>

        <br />
        <div class="form-group">
          <button class="btn btn-primary">Save</button>
        </div>

        <div class="recommendation">
          <h1>Recommendation</h1>
          <p>You will be paid $(payAmount) for (length of gig + travel time) hours of work.</p>

          <p>Gas will cost you $((travel distance/mpg) * Cost of gas).</p>

          <p>Your net pay will be $(payamount - ((travel distance/mpg) * Cost of gas)) or $(prev variable/total time)</p>

          <h3>This gig is worth taking</h3>
          <h3>This gig is not worth</h3>
        </div>
    </form>

  </div>
</template>

<script>
    export default {
        data(){
        return {
          gig:{}
        }
    },
    methods: {
      addGig() {
        let uri = 'http://localhost:4000/gigs/add';
        this.axios.post(uri, this.gig).then(() => {
          this.$router.push({name: 'gigs'})
        })
      }
    }
  }
</script>
