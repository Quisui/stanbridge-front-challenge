<template>
    <button :class="buttonClass" v-bind="$attrs" v-on="$listeners">
      <slot />
    </button>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    buttonClass: {
      type: String,
      default:'form-control btn-success'
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
