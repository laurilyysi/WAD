<template>
  <router-view/>
</template>

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

::selection{
   color: yellow;
   background-color: lightcoral;
}
</style>
