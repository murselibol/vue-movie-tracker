<template>
  <header class="header">
    <router-link to="/" class="logo">mooviex</router-link>

    <nav class="navigation">
      <router-link to="/" class="nav-item">
        <IconHome class="icon-home" />
        <span class="nav-item-text">Home</span>
      </router-link>
      <router-link to="/" class="nav-item">
        <IconNetflix class="icon-netflix" />
        <span class="nav-item-text">Netflix</span>
      </router-link>
      <router-link to="/" class="nav-item">
        <IconExxen class="icon-exxen" />
        <span class="nav-item-text">Exxen</span>
      </router-link>
      <router-link to="/" class="nav-item">
        <IconBlueTV class="icon-bluetv" />
        <span class="nav-item-text">BluTV</span>
      </router-link>
      <router-link to="/" class="nav-item">
        <IconGenres class="icon-genres" />
        <span class="nav-item-text">Genres</span>
      </router-link>
    </nav>

    <div class="header-right">
      <router-link to="/" class="login">
        <IconLogin class="icon-loogin" />
        <span class="login-text">Login</span>
      </router-link>
      <router-link to="/" class="register">
        <button type="button" class="button-register">Register</button>
      </router-link>
    </div>
  </header>
</template>

<script>
import IconHome from '../assets/icons/home.svg'
import IconNetflix from '../assets/icons/netflix.svg'
import IconExxen from '../assets/icons/exxen.svg'
import IconBlueTV from '../assets/icons/blutv.svg'
import IconGenres from '../assets/icons/genres.svg'
import IconLogin from '../assets/icons/user.svg'

export default {
  name: 'Header',
  components: {
    IconHome,
    IconNetflix,
    IconExxen,
    IconBlueTV,
    IconGenres,
    IconLogin
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;

  svg {
    margin-right: 10px;
  }
  .icon-exxen {
    width: 50px;
    height: 25px;
  }
  .icon-bluetv {
    width: 45px;
    height: 25px;
  }
  .icon-netflix {
    width: 20px;
    height: 25px;
  }

  .nav-item,
  .login,
  .button-register {
    font-size: 1.125rem;
    transition: 0.15s;
    &:hover {
      color: var(--color-spring-green);
      transition: 0.15s;
    }
  }

  .logo {
    font-size: 2rem;
    font-weight: 500;
  }

  .navigation {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex: 2;

    .nav-item {
      display: flex;
      align-items: center;
      justify-content: center;

      &:not(:last-child) {
        margin-right: 40px;
      }

      .nav-item-text {
        display: inline-block;
        padding-top: 5px;
        padding-bottom: 5px;
      }
    }
  }

  .header-right {
    .login {
      margin-right: 20px;
    }

    .button-register {
      border: 1px solid white;
      padding: 8px 16px;
      border-radius: 99px;
      transition: 0.15s;

      &:hover {
        border-color: var(--color-spring-green);
        transition: 0.15s;
      }
    }
  }
}
</style>
