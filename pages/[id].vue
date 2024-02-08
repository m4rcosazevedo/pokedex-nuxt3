<template>
  <div>
    <Loading v-if="pending" />

    <div
      v-if="error"
      class="text-center"
    >
      <p>Erro ao carregar Pokémon</p>
      <p>{{ error.message }}</p>
    </div>

    <div v-if="pokemon">
      <div class="bg-white rounded-lg shadow-lg py-5 px-3 flex flex-col justify-between items-center mb-8">
        <img
          :src="pokemon.image"
          :alt="pokemon.name"
          class="h-28 mb-2"
        >
        <h1 class="font-bold text-sm capitalize mb-8">
          {{ pokemon.name }}
        </h1>

        <ul class="flex justify-between gap-1 items-center">
          <li 
            v-for="type in pokemon.type"
            :key="type"
            class="min-w-16 text-white px-2 h-4 text-[10px] flex items-center justify-center rounded-full uppercase"
            :class="`${type ?? 'normal'}`"
          >
            {{ type }}
          </li>
        </ul>
      </div>
      
      <div class="bg-white rounded-lg shadow-lg py-5 px-3 flex flex-col justify-between items-center">
        <h1 class="text-sm font-bold capitalize mb-4">
          Habilidades
        </h1>

        <ul class="text-left w-full">
          <li 
            v-for="ability in pokemon.abilities"
            :key="ability"
            class="text-xs text-gray-600 h-11 border-t border-gray-200 flex items-center px-2"
          >
            {{ ability }}
          </li>
        </ul>
      </div>
    </div>

    <NuxtLink
      to="/"
      class="text-[#00A3FF] text-sm font-bold my-12 h-10 flex items-center justify-center
      hover:bg-[#00A3FF] hover:text-white rounded-lg transition-colors duration-300 ease-in-out"
    >
      Voltar
    </NuxtLink>
  </div>
</template>

<script setup>
const route = useRoute()
const { id } = route.params
const config = useRuntimeConfig()

const { data: pokemon, pending, error } = useFetch(`${config.public.apiUrl}/pokemon/${id}`, {
  transform: (data) => ({
    id: data.id,
    name: data.name,
    image: data.sprites.other['official-artwork'].front_default || data.sprites.front_default,
    type: data.types.map((type) => type.type.name),
    abilities: data.abilities.map((ability) => ability.ability.name)
  })
})

</script>
