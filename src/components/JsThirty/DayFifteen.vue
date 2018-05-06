<template>
  <div class="bg-dark wrapper">
    <div class="dynamic-card mt-5">
      <h1 class="h3 py-2 text-center">LOCAL TAPAS</h1>
      <ul class="plates p-0 m-0" v-on:click="toggleDone">
        <li v-for="(plate, index) in $store.state.items" :key="plate.id">
          <input v-if="plate.done" type="checkbox" :data-index="index" :id="'item' + index" checked/>
          <input v-else type="checkbox" :data-index="index" :id="'item' + index" />
          <label :for="'item' + index">{{ plate.text }}</label>
        </li>
      </ul>
      <b-form v-on:submit="addItem" class="form-tapas add-items">
        <b-input-group size="sm">
          <b-form-input type="text" name="item" placeholder="Item Name"></b-form-input>
          <b-input-group-append>
            <b-btn type="submit" variant="outline-primary">+ Add Item</b-btn>
          </b-input-group-append>
        </b-input-group>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addItem (e) {
      e.preventDefault()
      const text = (e.target.querySelector('[name="item"]')).value
      // prevent empty imputs
      if (text === '') return

      const item = {
        text,
        done: false
      }
      this.$store.dispatch('addItem', item)
      localStorage.setItem('items', JSON.stringify(this.$store.state.items))
      // re-initialize input field to empty string
      e.target.querySelector('[name="item"]').value = ''
    },
    toggleDone (e) {
      if (!e.target.matches('input')) return
      const el = e.target
      this.$store.dispatch('changeItemState', el.dataset.index)
      localStorage.setItem('items', JSON.stringify(this.$store.state.items))
    }
  },
  beforeCreate () {
    const lsItems = localStorage.getItem('items')
    if (lsItems !== null) {
      this.$store.dispatch('initItems', JSON.parse(lsItems))
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
.dynamic-card {
  background: rgba(255,255,255,0.95);
  margin: auto;
  max-width: 330px;
  padding: 15px;
  width: 100%;
}
.plates li {
  border-bottom: 1px solid rgba(0,0,0,0.2);
  display: flex;
  font-weight: 100;
  padding: 10px 0;
}
.plates label {
  cursor: pointer;
  flex: 1;
}
.plates input {
  display: none;
}
.plates input + label:before {
  content: '⬜️';
  margin-right: 10px;
}
.plates input:checked + label:before {
  content: '🌮';
}
.add-items {
  margin-top: 20px;
}
.add-items input {
  padding:10px;
  outline:0;
  border:1px solid rgba(0,0,0,0.1);
}
</style>
