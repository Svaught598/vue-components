<script setup lang="ts">
import { IPokemonInParty } from '@gamehook-io/bindings/GB/PokemonCrystal.js'
import { computed, PropType } from 'vue';
import { getPokemonSpriteUrlFromName } from '../../../util/pokemon'

const props = defineProps({
  pokemon: { type: Object as PropType<IPokemonInParty>, required: true },
  class: { type: String, required: false },
})

// this line is a silly workaround because vue compiler treats class as 
// a reserved keyword and fails to parse the template correctly
// TODO: there may be a more idiomatic way to do this in vue
const extraClasses = computed(() => props.class ? props.class : '');

const imgSrc = computed(() =>
  (props?.pokemon?.species?.value)
    ? getPokemonSpriteUrlFromName(props.pokemon.species.value.toLocaleLowerCase())
    : undefined
);
</script>

<template>
  <img v-if="imgSrc" :src="imgSrc" :class="`${extraClasses} object-fill`">
</template>
