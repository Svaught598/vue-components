<script setup lang="ts">
import { IPokemonInParty } from '@gamehook-io/bindings/GB/PokemonCrystal';
import { PropType, computed } from 'vue';
import Border from '../../components/Border.vue'

const props = defineProps({
  pokemon: { type: Object as PropType<IPokemonInParty>, required: true },
});

const item = computed(() => props.pokemon.heldItem.value);
const styles = computed(() => !item.value ? "opacity-0" : "")
</script>

<template>
  <!-- 
    component is hidden with opacity if no item 
    (still present in DOM, and blocks other content from filling empty space) 
  -->
  <div :class="styles" class="transition-all duration-1000 leading-none">
    <div class="relative h-full w-full flex flex-row items-center font-secondary text-xl">
      <Border :show="true" class="absolute w-full h-full"></Border>
      <Border class="px-1 flex-1 opacity-50 z-10">Item:</Border>
      <div class="flex-4 text-center z-10 px-5">{{ item ?? '-' }}</div>
    </div>
  </div>
</template>
