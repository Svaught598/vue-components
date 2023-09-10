<script setup lang="ts">
import { IPokemonInParty, MapperClient } from '@gamehook-io/bindings/GB/PokemonCrystal.js'
import { computed } from 'vue';
import Border from '../../components/Border.vue';
import PokemonImage from './PokemonImage.vue';
import TypeTag from './TypeTag.vue';
import AllPokemon from '../../../../data/pokemon-gen-2/pokemon_crystal.json';
import ExpInfo from '../../../../data/pokemon-gen-2/exp.json';
import { titleCase } from '../../../util/strings';

const props = defineProps({
  mapper: { required: true },
  border: { type: Boolean, required: false, default: true },
  title: { type: String, required: false },
  expBarColor: { type: String, required: false, default: 'skyblue' },
});

const mapper = props.mapper as MapperClient;
const pokemon = computed<IPokemonInParty>(() => mapper.properties.battle.trainer.team[0]);

const types = computed(() => {
  const species = pokemon?.value?.species?.value as (keyof typeof AllPokemon);
  const { type_1, type_2 } = AllPokemon[species];
  if (type_1 === type_2) return [type_1];
  return [type_1, type_2];
});

const expRate = computed(() => {
  const species = pokemon?.value?.species?.value as (keyof typeof AllPokemon);
  const info = AllPokemon[species];
  const growthRate = info.growth_rate.replace("GROWTH_", "");
  return titleCase(growthRate);
});

// a little gross since inference on JSON is not great
type ExpRate = keyof typeof ExpInfo;
const expPercentageStyle = computed(() => {
  const exp = pokemon.value.experiencePoints.value;
  const species = pokemon?.value?.species?.value as (keyof typeof AllPokemon);
  const growthRate = AllPokemon[species].growth_rate as ExpRate;

  const index = ExpInfo[growthRate].findIndex(x => x > exp);
  const currLvlExp = ExpInfo[growthRate][index - 1];
  const nextLvlExp = ExpInfo[growthRate][index];
  const levelProgress = (exp - currLvlExp) / (nextLvlExp - currLvlExp);
  return `--w: ${levelProgress * 100}%; --bg: ${props.expBarColor};`;
});
</script>

<template>
  <div class="flex flex-col items-center">
    <!--
      NOTE: this section might be tricky to preserve as we start working
     as we start making this responsive in a pre-configured template
    -->
    <div class="relative pb-5">
      <div class="z-[-10] absolute top-0 left-0 w-48 h-48 translate-x-[-24px] bg-primary-300 rounded-full" />
      <PokemonImage class="h-36 w-36" :pokemon="pokemon" />
      <div class="absolute w-full bottom-0 translate-y-1/3 flex flex-row justify-center gap-2">
        <TypeTag :type="types[0]" />
        <TypeTag v-if="types[1]" :type="types[1]" />
      </div>
    </div>

    <Border :show="border">
      <!-- Experience Container -->
      <div class="font-secondary text-center text-xl">Level {{ pokemon?.level.value ?? '???' }}</div>
      <div class="w-full flex rounded border border-black bg-slate-200">
        <div class="z-10 font-secondary px-1 flex-1 bg-slate-200 rounded border-r border-black">
          Exp.
        </div>
        <div class="flex-[4]">
          <div class="font-secondary text-xs text-center leading-none border-b border-black">{{ expRate }}</div>
          <div :style="expPercentageStyle" class="gh-progress"></div>
        </div>
      </div>

      <!-- Stats Container -->
      <!-- Pretty sure this is incomplete as of now since stats can have modifiers -->
      <div class="mt-1 grid grid-cols-2 gap-1">
        <div class="bg-red-500 px-1 flex flex-row justify-between items-center border rounded border-black">
          <div class="font-secondary text-left">HP</div>
          <div class="font-secondary text-right text-4xl">{{ pokemon?.stats?.maxHp?.value }}</div>
        </div>

        <div class="bg-blue-500 px-1 flex flex-row justify-between items-center border rounded border-black">
          <div class="font-secondary text-left">SpA.</div>
          <div class="font-secondary text-right text-4xl">{{ pokemon?.stats?.specialAttack?.value }}</div>
        </div>

        <div class="bg-orange-500 px-1 flex flex-row justify-between items-center border rounded border-black">
          <div class="font-secondary text-left">Atk.</div>
          <div class="font-secondary text-right text-4xl">{{ pokemon?.stats?.attack?.value }}</div>
        </div>

        <div class="bg-green-500 px-1 flex flex-row justify-between items-center border rounded border-black">
          <div class="font-secondary text-left">SpD.</div>
          <div class="font-secondary text-right text-4xl">{{ pokemon?.stats?.specialDefense?.value }}</div>
        </div>

        <div class="bg-yellow-500 px-1 flex flex-row justify-between items-center border rounded border-black">
          <div class="font-secondary text-left">Def.</div>
          <div class="font-secondary text-right text-4xl">{{ pokemon?.stats?.defense?.value }}</div>
        </div>

        <div class="bg-pink-400 px-1 flex flex-row justify-between items-center border rounded border-black">
          <div class="font-secondary text-left">Spe.</div>
          <div class="font-secondary text-right text-4xl">{{ pokemon?.stats?.speed?.value }}</div>
        </div>
      </div>
    </Border>
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
