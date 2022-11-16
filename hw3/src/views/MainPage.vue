<template>
  <Header />
  <div class="flexBox">
    <aside class="leftPanel"></aside>
    <main>
      <Post />
      <button>Reset likes</button>
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
};
</script>