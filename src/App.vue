<template>
  <div class="container">
    <h1 id="top-heading" class="text-light text-center">THE GIG CALCULATOR</h1>
    <nav id="main-nav" class="navbar navbar-expand-sm navbar-light text" style="background-color: #2F4F4F;">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link text-light">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/create" class="nav-link text-light">Calculator</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/gigs" class="nav-link text-light">Saved Gigs</router-link>
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
