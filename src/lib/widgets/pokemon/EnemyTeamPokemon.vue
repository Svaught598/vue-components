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
const hasData = computed(() => mapper?.battle?.trainer?.totalPokemon?.value > 0)

const enemyTeam = computed(() => {
    return mapper.battle.trainer.team.slice(0, mapper.battle.trainer.totalPokemon.value).filter(x => x.species.value != null)
})

const getPokemonSpriteUrl = (pokemonName: string) => `https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/regular/${pokemonName}.png`
</script>

<template>
    <template v-if="hasData">
        <Border :show="border" :title="$props.title ?? `${mapper.battle.trainer.name.value}'s Team`">
            <div class="d-flex justify-content-center">
                <div v-for="pokemon of enemyTeam">
                    <div class="position-relative fs-6 mt-4">
                        <span class="position-absolute start-50 translate-middle badge rounded-pill bg-danger">Lv: {{ pokemon.level.value }}</span>
                        <img class="img-sprite" :src="getPokemonSpriteUrl(pokemon.species.value.toLowerCase())" />
                    </div>
                </div>
            </div>
        </Border>
    </template>
</template>