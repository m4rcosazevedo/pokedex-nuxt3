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
      <UiCard space>
        <img
          :src="pokemon.image"
          :alt="pokemon.name"
          class="h-28 mb-2"
        >
        <UiTitle class="mb-8">
          {{ pokemon.name }}
        </UiTitle>

        <Types :types="pokemon.types" />
      </UiCard>

      <UiCard>
        <UiTitle
          class="mb-4"
          variant="h2"
        >
          Habilidades
        </UiTitle>

        <Abilities :abilities="pokemon.abilities" />
      </UiCard>
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
    types: data.types.map((type) => type.type.name),
    abilities: data.abilities.map((ability) => ability.ability.name)
  })
})

</script>
