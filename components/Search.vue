<template>
  <div class="mb-12">
    <input
      v-model="searchTerm"
      class="w-full h-12 bg-white border border-gray-200 rounded-3xl px-9 outline-none text-sm"
      placeholder="Pesquise por nome ou código"
      @input="onSearch"
    >
  </div>
</template>

<script setup>
const emit = defineEmits(['search']);
const searchTerm = ref('')

const onSearch = () => {
  emit('search', searchTerm.value)
}
</script>