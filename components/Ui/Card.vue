<template>
  <div
    class="bg-white rounded-lg shadow-lg py-5 px-3 flex flex-col justify-between items-center"
    :class="spaceClasses"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    space: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    spaceClasses() {
      return this.space ? 'mb-8' : ''
    }
  }
}
</script>
