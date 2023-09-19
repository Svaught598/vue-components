<script setup lang="ts">
import { PropType, computed } from 'vue';
import AllPokemon from '../../../util/pokemon/pokemon-gen-2/pokemon_crystal.json';
import ExpInfo from '../../../util/pokemon/pokemon-gen-2/exp.json';
import { titleCase } from '../../../util/strings';
import { IPokemonInParty } from '@gamehook-io/bindings/GB/PokemonCrystal';

const { expBarColor, pokemon } = defineProps({
  pokemon: { type: Object as PropType<IPokemonInParty>, required: true },
  expBarColor: { type: String, required: false, default: 'skyblue' },
});

const expRate = computed(() => {
  const species = pokemon?.species?.value as (keyof typeof AllPokemon);
  const info = AllPokemon[species];
  const growthRate = info.growth_rate.replace("GROWTH_", "");
  return titleCase(growthRate);
});

// a little gross since inference on JSON is not great
type ExpRate = keyof typeof ExpInfo;
const expPercentageStyle = computed(() => {
  const exp = pokemon.experiencePoints.value;
  const species = pokemon?.species?.value as (keyof typeof AllPokemon);
  const growthRate = AllPokemon[species].growth_rate as ExpRate;

  const index = ExpInfo[growthRate].findIndex(x => x > exp);
  const currLvlExp = ExpInfo[growthRate][index - 1];
  const nextLvlExp = ExpInfo[growthRate][index];
  const levelProgress = (exp - currLvlExp) / (nextLvlExp - currLvlExp);
  return `--w: ${levelProgress * 100}%; --bg: ${expBarColor};`;
});
</script>

<template>
  <div class="font-primary text-center text-xl mt-[-4px]">Level {{ pokemon?.level.value ?? '???' }}</div>
  <div class="w-full flex rounded border border-black bg-slate-200">
    <div class="z-10 font-secondary px-1 flex-1 bg-slate-200 rounded border-r border-black">
      Exp.
    </div>
    <div class="flex-[4]">
      <div class="font-secondary text-xs text-center leading-none border-b border-black">{{ expRate }}</div>
      <div :style="expPercentageStyle" class="gh-progress"></div>
    </div>
  </div>
</template>

<style scoped>
/* this is not (easily) possible in tailwind, so this is a little gross */
.gh-progress {
  height: 45%;
  width: 100%;
}

.gh-progress:before {
  transition: width 0.5s ease-in-out;
  padding-left: 4px;
  translate: -8px;
  content: '';
  display: block;
  width: calc(var(--w) + 8px);
  height: 100%;
  background: var(--bg);
  border-radius: 4px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 2px;
}
</style>
