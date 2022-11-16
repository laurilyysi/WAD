<template>
    <nav>
       <router-link to="/">Home</router-link>
       <router-link to="/about">Sign Up</router-link>
        <div class="dropdown">
            <button onclick="toggle()" class="dropbtn">
                <a class="userPicture"><img src="https://pbs.twimg.com/profile_images/603318855553810432/CXetbed2_400x400.jpg" width="50" alt="user picture"></a>
            </button>
            <div id="myDropdown" class="dropdown-content">
              <a href="#">SpongeBob SquarePants</a>
              <a href="#">bob.pants@ut.ee</a>
              <a class="logout-button" href="login.html">logout</a>
            </div>
          </div> 
    </nav>
</template>

<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>