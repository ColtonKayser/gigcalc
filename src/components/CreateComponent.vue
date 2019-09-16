<template>
  <div>
    <h1 id="create-heading" class="text-light text-center">Calculator</h1>
    <form id="create-form" class="text-right" style="margin-left: 220px;" @submit.prevent="addGig">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label class="text-light">Venue:   </label>
            <input type="text" class="form text-light" style="background-color: #2F4F4F;" v-model="gig.venue">
          </div>
        </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label class="text-light">Date:</label>
              <input class="form text-light" style="background-color: #2F4F4F;" v-model="gig.date">
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label class="text-light">Contact:</label>
              <input type="text" class="form text-light" style="background-color: #2F4F4F;" v-model="gig.contact">
            </div>
          </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label class="text-light">Pay Amount:</label>
                <input type="text" class="form text-light" style="background-color: #2F4F4F;" v-model="gig.payAmount">
              </div>
            </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="text-light">Length of Gig (in hours):</label>
                  <input type="text" class="form text-light" style="background-color: #2F4F4F;" v-model="gig.gigLength">
                </div>
              </div>
              </div>

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="text-light">Distance (Round Trip in miles):</label>
                  <input type="text" class="form text-light" style="background-color: #2F4F4F;" v-model="gig.travelDistance">
                </div>
              </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="text-light">Travel Time (in hours):</label>
                    <input type="text" class="form text-light" style="background-color: #2F4F4F;" v-model="gig.travelTime">
                  </div>
                </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="text-light">Cost of Gas per Gallon:</label>
                      <input type="text" class="form text-light" style="background-color: #2F4F4F;" v-model="gig.costOfGas">
                    </div>
                  </div>
                  </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="text-light">Vehicle's Miles Per Gallon:</label>
                    <input type="text" class="form text-light" style="background-color: #2F4F4F;" v-model="gig.milesPerGallon">
                  </div>
                </div>
                </div>

        <br />
        <div class="form-group">
          <button class="btn border-light text-light" style="background-color: #2F4F4F; margin-right: 507px;">Calculate</button>
        </div>


    </form>
    <div class="recommendation">
      <h1>Recommendation</h1>
      <p>You will be paid {{ gig.payAmount }} for {{ gig.gigLength + gig.travelTime }} <p>hours of work.</p>

      <p>Gas will cost you ${{ ( ( gig.travelDistance / gig.milesPerGallon ) * gig.costOfGas ) }}.</p>

      <p>Your net pay will be $(payamount - ((travel distance/mpg) * Cost of gas)) or $(prev variable/total time)</p>

      <h3>This gig is worth taking</h3>
      <h3>This gig is not worth</h3>
    </div>

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
      math() {

      },
      addGig() {
        let uri = 'http://localhost:4000/gigs/add';
        this.axios.post(uri, this.gig).then(() => {
          this.$router.push({name: 'gigs'})
        })
      }
    }
  }
</script>
