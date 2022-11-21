<template>
    <header class="header">
        <ul class="nav">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/signup">Sign Up</router-link></li>
        </ul>
        <div class="dropdown">
            <button class="dropbtn" @click="toggle">
                <a class="userPicture"><img src="https://pbs.twimg.com/profile_images/603318855553810432/CXetbed2_400x400.jpg" width="50" alt="user picture"></a>
            </button>
            <div id="myDropdown" class="dropdown-content">
              <a href="#">SpongeBob SquarePants</a>
              <a href="#">bob.pants@ut.ee</a>
              <a class="logout-button" href="login.html">logout</a>
            </div>
          </div> 
    </header>
</template>

<script>
export default {
   name: "Header",
   props: {},
   methods: {
      toggle() {
         document.getElementById("myDropdown").classList.toggle("show");
      }
   }
}
</script>
<style>
.header > ul {
   list-style: none;
}

.header {
    background-color: #a3d3c3;
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
}
.nav a {
   padding: 10px 10px;
   text-align: center;
   display: flex;
   color: #000000;
   font-size: .99em;
   text-decoration: none;
}
.nav{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
}

.nav a:hover {
   background-color: #f7e948;
   color: #092747;
}

.dropdown{
   position: sticky;
   right: 1;
}

.dropbtn {
   padding: 10px;
   font-size: 10px;
   border: none;
   cursor: pointer;
   background-color: #8cd49e;
}

.dropdown-content {
   border-radius: 10px;
   display: none;
   position: absolute;
   background-color: #f7e948;
   overflow: visible;
   box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
   z-index: 1;
   right: 1%;
}
 
.dropdown-content a {
   border-radius: 10px;
   color: black;
   padding: 12px 16px;
   text-decoration: none;
   display: block;
}

.logout-button {
   padding: 12px 16px;
}

.logout-button:hover {
   background-color: #8cd49e;
   color: #f7e948;
}

.show {display: block;}

</style>