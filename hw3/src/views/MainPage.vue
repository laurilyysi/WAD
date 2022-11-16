<template>
  <Header />
      <div class="flexBox">
        <aside class="leftPanel">
        </aside>
        <main>
          <!-- <img src="../assets/spongebob.jpg"> -->
            <Post />
        </main>
        <aside class="rightPanel">
        </aside>
    </div>
  <Footer />
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Post from '@/components/Post.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Header,
    Footer,
    Post
  }
}

</script>