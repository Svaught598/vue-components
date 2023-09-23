<script setup lang="ts">
import { MapperClient } from '@gamehook-io/bindings/GB/PokemonCrystal.js'
import { PropType, computed } from 'vue';
import Border from '../../components/Border.vue';
import EnemyPokemon from './EnemyPokemon.vue';

const props = defineProps({
  mapper: { type: Object as PropType<MapperClient>, required: true },
  border: { type: Boolean, required: false, default: true },
  title: { type: String, required: false }
});

const enemyTrainerName = computed(() => {
  return props.mapper.properties.battle.trainer.class.value;
});

const enemyPokemon = computed(() => {
  console.log(props.mapper.properties.battle.trainer.team.map(x => x.species.value));
  return props.mapper.properties.battle.trainer.team
    .filter(x => x.species.value != null);
});
</script>

<template>
  <div class="flex flex-col gap-2">
    <Border :show="border">{{ props.title ?? enemyTrainerName }}</Border>
    <EnemyPokemon v-for="pokemon of enemyPokemon" :mapper="mapper" :pokemon="pokemon" />
  </div>
</template>
