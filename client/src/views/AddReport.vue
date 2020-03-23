<template>
    <div>
        <div class="form-group">
        <label>Country Name</label>
        <input type="text" class="form-control">
    </div>
    <div class="form-group">
        <label>New Cases</label>
        <input v-model="cases" type="text" class="form-control">
    </div>
        <div class="form-group">
        <label>New Deaths</label>
        <input v-model="deaths" type="text" class="form-control">
    </div>
        <div class="form-group">
        <label>New Recovered</label>
        <input v-model="recovered" type="text" class="form-control">
    </div>
    <button v-on:click="submit" type="submit" class="btn btn-primary">Submit</button>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AddReport',
  data() {
    return{
      cases: "",
      deaths: "",
      recovered: ""
    }
  },
  components: {
  },
  methods: {
    submit(){
      axios.get('http://localhost:3000/reports',{
          countryId: this.$route.params.countryId,
          cases: parseInt(this.cases),
          deaths: parseInt(this.deaths),
          recovered: parseInt(this.recovered)
      },{
          headers: { Authorization: localStorage.jwt }
      })
      .then(() =>{
        this.$router.push({ path:"/"})
      })
    }
  }
}
</script>