<template>
  <UiGroupType>
    <UiType
      v-for="type in types"
      :key="type"
      :class="`${type ?? 'normal'}`"
    >
      {{ type }}
    </UiType>
  </UiGroupType>
</template>

<script setup lang="ts">
import type { Pokemon } from '~/interfaces/pokemon';

defineProps({
  types: {
    type: Object as PropType<Pokemon['types']>,
    required: true
  }
})
</script>