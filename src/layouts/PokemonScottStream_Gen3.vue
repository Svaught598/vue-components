<script setup lang="ts">
import { MapperClient } from '@gamehook-io/bindings/GB/PokemonYellow.js'
import { computed } from 'vue';

const props = defineProps({
    mapper: { required: true },
    border: { type: Boolean, required: false, default: true },
    title: { type: String, required: false }
})

const mapper = props.mapper as MapperClient
const loaded = computed(() => {
    return true
})
</script>

<template>
    <template v-if="loaded">
        <!-- Left Panel -->

        <!-- Center Panel -->
        <!-- Show the game placeholder here -->
        <template v-if="mapper.properties.game.generation === 3">
            <!-- Ability -->
            <!-- Held Item -->
            <!-- Pokemon Moves -->
        </template>

        <!-- Right Panel -->
    </template>
</template>