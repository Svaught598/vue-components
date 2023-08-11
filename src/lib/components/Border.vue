<script setup lang="ts">
const props = defineProps({
  show: { type: Boolean, optional: false },
  title: { type: String, optional: true }
})
</script>

<template>
  <template v-if="props.show">
    <div class="gh-border m-5 p-1 border-2 border-primary-700 border-primary rounded-lg bg-gradient-to-r from-primary-500 to-primary-300">

      <div v-if="props.title" class="text-xs">
        {{ props.title }}

        <div class="w-full bg-primary-900" style="height: 1px;"></div>
        <div class="w-full bg-primary-600" style="height: 1px;"></div>
      </div>

      <slot></slot>
    </div>
  </template>
  <template v-else>
    <slot></slot>
  </template>
</template>