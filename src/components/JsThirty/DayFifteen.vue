<template>
  <div class="bg-dark wrapper">
    <div class="dynamic-card mt-5">
      <h1 class="h3 py-2 text-center">LOCAL TAPAS</h1>
      <ul class="plates p-0 m-0">
        <li></li>
      </ul>
      <b-form class="form-tapas add-items">
        <b-input-group size="sm">
          <b-form-input placeholder="Item Name"></b-form-input>
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
