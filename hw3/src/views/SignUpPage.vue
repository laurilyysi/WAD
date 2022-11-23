<template>
  <Header />
  <br>
  <div class="layout">
  <div class="empty">
  <form action="/">
    <div class="container">
      <br>
        <label for="email">
          <b>Email</b>
          <input class="inputText" type="email" placeholder="Email" name="email" required>
      </label>
        <label for="psw">
          <b>Password</b>
          <input class="inputText" type="password" placeholder="Password" name="psw" pattern="^[A-Z](?=.*\d)(?=.*[(.{2}[a-z])(?=.*_).{8,14}$" 
          title="At least 8 chars and less than 15 chars. 
          At least one uppercase alphabet character. 
          At least two lowercase alphabet characters. 
          At least one numeric value. 
          It should start with an uppercase alphabet. 
          It should include the character “_”" required>
      </label>
      <button type="submit" class="signupbtn">Sign Up</button>
      <br>
    </div>
  </form>
  <br>
  </div>
  <div class="reWriteFooterPos">
  <Footer />
  </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'SignUpPage',
  components: {
    Header,
    Footer
  },
}
</script>

<style>

label {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  text-align: right;
  margin-bottom: 10px;
}

input {
  margin-left: 10px;
}

.reWriteFooterPos{
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
}

.layout{
  display: flex;
  flex-direction: column;
}

.empty{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container{
    background-color: #a3d3c3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: 0;
    min-width: min-content;
    min-height: min-content;
    height: 40vh;
    width: 50vh;
    position: sticky;
    left: 33%;
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
  background-color: #f7e948;
  border-color: #f7e948;
  border-radius: 10px;
}

.signupbtn:hover {
  background-color: #ce97ab;
  border-color: #ce97ab;
}

</style>