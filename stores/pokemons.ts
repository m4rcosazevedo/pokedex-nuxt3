import type { PokemonList } from '~/interfaces/pokemon'

export const usePokemons = defineStore({
  id: 'pokemons',
  state: () => ({
    pokemons: [] as PokemonList,
    loading: false,
    offset: 0,
    limit: 24
  }),
  actions: {
    async fetchPokemons() {
      const config = useRuntimeConfig()

      this.$state.loading = true
      const data = await ((await fetch(`${config.public.apiUrl}/pokemon?offset=${this.$state.offset}&limit=${this.$state.limit}`)).json())

      const pokemonsData = data.results

      const promises = pokemonsData.map(async (pokemon: any) => {
        return (await fetch(pokemon.url)).json()
      })

      const resolved = await Promise.all(promises)
      this.$state.loading = false
      this.$state.offset += this.$state.limit

      this.$state.pokemons.push(...resolved.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.front_default,
        types: pokemon.types.map((type: any) => type.type.name)
      })) as PokemonList)
    },
    async fetchPokemon(id: number) {
      const config = useRuntimeConfig()
      this.$state.loading = true
      const data = await (await fetch(`${config.public.apiUrl}/pokemon/${id}`)).json()
      this.$state.loading = false
      return {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        types: data.types.map((type: any) => type.type.name)
      }
    
    }
  },
  getters: {
    getPokemons (state: any) {
      return state.pokemons
    },
    isLoading (state: any) {
      return state.loading
    }
  }
})