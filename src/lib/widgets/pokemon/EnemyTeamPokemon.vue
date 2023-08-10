<script setup lang="ts">
import { MapperClient } from '@gamehook-io/bindings/GB/PokemonYellow.js'
import { computed } from 'vue';
import Border from '../../components/Border.vue';
import EnemyPokemon from './EnemyPokemon.vue';

const props = defineProps({
    mapper: { required: true },
    border: { type: Boolean, required: false, default: true },
    title: { type: String, required: false }
})

const mapper = props.mapper as MapperClient
const hasData = computed(() => mapper?.properties?.battle?.trainer?.totalPokemon?.value > 0)

const enemyTeam = computed(() => {
    return mapper.properties.battle.trainer.team.slice(0, mapper.properties.battle.trainer.totalPokemon.value).filter(x => x.species.value != null)
})
</script>

<template>
    <template v-if="hasData">
        <Border :show="border" :title="$props.title ?? `${mapper.properties.battle.trainer.name.value}'s Team`">
            <div class="d-flex justify-content-center">
                <div v-for="pokemon of enemyTeam">
                    <EnemyPokemon :pokemon="pokemon" :border="false" />
                </div>
            </div>
        </Border>
    </template>
</template>