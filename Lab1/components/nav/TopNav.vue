<template>
  <div class="navbar">
    <div class="logo">Navbar</div>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/gallery">Gallery</NuxtLink>
    <NuxtLink to="/nasa">Nasa</NuxtLink>
  </div>
</template>

<script>
export default {
  name: "TopNav",
};
</script>

<style scoped>
.navbar {
  margin: 0;
  padding: 0.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 16px;
  font-family: Lato, sans-serif;
  background: #333;
}
.logo {
  margin: 0;
  padding: 0.5rem 0.25rem;
  display: flex;
  font-size: 24px;
  font-weight: bold;
  color: orange;
}

a {
  margin: 0;
  padding: 0.5rem 0.25rem;
  display: flex;
  text-decoration: none;
  font-size: 1.5rem;
  color: #ddd;
}

a:hover {
  color: #fff;
  text-decoration: underline;
}
</style>
