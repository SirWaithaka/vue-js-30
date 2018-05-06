<template>
  <div>
    <h1 class="h1 my-5 text-center">Course from Javascript in 30 days</h1>
    <div class="container">
      <div class="row">
        <b-card  class="col col-md-5 mr-4" bg-variant="dark" text-variant="white" title="Javascript Drum Kit">
          <p class="card-text">
            Build a drum kit and play it using keyboard keys.
          </p>
          <b-button v-on:click="navigateTo({ name: 'DayOne' })" variant="primary">View</b-button>
        </b-card>
        <b-card  class="col col-md-5 ml-4" bg-variant="dark" text-variant="white" title="Local Tapas">
          <p class="card-text">
            Local Tapas: Learning Local Storage and Event Delegation.
          </p>
          <b-button v-on:click="navigateTo({ name: 'DayFifteen' })" variant="primary">View</b-button>
        </b-card>
      </div>
      <div class="row">
        <b-card  class="col col-md-5 mr-4 mt-4" bg-variant="dark" text-variant="white" title="Sorting !Articles">
          <p class="card-text">
            Sort Titles while Ignoring articles (a, an, the)
          </p>
          <b-button v-on:click="navigateTo({ name: 'DaySeventeen' })" variant="primary">View</b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
