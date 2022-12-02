<template>
  <Header />

  <div class="contentBox">
    <div class="flex-container">
      <h2>Add post</h2>
      <div>
        <form action="/action_page.php">
          <p>
            Body
            <textarea id="postBody" name="postBody" rows="7" cols="25"></textarea>
          </p>
        </form>
      </div>
      <div>
        <p>
          Select File <button class="button2" type="button">Choose File</button>
        </p>
      </div>
      <div>
        <a href="index.html">
          <button class="button" type="button" onclick="">Create post</button>
        </a>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "AddPost",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
.contentBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.flex-container {
  display: flex;
  background-color: #a3d3c3;
  border: 5px solid #8cd49e;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 200px;
  padding: 20px;
}
.button {
  background-color: #ff808b;
  color: white;
  border: 2px solid #ffd389;
}

.button2 {
  background-color: #ffd389;
  color: white;
  border: 2px solid #ff808b;
}

#postBody {
  color: lightgrey;
}
</style>