<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  
  <div id="navbarBasicExample" class="navbar-menu">
    
    <div class="navbar-start" v-if="loggedIn">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Documentation
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          {{ user.name }}
        </a>

        <div class="navbar-dropdown">
          
          <a class="navbar-item">
            {{ user.email }}
          </a>
          
          <hr class="navbar-divider">

          <a class="navbar-item" @click="logout">
            logout
          </a>
        
        </div>
      </div>
    </div>

    <div class="navbar-end" v-else>
      <div class="navbar-item">
        <div class="buttons">
          
          <nuxt-link :to="{name: 'auth-register'}"  class="button is-primary">
            <strong>Sign up</strong>
          </nuxt-link>

          <nuxt-link :to="{name: 'auth-login'}" class="button is-light">
            Log in
          </nuxt-link>

        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout();  
    }
  },
}
</script>
