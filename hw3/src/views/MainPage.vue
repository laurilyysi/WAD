<template>
  <Header />
  <div class="flexBox">
    <aside class="leftPanel"></aside>
    <main>
    <div>
      <Post v-for="post in data" :key="post.id" :post="post"></Post>
      </div>
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
  props: ["postList"],
  methods: {
    Reset: function () {
      this.$store.dispatch("Reset")
    },
  },
  data() {
      return {
        data: 
          this.$store.state.postList
      };
    },
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