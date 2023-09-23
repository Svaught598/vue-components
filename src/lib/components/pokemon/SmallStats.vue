<script setup lang="ts">
import { IPokemonInParty, MapperClient } from '@gamehook-io/bindings/GB/PokemonCrystal';
import { PropType, computed } from 'vue';
import { getPokemonStats } from '../../../util/pokemon';

const props = defineProps({
  mapper: { type: Object as PropType<MapperClient>, required: true },
  pokemon: { type: Object as PropType<IPokemonInParty>, required: true },
});

const stats = computed(() => getPokemonStats(props.mapper, props.pokemon));
</script>

<template>
  <div class="flex-1 flex flex-col gap-[1px] font-secondary text-sm text-center">
    <div
      class="flex-grow px-2 drop-shadow-2xl bg-gradient-to-t from-stats-hp-dark to-stats-hp-light border rounded border-black">
      {{ stats.maxHp }}
    </div>

    <div
      class="flex-grow px-2 drop-shadow-2xl bg-gradient-to-t from-stats-spcAtk-dark to-stats-spcAtk-light border rounded border-black">
      {{ stats.specialAttack }}
    </div>

    <div
      class="flex-grow px-2 drop-shadow-2xl bg-gradient-to-t from-stats-atk-dark to-stats-atk-light border rounded border-black">
      {{ stats.attack }}
    </div>

    <div
      class="flex-grow px-2 drop-shadow-2xl bg-gradient-to-t from-stats-spcDef-dark to-stats-spcDef-light border rounded border-black">
      {{ stats.specialDefense }}
    </div>

    <div
      class="flex-grow px-2 drop-shadow-2xl bg-gradient-to-t from-stats-def-dark to-stats-def-light border rounded border-black">
      {{ stats.defense }}
    </div>

    <div
      class="flex-grow px-2 drop-shadow-2xl bg-gradient-to-t from-stats-spd-dark to-stats-spd-light border rounded border-black">
      {{ stats.speed }}
    </div>
</div></template>
