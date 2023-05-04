<template>
  <div>
    <label v-if="label">{{label}}</label>
    <select :value="value"  v-bind="$attrs" @input="updateValue" >
      <option
        v-for="option in options"
        :key="option">{{option}}
        :selected="option===value"
      ></option>
    </select>
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
    options: {
      type: Array,
      required: true,
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
