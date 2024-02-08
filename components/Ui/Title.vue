<template>
  <component
    :is="variant"
    class="font-bold text-sm capitalize"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: 'h1',
      validator: (value) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'].includes(value)
    }
  }
}
</script>
