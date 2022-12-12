<template>
    <header class="header">
        <ul class="nav">
            <li><router-link to="/">Home</router-link></li>
            <li class="line"><router-link to="/contact">Contacts</router-link></li>
        </ul>
    </header>
</template>

<script>
export default {
    name: "Header",
    props: {},
    methods: {}
}
</script>
<style>
.line {
    border-left: 1px solid black;
}

ul {
    list-style: none;
    text-align: center;
    padding-left: 0;
}

.header {
    background-color: #a3d3c3;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
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

.nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.nav a:hover {
    background-color: #f7e948;
    color: #092747;
}
</style>