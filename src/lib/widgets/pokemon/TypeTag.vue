<script setup lang="ts">
defineProps({
  type: { type: String, required: true },
});
</script>

<template>
  <img width="112" :src="`pokemon/type-icons/${type.toLocaleLowerCase()}.png`" />
</template>
