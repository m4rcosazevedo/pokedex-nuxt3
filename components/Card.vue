<template>
  <NuxtLink :to="`/${pokemon.id}`">
    <div class="bg-white rounded-lg shadow py-5 px-3 flex flex-col justify-between items-center">
      <div>
        <img
          :src="pokemon.image"
          :alt="pokemon.name"
        >

        <div class="text-center mb-4">
          <UiTitle
            class="mb-2"
            variant="h3"
          >
            {{ pokemon.name }}
          </UiTitle>
          <p class="text-xs font-bold text-gray-600">
            Cód: {{ pokemon.id }}
          </p>
        </div>
      </div>

      <Types :types="pokemon.types" />
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