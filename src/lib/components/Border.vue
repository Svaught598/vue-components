<script setup lang="ts">
const props = defineProps({
  show: { type: Boolean, optional: false },
  title: { type: String, optional: true }
})
</script>

<template>
  <template v-if="props.show">
    <div style="border: solid 2px red; padding: 15px;">

      <div v-if="props.title">{{ props.title }}</div>

      <slot></slot>
    </div>
  </template>
  <template v-else>
    <slot></slot>
  </template>
</template>