<template>
  <Header />
  <div class="layout">
    <div class="empty">
      <div class="container">
        <h2>Log in</h2>
        <label for="email">
          <b>Email</b>
          <input type="email" class="inputText" name="email" placeholder="Email" required v-model="email"></label>
        <label for="password"><b>Password</b>
          <input type="password" class="inputText" name="password" placeholder="Password" required
            v-model="password"></label>
        <div class="buttons">
          <button @click="LogIn" class="btn">LogIn</button>
          <p>or</p>
          <button @click='this.$router.push("/signup")' class="btn">Signup</button>
        </div>
      </div>
    </div>
    <div class="reWriteFooterPos">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
  name: "LogIn",
  components: {
    Header,
    Footer,
  },
  data: function () {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    LogIn() {
      var data = {
        email: this.email,
        password: this.password
      };

      fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.hasOwnProperty("error")) {
            alert(data.error);
          }
          console.log(data);
          this.$router.push("/");
        })
        .catch((e) => {
          console.log(e);
          console.log("error");
        });

    },
  }
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
  margin: 5%;
  padding: 5%;
  position: sticky;
  border-color: #8cd49e;
  border-width: 5px;
  border-style: solid;
}

.row {
  display: flex;
  flex-direction: row;
  padding: auto;
}

.inputText {
  background-color: lightcyan;
  border-radius: 10px;
  border: none;
}

.btn {
  font-size: .99em;
  background-color: lightcoral;
  padding: 10px;
  border-radius: 10px;
}

.btn:hover {
  background-color: #f7e948;
  color: #092747;
}

.buttons {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
</style>