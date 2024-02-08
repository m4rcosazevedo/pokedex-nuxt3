<template>
  <NuxtLink :to="`/${pokemon.id}`">
    <div class="bg-white rounded-lg shadow py-5 px-3 flex flex-col justify-between items-center">
      <div>
        <img
          :src="pokemon.image"
          :alt="pokemon.name"
        >

        <div class="text-center mb-4">
          <h3 class="font-bold text-sm mb-2 capitalize">
            {{ pokemon.name }}
          </h3>
          <p class="text-xs font-bold text-gray-600">
            Cód: {{ pokemon.id }}
          </p>
        </div>
      </div>
      <ul class="flex justify-between gap-1 items-center">
        <li 
          v-for="type in pokemon.types"
          :key="type"
          class="min-w-16 text-white px-2 h-4 text-[10px] flex items-center justify-center rounded-full uppercase"
          :class="`${type ?? 'normal'}`"
        >
          {{ type }}
        </li>
      </ul>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Pokemon } from '~/interfaces/pokemon';

defineProps({
  pokemon: {
    type: Object as PropType<Pokemon>,
    required: true
  }
})
</script>