<template>
  <b-form-checkbox v-model="checked" :class="inputClass" :name="checkName" switch v-on="$listeners" >
    <slot />
  </b-form-checkbox>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    checkName: {
      type: String,
      default: '',
    },
    inputClass: {
      type: [String, Object, Array],
      default: '',
    },
    checkedProp: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      checked: this.checkedProp,
    };
  },
  methods: {
    updateValue(event) {
      this.checked = event;
      this.$emit('checked', this.checked);
    },
  },
};
</script>
