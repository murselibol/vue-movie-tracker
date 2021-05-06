<template>
  <component :is="tag" :class="size">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'Text',
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    size: {
      type: String,
      default: 'normal', // xxlarge:24 xlarge:20, large:18,  normal: 16, small: 14 , xsmall: 12, xxsmall: 10
      validator: function(value) {
        return ['xxlarge', 'xlarge', 'large', 'normal', 'small', 'xsmall', 'xxsmall'].indexOf(value) !== -1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.xxlarge {
  font-size: 1.5rem;
}
.xlarge {
  font-size: 1.25rem;
}
.large {
  font-size: 1.125rem;
}
/* .normal {
} */
.small {
  font-size: 0.875rem;
}
.xsmall {
  font-size: 0.75rem;
}
.xxsmall {
  font-size: 0.625rem;
}
</style>
