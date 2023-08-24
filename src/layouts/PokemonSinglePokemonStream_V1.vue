<script setup lang="ts">
import { MapperClient } from '@gamehook-io/bindings/GB/PokemonYellow.js'
import { computed } from 'vue';

import TimePlayed from '../lib/widgets/pokemon/TimePlayed.vue';

const props = defineProps({
    mapper: { required: true }
})

const mapper = props.mapper as MapperClient
const loaded = computed(() => {
    return true
})
</script>

<template>
    <template v-if="loaded">
        <div class="flex flex-row">
            <div class="basis-1/4">
                <TimePlayed :mapper="mapper" />
                <!-- Moves -->

                <div class="flex flex-row">
                    <div class="basis-1/4">
                        <!-- Resets -->
                    </div>
                    <div class="basis-1/4">
                        <!-- Resets -->
                    </div>
                </div>
            </div>
            <div class="basis-1/2">

            </div>
            <div class="basis-1/4">

            </div>
        </div>

        <!-- Left Panel -->

        <!-- Center Panel -->
        <!-- Show the game placeholder here -->
        <!-- Ability -->
        <!-- Held Item -->
        <!-- Pokemon Moves -->

        <!-- Right Panel -->
    </template>
</template>