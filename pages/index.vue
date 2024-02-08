<template>
  <div>
    <Search @search="search" />

    <p
      v-if="pokemons.filter((pokemon: Pokemon) => pokemon.name.includes(searching)).length === 0"
      class="text-center"
    >
      Nenhum Pokémon encontrado
    </p>

    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-20"
    >
      <Card
        v-for="pokemon in pokemons.filter((pokemon: Pokemon) => pokemon.name.includes(searching) || pokemon.id.toString() === searching)"
        :key="pokemon.id"
        :pokemon="pokemon"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Pokemon } from '~/interfaces/pokemon';

const loading = ref(true)
const { fetchPokemons, pokemons } = usePokemons()

await fetchPokemons()
loading.value = false

const handleScroll = (event: Event ) => {
  if (
    !loading.value &&
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight
  ) {
    event.preventDefault();
    loading.value = true
    fetchPokemons().then(() => {
      loading.value = false
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

const searching = ref('')

const search = (searchTerm: string) => {
  searching.value = searchTerm
}

</script>
