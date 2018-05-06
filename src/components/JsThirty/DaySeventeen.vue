<template>
  <div class="bg-dark wrapper">
    <ul id="bands">
      <li v-for="(band, index) in this.sortBands()" v-bind:key="index">{{ band }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bands: [
        'The Plot in You',
        'The Devil Wears Prada',
        'Pierce the Veil', 'Norma Jean',
        'The Bled', 'Say Anything',
        'The Midway State',
        'We Came as Romans',
        'Counterparts',
        'Oh, Sleeper',
        'A Skylit Drive',
        'Anywhere But Here',
        'An Old Dog'
      ]
    }
  },
  methods: {
    strip (bandName) {
      return bandName.replace('/^(a?n |the )/i', '').trim()
    },
    sortBands () {
      return this.bands.sort((a, b) => this.strip(a) > this.strip(b) ? 1 : -1)
    }
  }
}
</script>

<style scoped>
.wrapper {
  align-items: center;
  display: flex;
  height: 100%;
  position: relative;
  width: 100%;
}
#bands {
  list-style: inside square;
  font-size: 20px;
  background: white;
  width: 500px;
  margin: auto;
  padding: 0;
  box-shadow: 0 0 0 20px rgba(0, 0, 0, 0.05);
}
#bands li {
  border-bottom: 1px solid #efefef;
  padding: 20px;
}
#bands li:last-child {
  border-bottom: 0;
}
a {
  color: #ffc600;
  text-decoration: none;
}
</style>
