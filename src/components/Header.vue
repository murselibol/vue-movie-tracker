<template>
  <header class="header">
    <router-link to="/" class="logo">moovue</router-link>
    <button type="button" @click="displayMenu()" class="header-switch">
      <IconMenu class="icon-menu" />
    </button>

    <nav class="navigation" :class="{ 'menu-show': isMenuActive }">
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

      <div class="nav-item dropdown">
        <IconGenres class="icon-genres" />
        <button class="nav-item-text dropbtn ">Genres</button>
        <IconDownArrow class="icon-down-arrow" />
        <div class="dropdown-content" @click="displayDropdownMenu()">
          <router-link to="/movies/adventure">Adventure</router-link>
          <router-link to="/movies/animation">Animation</router-link>
          <router-link to="/movies/comedy">Comedy</router-link>
          <router-link to="/movies/horror">Horror</router-link>
          <router-link to="/movies/romance">Romance</router-link>
        </div>
      </div>
    </nav>

    <div class="header-right" :class="{ 'menu-show': isMenuActive }">
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
import IconDownArrow from '../assets/icons/down-arrow.svg'
import IconLogin from '../assets/icons/user.svg'
import IconMenu from '../assets/icons/menu.svg'

import { eventBus } from '../main.js'

export default {
  name: 'Header',
  components: {
    IconHome,
    IconNetflix,
    IconExxen,
    IconBlueTV,
    IconGenres,
    IconDownArrow,
    IconLogin,
    IconMenu
  },
  data() {
    return {
      isMenuActive: false
    }
  },

  created() {
    eventBus.$on('menuStatus', (status) => {
      this.isMenuActive = status
      this.bodyScroll()
    })
  },

  methods: {
    closee() {
      console.log('mghod')
      this.isDropClose = false
    },

    bodyScroll() {
      if (this.isMenuActive) {
        document.body.classList.add('closeScroll')
        document.body.classList.remove('openScroll')
      } else {
        document.body.classList.add('openScroll')
        document.body.classList.remove('closeScroll')
      }
    },
    displayMenu() {
      this.isMenuActive = !this.isMenuActive
      // eventBus.$emit('menuStatus', this.isMenuActive)
      this.bodyScroll()
    },

    displayDropdownMenu() {
      this.isMenuActive = !this.isMenuActive
      document.body.classList.add('openScroll')
      document.body.classList.remove('closeScroll')
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: var(--header-height);
  padding-top: 15px;
  padding-bottom: 15px;
  position: relative;
  display: flex;
  // align-items: center;

  @include mq('--1200') {
    justify-content: space-between;
  }

  svg {
    margin-right: 10px;
    &:hover {
      cursor: pointer;
    }
  }

  .header-switch {
    height: var(--finger-size);
    width: var(--finger-size);
    margin-left: auto;

    @include mq('--1200') {
      display: none;
    }

    .icon-menu {
      margin-right: 0;
    }
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

  .icon-down-arrow {
    margin-right: 0;
    margin-left: 7px;
    width: 12px;
    height: 12px;
    position: relative;
    top: 2px;
  }

  .nav-item,
  .login,
  .button-register {
    font-size: 1.125rem;
    transition: 0.15s ease;
    &:hover {
      color: var(--color-main-green);
    }
  }

  .logo {
    font-size: 2rem;
    font-weight: 500;
  }

  .navigation {
    display: none;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: absolute;
    top: 170px;
    left: 0;
    height: 100vh;
    background-color: var(--color-black);
    z-index: 1;
    width: 100%;

    @include mq('--1200') {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      position: static;
      height: auto;
      background-color: transparent;
      padding-top: 0;
      flex: 2;
    }

    .nav-item {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      top: 100px;
      height: var(--finger-size);

      @include mq('--1200') {
        height: auto;
        position: static;
      }

      &:not(:last-child) {
        margin-right: 40px;
      }

      .nav-item-text {
        display: inline-block;
        font-size: 1.125rem;
      }
    }

    .dropdown {
      display: inline-block;
      &:hover {
        .dropbtn {
          transition: 0.15s ease;
          color: var(--color-main-green);
        }
        .dropdown-content {
          display: block;
        }
      }
    }

    .dropdown-content {
      display: block;
      position: absolute;
      min-width: 160px;
      border-radius: 4px;
      background-color: inherit;
      z-index: 1;

      @include mq('--1200') {
        background-color: var(--color-movie-card-title-bg);
        display: none;
      }
    }

    .dropdown-content a {
      color: var(--color-white);
      padding: 6px 14px;
      display: block;
      transition: 0.2s ease;
      margin-left: 18px;

      @include mq('--1200') {
        display: block;
        margin-left: 0;
      }

      &:hover {
        color: var(--color-main-green);
        background-color: var(--color-mine-shaft);
      }
    }
  }

  .header-right {
    position: absolute;
    display: none;
    align-items: center;
    top: 195px;
    z-index: 1;

    @include mq('--1200') {
      position: static;
      display: flex;
    }

    .login {
      height: var(--finger-size);
      margin-right: 20px;
      display: inline-flex;
      align-items: center;
      justify-content: center;

      @include mq('--1200') {
        height: auto;
      }
    }

    .button-register {
      border: 1px solid var(--color-white);
      padding: 8px 16px;
      border-radius: 99px;
      transition: 0.15s ease;

      &:hover {
        border-color: var(--color-main-green);
      }
    }
  }

  .menu-show {
    display: flex;
  }
}
</style>
