<script setup lang="ts">
import { computed } from 'vue';
import { MapperClient } from '@gamehook-io/bindings/GB/PokemonCrystal.js'
import Border from '../../components/Border.vue';

const props = defineProps({
    mapper: { required: true },
    border: { type: Boolean, required: false, default: true },
    title: { type: String, required: false }
})

const mapper = props.mapper as MapperClient
const hasData = computed(() => mapper?.properties?.gameTime?.frames?.value > 0)

const formatTime = (time: number | null) => time?.toString()?.padStart(2, '0') ?? ''
</script>
<template>
    <template v-if="hasData">
        <Border :show="border" :title="props.title ?? 'Time Played'">
            <div class="text-right">
                <span class="text-6xl font-bold">{{ mapper.properties.gameTime.hours.value }}</span>
                <span class="text-6xl font-bold">:</span>
                <span class="text-6xl font-bold">{{ formatTime(mapper.properties.gameTime.minutes.value) }}</span>
                <span class="text-6xl font-bold">:</span>
                <span class="text-6xl font-bold">{{ formatTime(mapper.properties.gameTime.seconds.value) }}</span>
                <span class="text-2xl">.</span>
                <span class="text-2xl">{{ formatTime(mapper.properties.gameTime.frames.value) }}</span>
            </div>
        </Border>
    </template>
    <template v-else>

    </template>
</template>