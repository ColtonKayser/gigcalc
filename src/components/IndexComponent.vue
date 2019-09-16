<template>
  <div>
    <h1 id="index-header" class="text-center text-light">Gigs</h1>
      <!-- <div class="row">
        <div class="col-md-10"></div>
        <div class="col-md-2">
          <!-- <router-link :to="{ name: 'create' }" class="btn btn-primary border border-light">Create Gig</router-link> -->
        <!-- </div>
      </div><br /> -->

      <table class="table table-hover table-dark rounded">
        <thead>
          <tr>
            <th class="border-0">Venue</th>
            <th class="border-0">Date</th>
            <th class="border-0">Contact</th>
            <th class="border-0">Pay Amount</th>
            <th class="border-0">Gas Expense</th>
            <th class="border-0">Total Work Time</th>
            <th class="border-0">Pay Per Hour</th>
            <th class="border-0">Net Pay</th>

          </tr>
        </thead>
        <tbody class="rounded">
          <tr v-for="gig in gigs" :key="gig._id" :class="gig.payAmount - ((gig.travelDistance / gig.milesPerGallon) * gig.costOfGas) > 0 ? 'bg-success' : 'bg-danger'"  >
            <td>{{ gig.venue }}</td>
            <td>{{ gig.date }}</td>
            <td>{{ gig.contact }}</td>
            <td>${{ gig.payAmount }}</td>
            <td>${{(gig.travelDistance / gig.milesPerGallon) * gig.costOfGas}}
            <td>{{ gig.gigLength + gig.travelTime }} hrs</td>
            <td>${{ (gig.payAmount - ((gig.travelDistance / gig.milesPerGallon) * gig.costOfGas)) / (gig.gigLength + gig.travelTime) }}</td>
            <td>${{ gig.payAmount - ((gig.travelDistance / gig.milesPerGallon) * gig.costOfGas)}}</td>
            <!-- <td>{{ gig.travelDistance }} mi</td>
            <td>{{ gig.travelTime }} hrs</td>
            <td>${{ gig.costOfGas }} per gallon</td>
            <td>{{ gig.milesPerGallon }} mpg</td>
            <td>{{ gig.payAmount - gig.costOfGas}}</td> -->
            <td><router-link :to="{name: 'show', params: { id: gig._id }}" class="btn btn-primary border border-light">Details</router-link></td>
            <td><router-link :to="{name: 'edit', params: { id: gig._id }}" class="btn btn-primary border border-light">Edit</router-link></td>
             <td><button class="btn btn-danger border border-light" @click.prevent="deleteGig(gig._id)">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          gigs: []
        }
      },
      created() {
        let uri = 'http://localhost:4000/gigs';
        this.axios.get(uri).then(response => {
          this.gigs = response.data
        })
      },
      methods: {
        deleteGig(id)
        {
          let uri = `http://localhost:4000/gigs/delete/${id}`;
          this.axios.delete(uri).then(response => {
          this.gigs.splice(this.gigs.findIndex(i => i._id == id), 1);
          })
        },
      }
    }
    </script>
