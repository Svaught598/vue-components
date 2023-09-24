<script setup lang="ts">
import { IPokemonInParty } from '@gamehook-io/bindings/GB/PokemonCrystal';
import { PropType, computed } from 'vue';
import Border from '../../components/Border.vue';
import AllPokemon from '../../../util/pokemon/pokemon-gen-2/pokemon_crystal.json';
import AllMoves from '../../../util/pokemon/pokemon-gen-2/moves.json';
import AllTMHMs from '../../../util/pokemon/pokemon-gen-2/tmhmmapping.json';

const props = defineProps({
  pokemon: { type: Object as PropType<IPokemonInParty>, required: true },
});

type LvlUpMove = [number, string];

type Move = {
  way?: string;
  move?: string;
  type?: string;
  power?: number;
  accuracy?: string;
  pp?: string;
  class?: string;
}

const makeMove = (moveName: string, way: string): Move => {
  const moveData = AllMoves.moves.find(mv => mv.name === moveName);
  return ({
    way,
    move: moveData?.name,
    type: moveData?.name === 'Curse' ? '???' : moveData?.type,
    power: moveData?.base_power == 0 ? '-' : moveData?.base_power,
    accuracy: moveData?.accuracy ?? '-',
    pp: moveData?.pp,
    class: getTypeBg(moveData?.name, moveData?.type),
  } as Move);
}

const getTypeBg = (move?: string, type?: string) => {
  if (!move || !type) return;
  return move === 'Curse' ? 'bg-curse' : `bg-${type.toLowerCase()}`;
}

// order of logic matter here
// because it sorts the moves by 
//   - egg moves
//   - level up moves
//   - tm then hm moves
const moves = computed(() => {
  // get moves learned from pokemon.json
  const species = props.pokemon.species.value;
  const tmHmMoves = AllPokemon[species].tm_hm_learnset as String[];
  const lvlUpMoves = (AllPokemon[species].levelup_moveset as LvlUpMove[])
    .concat(AllPokemon[species].egg_moves.map((m: string) => [1, m] as LvlUpMove))
    .sort((a, b) => a[0] - b[0]);

  // amend moves with extra data from moves.json
  return lvlUpMoves
    .map(([lvl, mv]) => makeMove(mv, lvl.toString()))
    .concat(tmHmMoves.map(moveName => {
      const tmhm = AllTMHMs.find(tm => tm.move === moveName);
      return makeMove(moveName.toString(), tmhm?.tmhmIndex ?? "TM01");
    }));
});
</script>

<template>
  <Border :show="true">
    <h2 class="text-xl font-primary text-center mt-[-4px]">Movepool</h2>
    <table class="leading-none border-2 border-black border-collapse text-sm font-secondary text-left">
      <tr class="h-1 border-2 border-black bg-primary-500 p-1">
        <th>Way</th>
        <th>Move</th>
        <th class="text-center">Type</th>
        <th class="text-right">Pwr.</th>
        <th class="text-right">Acc.</th>
        <th class="text-right">PP</th>
      </tr>
      <tr class="h-1 even:bg-gray-300 odd:bg-white p-1" v-for="move in moves" :key="move.move">
        <td class="px-1">{{ move.way }}</td>
        <td class="px-1">{{ move.move }}</td>
        <td :class="'px-1 text-center ' + move.class">{{ move.type }}</td>
        <td class="px-1 text-right">{{ move.power }}</td>
        <td class="px-1 text-right">{{ move.accuracy }}%</td>
        <td class="px-1 text-right">{{ move.pp }}</td>
      </tr>
    </table>
  </Border>
</template>

<style scoped>
.bg-fighting {
  background-color: #c03028
}

.bg-normal {
  background-color: #a8a878
}

.bg-grass {
  background-color: #78c850
}

.bg-fire {
  background-color: #f08030
}

.bg-water {
  background-color: #6890f0
}

.bg-electric {
  background-color: #f3d230
}

.bg-ground {
  background-color: #e0c068
}

.bg-rock {
  background-color: #b8a038
}

.bg-psychic {
  background-color: #f85888
}

.bg-poison {
  background-color: #a040a0
}

.bg-flying {
  background-color: #a890f0
}

.bg-bug {
  background-color: #a8b820
}

.bg-ice {
  background-color: #98d8d8
}

.bg-ghost {
  background-color: #705898
}

.bg-dragon {
  background-color: #7038f8
}

.bg-steel {
  background-color: #b8b8d0
}

.bg-dark {
  background-color: #705848
}

.bg-fairy {
  background-color: #ee99ac
}

.bg-curse {
  background-color: #2e9fa3
}

.bg-curse {
  background-color: #2e9fa3
}
</style>
