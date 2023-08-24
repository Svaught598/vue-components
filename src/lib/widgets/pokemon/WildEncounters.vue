<script setup lang="ts">
import { MapperClient } from '@gamehook-io/bindings/GB/PokemonYellow.js'
import { computed } from 'vue';
import Border from '../../components/Border.vue';
import { getPokemonImageUrlFromDexNumber } from '../../../util/pokemon';

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
    ].map(x => x.pokedexNumber.value).filter(x => x != 0)

    let encountersSet = new Set(encounters)
    return Array.from(encountersSet)
})
</script>

<template>
    <template v-if="hasData">
        <Border :show="props.border" :title="props.title ?? `Wild Encounters for ${mapper.properties.overworld.map.value}`">
            <div class="grid grid-flow-col gap-4">
                <div v-for="pokedexNumber of encounters">
                    <img class="m-3" style="width: 64px; height: 64px;" :src="getPokemonImageUrlFromDexNumber(pokedexNumber)" />
                </div>
            </div>
        </Border>
    </template>
</template>