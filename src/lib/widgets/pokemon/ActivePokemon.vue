<script setup lang="ts">
import { computed } from 'vue';
import { IPokemonInParty, MapperClient } from '@gamehook-io/bindings/GB/PokemonCrystal.js'
import AllPokemon from '../../../util/pokemon/pokemon-gen-2/pokemon_crystal.json';
import Border from '../../components/Border.vue';
import Stats from '../../components/pokemon/BigStats.vue';
import Experience from '../../components/pokemon/Experience.vue';
import PokemonImage from './PokemonImage.vue';
import TypeTag from './TypeTag.vue';

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
      <Experience :pokemon="pokemon" :expBarColor="expBarColor" />
      <Stats :mapper="mapper" />
    </Border>
  </div>
</template>
