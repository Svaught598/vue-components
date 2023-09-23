<script setup lang="ts">
import { PropType, computed } from 'vue';
import Border from '../../components/Border.vue';
import PokemonImage from './PokemonImage.vue';
import SmallStats from '../../components/pokemon/SmallStats.vue';
import { IPokemonInParty, MapperClient } from '@gamehook-io/bindings/GB/PokemonCrystal';
import { titleCase } from '../../../util/strings';

const props = defineProps({
  mapper: { type: Object as PropType<MapperClient>, required: true },
  pokemon: { type: Object as PropType<IPokemonInParty>, required: true },
  border: { type: Boolean, required: false, default: true },
  title: { type: String, required: false }
});

const moves = computed(() => props.pokemon.moves.map(move => titleCase(move.type.value)))
</script>

<template>
  <Border :show="border">
    <div class="flex flex-row">
      <div class="w-1/2 flex flex-row gap-1">
        <div class="flex-5 flex flex-col">
          <h2 class="font-primary text-md text-center">{{ pokemon.species.value }}</h2>
          <PokemonImage :pokemon="pokemon" />
        </div>

        <!-- stats -->
        <SmallStats :mapper="mapper" :pokemon="pokemon" />
      </div>

      <!-- moves -->
      <div class="w-1/2 pl-[1px] font-secondary text-center flex flex-col gap-[1px]">
        <div v-for="move in moves"
          class="flex justify-center items-center flex-1 px-2 drop-shadow-2xl bg-gradient-to-t border rounded border-black">
          <p>{{ move }}</p>
        </div>
      </div>
    </div>
  </Border>
</template>
