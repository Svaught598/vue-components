<script setup lang="ts">
defineProps({
  show: { type: Boolean, optional: true, default: true },
  title: { type: String, optional: true }
})
</script>

<template>
  <div v-show="show"
    class="p-1 border-2 border-primary-700 border-primary rounded-lg bg-gradient-to-r from-primary-500 to-primary-300">

    <div v-if="title" class="font-primary text-xs font-bold border-b border-primary-600 border-1">
      {{ title }}
    </div>

    <slot>
      <div className="h-12" />
    </slot>
  </div>
</template>
