<template>
  <Header />
  <div class="flexBox">
    <aside class="leftPanel"></aside>
    <main>
      <Post />
      <button v-on:click="Reset" class="reset">Reset likes</button>
    </main>
    <aside class="rightPanel"></aside>
  </div>
  <Footer />
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Post from "@/components/Post.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    Header,
    Footer,
    Post,
  },
  methods: {
    Reset: function () {
      this.$store.dispatch("Reset")
    }
  }
};

</script>

<style>

.reset {
  font-size: 20px;
  background-color: lightcoral;
  padding: 10px;
  border-radius: 10px;
}

main {
  display: flex;
  align-items: center;
  flex-direction: column;
}

</style>