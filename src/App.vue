<template>
  <div class="container">
    <h1>THE GIG CALCULATOR</h1>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/create" class="nav-link">Calculator</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/gigs" class="nav-link">Saved Gigs</router-link>
        </li>
      </ul>
    </nav><br />
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>


<script>
export default {
  name: 'app'
}
</script>
<style>
</style>
