<script setup lang="ts">
import { MapperClient } from '@gamehook-io/bindings/GB/PokemonYellow.js'
import { computed } from 'vue';
import Border from '../../components/Border.vue';

const props = defineProps({
    mapper: { required: true },
    border: { type: Boolean, required: false, default: true },
    title: { type: String, required: false }
})

const mapper = props.mapper as MapperClient
const hasData = computed(() => {
    if (!mapper?.properties?.game?.generation?.value) return false
    if (mapper?.properties?.game?.generation?.value == 2) return false

    return encounters?.value?.length > 0 && mapper?.properties?.overworld?.encounterRate?.value > 0
})

const encounters = computed(() => {
    let encounters = [
        ...mapper.properties.overworld.encounters.common,
        ...mapper.properties.overworld.encounters.uncommon,
        ...mapper.properties.overworld.encounters.rare
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
        <Border :show="props.border" :title="props.title ?? `Wild Encounters for ${mapper.properties.overworld.map.value}`">
            <div class="d-flex justify-content-center">
                <div v-for="pokemon of encounters">
                    <img class="img-sprite" :src="getPokemonSpriteUrl(pokemon)" />
                </div>
            </div>
        </Border>
    </template>
</template>