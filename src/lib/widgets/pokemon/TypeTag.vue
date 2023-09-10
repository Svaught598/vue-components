<script setup lang="ts">
defineProps({
  type: { type: String, required: true },
});
</script>

<template>
  <img width="112" :src="`../../../../data/pokemon-gen-2/images/type-icons/${type.toLocaleLowerCase()}.png`" />
</template>
