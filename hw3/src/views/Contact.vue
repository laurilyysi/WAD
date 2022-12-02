<template>
  <Header />

  <div class="center">
    <div class="contactbox">
      <h2>Contact Us</h2>
      <p><strong>Email:</strong> spongebob.fans@ut.ee</p>
      <p><strong>Phone:</strong> 555-5555</p>
    </div>
  </div>
  <div class="reWriteFooterPos">
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Contact",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
.center {
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-top: 150px;
}

.contactbox:hover {
    background-color: #8de8ca;
    box-shadow: 0px 0px 15px 3px #8cd49e;
}

.contactbox {
  border-color: #8cd49e;
  border-width: 5px;
  border-style: solid;
  margin: 10px;
  padding: 10px;
  width: 500px;
  background-color: #a3d3c3;
}

@media (max-width: 600px) {
  .contactbox {
    max-width: 90%;
  }
}

.reWriteFooterPos{
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
}

</style>
