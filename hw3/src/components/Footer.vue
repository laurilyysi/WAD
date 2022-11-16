<template>
  <footer>
    <p>University of Tartu</p>
    <p>WAD 2022</p>
  </footer>
</template>

<script>
export default {

};

function toggle() {
  document.getElementById("myDropdown").classList.toggle("show");
}

</script>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #a3d3c3;
  font-size: 0.99em;
}
</style>