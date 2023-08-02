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

const hours = computed(() => mapper.properties.gameTime.hours.value)
const minutes = computed(() => mapper.properties.gameTime.minutes.value)
const seconds = computed(() => mapper.properties.gameTime.seconds.value)

const formatTime = (time: number | null) => time?.toString()?.padStart(2, '0') ?? ''
</script>
<template>
    <template v-if="hasData">
        <Border :show="border" :title="props.title ?? 'Time Played'">
            <div class="font-monospace text-center">
                <span class="display-3">{{ formatTime(hours) }}</span>
                <span class="display-5">.</span>
                <span class="display-5">{{ formatTime(minutes) }}</span>
                <span class="display-5">.</span>
                <span class="display-5">{{ formatTime(seconds) }}</span>
            </div>
        </Border>
    </template>
</template>