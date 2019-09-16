<template>
  <div>
    <h1>Gigs</h1>
      <div class="row">
        <div class="col-md-10"></div>
        <div class="col-md-2">
          <router-link :to="{ name: 'create' }" class="btn btn-primary">Create Gig</router-link>
        </div>
      </div><br />

      <table class="table table-hover">
        <thead>
          <tr>
            <th>Venue</th>
            <th>Date</th>
            <th>Contact</th>
            <th>Pay Amount</th>
            <th>Gig Length</th>
            <th>Travel Distance</th>
            <th>Travel Time</th>
            <th>Cost of Gas</th>
            <th>Miles Per Gallon</th>
            <th>Math</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="gig in gigs" :key="gig._id">
            <td>{{ gig.venue }}</td>
            <td>{{ gig.date }}</td>
            <td>{{ gig.contact }}</td>
            <td>${{ gig.payAmount }}</td>
            <td>{{ gig.gigLength }} hrs</td>
            <td>{{ gig.travelDistance }} mi</td>
            <td>{{ gig.travelTime }} hrs</td>
            <td>${{ gig.costOfGas }} per gallon</td>
            <td>{{ gig.milesPerGallon }} mpg</td>
            <td>{{ (gig.milesPerGallon * gig.costOfGas) + gig.travelTime}}</td>
            <td><router-link :to="{name: 'edit', params: { id: gig._id }}" class="btn btn-primary">Edit</router-link></td>
             <td><button class="btn btn-danger" @click.prevent="deleteGig(gig._id)">Delete</button></td>
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
        }
      }
    }
    </script>
