<template>
  <div>
    <label v-if="label">{{label}}</label>
    <input :value="value"  v-bind="$attrs" :class="inputClass" @input="updateValue" >
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
    inputClass: {
      type: [String, Object, Array],
      default: '',
    },
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
