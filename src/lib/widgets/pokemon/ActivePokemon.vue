<script setup lang="ts">
import { IPokemonInParty, MapperClient } from '@gamehook-io/bindings/GB/PokemonCrystal.js'
import { computed } from 'vue';
import Border from '../../components/Border.vue';
import PokemonImage from './PokemonImage.vue';
import TypeTag from './TypeTag.vue';
import AllPokemon from '../../../../data/pokemon-gen-2/pokemon_crystal.json';
import { titleCase } from '../../../util/strings';

const props = defineProps({
  mapper: { required: true },
  border: { type: Boolean, required: false, default: true },
  title: { type: String, required: false },
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
      <div class="absolute bottom-0 w-full flex flex-row justify-center gap-2">
        <TypeTag :type="types[0]" />
        <TypeTag v-if="types[1]" :type="types[1]" />
      </div>
    </div>

    <Border :show="border" :title="pokemon?.species.value">

      <!-- TODO: extract this to seperate Experience Container component -->
      <div class="font-secondary">Level {{ pokemon?.level.value ?? '???' }}</div>
      <div class="w-full flex rounded border border-black bg-slate-200">
        <div class="z-10 font-secondary px-1 flex-1 bg-slate-200 rounded border-r border-black">
          Exp.
        </div>
        <div class="flex-[4]">
          <div class="font-secondary text-xs text-center leading-none border-b border-black">{{ expRate }}</div>
          <div style="--w:100%;" class="gh-progress"></div>
        </div>
      </div>
    </Border>
  </div>
</template>


<style scoped>
/* 
 * this is not (easily) possible in tailwind, so this is a little gross
 *
 * TODO: make the background in :before selector based on props
 * or something so we can support greater customization
 * */
.gh-progress {
  height: 45%;
  width: 100%;
}

.gh-progress:before {
  padding-left: 4px;
  translate: -8px;
  content: '';
  display: block;
  width: calc(var(--w) + 8px);
  height: 100%;
  background: skyblue;
  border-radius: 4px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 2px;
}
</style>
