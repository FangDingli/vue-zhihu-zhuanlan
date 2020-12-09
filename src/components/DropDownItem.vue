<template>
  <a class="navbar-item">
    {{ items }}
  </a>
</template>

<script>
export default {
  name: 'DropDownItem',
  props: {
    items: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
