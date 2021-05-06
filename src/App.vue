<template>
  <div class="app">
    <Container>
      <CustomText class="customm" tag="h1" size="xxlarge">mooviex</CustomText>
      <CustomText tag="span" size="normal">murselibol</CustomText>

      <h1>App</h1>
      <router-view />
    </Container>
  </div>
</template>

<script>
import Container from './components/Container'
import CustomText from './components/CustomText'
export default {
  name: 'App',
  components: {
    Container,
    CustomText
  }
}
</script>

<style lang="scss">
.customm {
  &:hover {
    color: var(--color-persian-green);
  }
}
</style>
