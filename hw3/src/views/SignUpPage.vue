<template>
  <Header />
  <div class="empty">
  <br>
  <form>
    <div class="container">
      <br>
      <div class="row">
        <label for="email"><b>Email</b></label>
        <input class="inputText" type="text" placeholder="Email" name="email" required>
      </div>
      <div class="row">
        <label for="psw"><b>Password</b></label>
        <input class="inputText" type="password" placeholder="Password" name="psw" pattern="^[A-Z](?=.*\d)(?=.*[(.{2}[a-z])(?=.*[A-Z])(?=.*_).{8,14}$" 
        title="must be at least 8 chars and less than 15 chars. 
        Includes at least one uppercase alphabet character. 
        Includes at least two lowercase alphabet characters. 
        Includes at least one numeric value. 
        It should start with an uppercase alphabet. 
        It should include the character “_”" required>
      </div>
      <button type="submit" class="signupbtn">Sign Up</button>
      <br>
    </div>
  </form>
  <br>
  </div>
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'SignUpPage',
  components: {
    Header,
    Footer
  }
}
</script>

<style>



.empty{
  height: 70vh;
}

.container{
    background-color: #a3d3c3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: 0;
    width: 33%;
    min-width: min-content;
    min-height: min-content;
    height: 40vh;
    position: sticky;
    left: 33%;
    /*border-radius: 5px; */
    border-color: #8cd49e;
    border-width: 5px;
    border-style: solid;
}

.row{
  display: flex;
  flex-direction: row;
  padding: auto;
}

.inputText{
  background-color: lightcyan;
  border-radius: 10px;
  border: none;
}

.signupbtn{
  background-color: aqua;
  border-color: aqua;
  border-radius: 10px;
}

</style>