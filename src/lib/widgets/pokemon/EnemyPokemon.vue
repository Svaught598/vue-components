<script setup lang="ts">
import { IPokemonInParty } from '@gamehook-io/bindings/GB/PokemonYellow.js'
import { computed, PropType } from 'vue';
import Border from '../../components/Border.vue';
import PokemonSprite from './PokemonSprite.vue';

const props = defineProps({
    pokemon: { type: Object as PropType<IPokemonInParty>, required: true },
    border: { type: Boolean, required: false, default: true },
    title: { type: String, required: false }
})

const hasData = computed(() => props.pokemon?.pokedexNumber?.value > 0)
</script>

<template>
    <template v-if="hasData">
        <Border :show="border" :title="$props.title ?? `${pokemon.nickname.value ?? pokemon.species.value}`">
            <div class="flex flex-row">
                <div class="basis-1/4">
                    <PokemonSprite :pokemon="pokemon" />
                </div>
                <div class="basis-1/4">02</div>
                <div class="basis-1/2">03</div>
            </div>
        </Border>
    </template>
</template>