<script setup lang="ts">
import { PokemonYellowMapperClient } from '@gamehook-io/bindings/GB/PokemonYellow'
import { computed } from 'vue';
import Border from '../../components/Border.vue';

const props = defineProps({
    mapper: { required: true },
    border: { type: Boolean, required: false, default: true },
    title: { type: String, required: false }
})

const mapper = props.mapper as PokemonYellowMapperClient
const hasData = computed(() => {
    if (!mapper?.game?.generation?.value) return false
    if (mapper?.game?.generation?.value == 2) return false

    return encounters?.value?.length > 0 && mapper?.overworld?.encounterRate?.value > 0
})

const encounters = computed(() => {
    let encounters = [
        ...mapper.overworld.encounters.common,
        ...mapper.overworld.encounters.uncommon,
        ...mapper.overworld.encounters.rare
    ]
        .map(x => x.species.value.toLowerCase())
        .filter(x => x != '')

    let encountersSet = new Set(encounters)
    return Array.from(encountersSet)
})

const getPokemonSpriteUrl = (pokemonName: string) => `https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/${pokemonName}.png`
</script>

<template>
    <template v-if="hasData">
        <Border :show="props.border" :title="props.title ?? `Wild Encounters for ${mapper.overworld.map.value}`">
            <div class="d-flex justify-content-center">
                <div v-for="pokemon of encounters">
                    <img class="img-sprite" :src="getPokemonSpriteUrl(pokemon)" />
                </div>
            </div>
        </Border>
    </template>
</template>