<script setup lang="ts">
const props = defineProps({
  show: { type: Boolean, optional: false },
  title: { type: String, optional: true }
})
</script>

<template>
  <template v-if="props.show">
    <div class="m-5 p-3 border-2 border-primary-700 border-primary rounded-lg bg-gradient-to-r from-primary-500 to-primary-300">

      <div v-if="props.title">{{ props.title }}</div>

      <slot></slot>
    </div>
  </template>
  <template v-else>
    <slot></slot>
  </template>
</template>