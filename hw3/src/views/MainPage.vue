<template>
  <Header />
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld,Header
  }
}

</script>
<style>
* {
   font-family: 'Segoe UI';
}

body {
   margin: 0px;
   background-color: lightcyan;
}

main {
   min-height: 82.3vh;
   background-color: lightcyan;
}

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

.userPicture{
   padding: 10px 10px;
}

.border {
   border: 5px solid #8cd49e;
   border-radius: 0px;
}

footer {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
   background-color: #a3d3c3;
   font-size: .99em;
}

.dropdown{
   position: sticky;
   
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
 
.error {
   text-align: center;
   font-size: 18px;
   font-weight: bold;
   color: maroon;
   background-color: pink;
   border: 5px solid maroon;
   border-radius: 0px;
   transition: 0.1s;
}

.error:hover {
   background-color: lightcoral;
}
::selection{
   color: yellow;
   background-color: lightcoral;
}
</style>