<script setup lang="ts">
import { IPokemonInParty } from '@gamehook-io/bindings/GB/PokemonYellow.js'
import { PropType, computed } from 'vue';
import Border from '../../components/Border.vue';

const props = defineProps({
  pokemon: { type: Object as PropType<IPokemonInParty>, required: true },
  border: { type: Boolean, required: false, default: true },
  title: { type: String, required: false }
})

const hasData = computed(() => props.pokemon?.pokedexNumber?.value > 0)

const pokemonImageSrc = computed(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon.pokedexNumber.value}.png`)

const pokemonImageStyle = computed(() => {
  return {
    transform: 'scaleX(-1)',
    position: 'absolute',
    marginLeft: '-40px',
    marginTop: '-25px',
    width: '156px',
    height: '156px'
  }
})
</script>

<template>
  <template v-if="hasData">
    <Border :show="border">
      <template #header>
        <span>{{ pokemon.nickname ?? pokemon.species }}</span>
        <span class="float-end">Lv. {{ pokemon.level }}</span>
      </template>

      <template #default>
        <div class="d-flex">
          <div>
            <img class="image-sprite" :src="pokemonImageSrc" :style="pokemonImageStyle" />
          </div>

          <div class="flex-grow-1 d-flex flex-wrap" style="margin-left: 6em; margin-top: 0.35em;">
            <div class="w-50 pt-2 fs-5" v-for="move in pokemon.moves">
              {{ move.move?.value ?? '---' }}
            </div>
          </div>
        </div>
      </template>
    </Border>
  </template>
</template>
