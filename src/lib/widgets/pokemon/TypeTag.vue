<script setup lang="ts">
import { computed } from 'vue';
import { getTypeColor } from '../../../util/pokemon';

const { type } = defineProps({
  type: { type: String, required: true },
});

const style = computed(() => `background-color: ${getTypeColor(type)}`);
</script>

<template>
  <div :style="style" class="py-1 px-5 font-primary rounded border border-black">
    {{ type }}
  </div>
</template>
