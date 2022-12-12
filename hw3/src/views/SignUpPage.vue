<template>
  <Header />
  <div class="layout">
    <div class="empty">
      <div class="container">
        <h2>Sign up</h2>
        <label for="email">
          <b>Email</b>
          <input class="inputText" type="email" placeholder="Email" name="email" required v-model="email" />
        </label>
        <label for="password">
          <b>Password</b>
          <input class="inputText" type="password" placeholder="Password" name="password"
            pattern="^[A-Z](?=.*\d)(?=.*[(.{2}[a-z])(?=.*_).{8,14}$" title="At least 8 chars and less than 15 chars. 
          At least one uppercase alphabet character. 
          At least two lowercase alphabet characters. 
          At least one numeric value. 
          It should start with an uppercase alphabet. 
          It should include the character “_”" required v-model="password" />
        </label>
        <button type="submit" class="signupbtn" @click="SignUp()">
          Sign Up
        </button>
      </div>
    </div>
    <div class="reWriteFooterPos">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "SignUpPage",

  data: function () {
    return {
      email: "",
      password: "",
    };
  },

  components: {
    Header,
    Footer,
  },

  methods: {
    SignUp() {
      var data = {
        email: this.email,
        password: this.password,
      };

      fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // cookies
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.$router.push("/");
        })
        .catch((e) => {
          console.log(e);
          console.log("error");
        });
    },
  },
};
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

.reWriteFooterPos {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
}

.layout {
  display: flex;
  flex-direction: column;
}

.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  background-color: #a3d3c3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 0;
  min-width: min-content;
  min-height: min-content;
  position: sticky;
  padding: 5%;
  border-color: #8cd49e;
  border-width: 5px;
  border-style: solid;
}

.inputText {
  background-color: lightcyan;
  border-radius: 10px;
  border: none;
}

.signupbtn {
  font-size: .99em;
  background-color: lightcoral;
  padding: 10px;
  border-radius: 10px;
}

.signupbtn:hover {
  background-color: #f7e948;
  color: #092747;
}
</style>