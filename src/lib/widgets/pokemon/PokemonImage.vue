<script setup lang="ts">
import Border from '../../components/Border.vue';
import { getPokemonSpriteUrlFromDex } from '../../../util/pokemon'

const props = defineProps({
    pokedexNumber: { type: Number, required: true },
    border: { type: Boolean, required: false, default: true },
    title: { type: String, required: false }
})
</script>

<template>
    <Border :show="props.border" :title="props.title">
        <img :src="getPokemonSpriteUrlFromDex(pokedexNumber)" />
    </Border>
</template>