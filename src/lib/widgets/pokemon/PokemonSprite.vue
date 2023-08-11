<script setup lang="ts">
import { IPokemonInParty } from '@gamehook-io/bindings/GB/PokemonYellow.js'
import { computed, PropType } from 'vue';
import { getPokemonSpriteUrlFromName } from '../../../util/pokemon'

const props = defineProps({
    pokemon: { type: Object as PropType<IPokemonInParty>, required: true }
})

const hasData = computed(() => props.pokemon?.species?.value)

const imgStyle = {
    backgroundImage: `url(${getPokemonSpriteUrlFromName(props.pokemon.species.value.toLocaleLowerCase())})`
}
</script>

<template>
    <template v-if="hasData">
        <div
            class="bg-cover bg-center"
            :style="imgStyle">
        </div>
    </template>
</template>