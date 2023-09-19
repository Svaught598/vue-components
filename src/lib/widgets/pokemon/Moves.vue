<script setup lang="ts">
import { PropType, computed } from 'vue';
import { IPokemonInParty } from '@gamehook-io/bindings/GB/PokemonCrystal';
import Moves from '../../../util/pokemon/pokemon-gen-2/moves.json';
import Border from '../../components/Border.vue';

const props = defineProps({
  pokemon: { type: Object as PropType<IPokemonInParty>, required: true },
  border: { type: Boolean, required: false, default: true },
  title: { type: String, required: false }
})

const moves = computed(() => {
  const AllMoves = Moves.moves;
  return props.pokemon?.moves
    .map(mv => AllMoves.find((m) => m.name === mv.type.value));
});
</script>

<template>
  <Border :show="border">
    <table class="w-full">
      <tr class="font-primary text-sm border-1 border-b border-primary-600 leading-3">
        <th class="text-left">Moves</th>
        <th class="text-right">Pwr.</th>
        <th class="text-right">Acc.</th>
        <th class="text-right">PP</th>
      </tr>

      <tr class="font-secondary text-sm leading-6" v-for="move in moves">
        <td class="text-left flex flex-row items-center gap-2">
          <img height="24" width="24" class="border border-primary-900 rounded-full"
            :src="`pokemon/type-icons-circular/${move?.type?.toLowerCase()}.png`" />
          {{ move?.name ?? '--' }}
        </td>
        <td class="text-right">{{ move?.base_power ?? '--' }}</td>
        <td class="text-right">{{ move?.accuracy ?? '--' }}%</td>
        <td class="text-right">{{ move?.pp ?? '--' }}</td>
      </tr>
    </table>
  </Border>
</template>
