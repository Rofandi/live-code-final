<template>
  <div class="home">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Cases</th>
          <th scope="col">Deaths</th>
          <th scope="col">Recovered</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="country in countries" :key="country.id">
          <th scope="row">{{country.id}}</th>
          <td>{{country.name}}</td>
          <td>{{country.cases}}</td>
          <td>{{country.deaths}}</td>
          <td>{{country.recovered}}</td>
          <td>
            <router-link v-bind:to="'/add-report/' + country.id" class="btn btn-light btn-sm">
              Add Report
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'Home',
  data() {
    return{
      countries: [],
    }
  },
  components: {
  },
  methods: {
    getAllCountries(){
      axios.get('http://localhost:3000/countries')
      .then((response) =>{
        this.countries = response.data;
      })
    }
  },
  mounted: function(){
    this.getAllCountries();
  }
}
</script>
