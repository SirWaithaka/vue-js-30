<template>
  <div>
    <h1 class="h1 my-5 text-center">Course from Javascript in 30 days</h1>
    <div class="container">
      <div class="row">
        <b-card  class="col col-md-6" bg-variant="dark" text-variant="white" title="Javascript Drum Kit">
          <p class="card-text">
            Build a drum kit and play it using keyboard keys
          </p>
          <b-button :click="navigateTo({ name: 'DrumMachine' })" href="#" variant="primary">View</b-button>
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
