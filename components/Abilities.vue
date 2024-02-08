<template>
  <ul class="text-left w-full">
    <li 
      v-for="ability in abilities"
      :key="ability"
      class="text-xs text-gray-600 h-11 border-t border-gray-200 flex items-center px-2"
    >
      {{ ability }}
    </li>
  </ul>
</template>


<script setup lang="ts">
import type { Pokemon } from '~/interfaces/pokemon';

defineProps({
  abilities: {
    type: Object as PropType<Pokemon['types']>,
    required: true
  }
})
</script>