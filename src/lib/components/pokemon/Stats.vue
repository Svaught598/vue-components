<script setup lang="ts">
import { IPokemonInParty, MapperClient } from '@gamehook-io/bindings/GB/PokemonCrystal';
import { computed } from 'vue';
import { getPokemonStats } from '../../../util/pokemon';

const props = defineProps({
  mapper: { required: true },
});

const mapper = props.mapper as MapperClient;
const pokemon = mapper.properties.battle.trainer.team[0] as IPokemonInParty
const stats = computed(() => getPokemonStats(mapper, pokemon));
const atkBoost = computed(() => mapper.properties.player.badges.badge1.value);
const spdBoost = computed(() => mapper.properties.player.badges.badge3.value);
const defBoost = computed(() => mapper.properties.player.badges.badge6.value);
const spcAtkBoost = computed(() => mapper.properties.player.badges.badge7.value);
const spcDefBoost = computed(() => mapper.properties.player.badges.badge7.value);
</script>

<template>
  <!-- Stats Container -->
  <!-- Pretty sure this is incomplete as of now since stats can have modifiers -->
  <div class="mt-1 grid grid-cols-2 gap-1">
    <div
      class="relative drop-shadow-2xl bg-gradient-to-t from-stats-hp-dark to-stats-hp-light px-1 flex flex-row justify-between items-center border rounded border-black">
      <div class="opacity-60 font-secondary text-xl text-left">HP</div>
      <div class="font-secondary text-right text-4xl">{{ stats.maxHp }}</div>
    </div>

    <div
      class="relative drop-shadow-2xl bg-gradient-to-t from-stats-spcAtk-dark to-stats-spcAtk-light px-1 flex flex-row justify-between items-center border rounded border-black">
      <img v-if="spcAtkBoost" class="h-full p-1 opacity-30 absolute" src="pokemon/badges/badge7.png" />
      <div class="opacity-60 font-secondary text-xl text-left">SpA.</div>
      <div class="font-secondary text-right text-4xl">{{ stats.specialAttack }}</div>
    </div>

    <div
      class="drop-shadow-2xl bg-gradient-to-t from-stats-atk-dark to-stats-atk-light px-1 flex flex-row justify-between items-center border rounded border-black">
      <img v-if="atkBoost" class="h-full p-1 opacity-30 absolute" src="pokemon/badges/badge1.png" />
      <div class="opacity-60 text-xl font-secondary text-left">Atk.</div>
      <div class="font-secondary text-right text-4xl">{{ stats.attack }}</div>
    </div>

    <div
      class="drop-shadow-2xl bg-gradient-to-t from-stats-spcDef-dark to-stats-spcDef-light px-1 flex flex-row justify-between items-center border rounded border-black">
      <img v-if="spcDefBoost" class="h-full p-1 opacity-30 absolute" src="pokemon/badges/badge7.png" />
      <div class="opacity-60 text-xl font-secondary text-left">SpD.</div>
      <div class="font-secondary text-right text-4xl">{{ stats.specialDefense }}</div>
    </div>

    <div
      class="drop-shadow-2xl bg-gradient-to-t from-stats-def-dark to-stats-def-light px-1 flex flex-row justify-between items-center border rounded border-black">
      <img v-if="defBoost" class="h-full p-1 opacity-30 absolute" src="pokemon/badges/badge6.png" />
      <div class="opacity-60 text-xl font-secondary text-left">Def.</div>
      <div class="font-secondary text-right text-4xl">{{ stats.defense }}</div>
    </div>

    <div
      class="drop-shadow-2xl bg-gradient-to-t from-stats-spd-dark to-stats-spd-light px-1 flex flex-row justify-between items-center border rounded border-black">
      <img v-if="spdBoost" class="h-full p-1 opacity-30 absolute" src="pokemon/badges/badge3.png" />
      <div class="opacity-60 text-xl font-secondary text-left">Spe.</div>
      <div class="font-secondary text-right text-4xl">{{ stats.speed }}</div>
    </div>
  </div>
</template>
