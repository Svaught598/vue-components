<script setup lang="ts">
import Border from '../../components/Border.vue';

const props = defineProps({
    pokedexNumber: { type: Number, required: true },
    border: { type: Boolean, required: false, default: true },
    title: { type: String, required: false, default: 'Moveset' }
})
</script>

<template>
    <Border :show="border" :title="title">
        Movepool
    </Border>
</template>