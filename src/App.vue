<template>
  <div class="app">
    <Container>
      <Header />
      <Search />
      <main class="main">
        <router-view />
      </main>
    </Container>
  </div>
</template>

<script>
import Container from './components/Container'
import Header from './components/Header'
import Search from './components/Search'

export default {
  name: 'App',
  components: {
    Container,
    Header,
    Search
  }
}
</script>

<style lang="scss"></style>
