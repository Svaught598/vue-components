<script setup lang="ts">
import { computed } from 'vue';
import { MapperClient } from '@gamehook-io/bindings/GB/PokemonCrystal.js'
import Border from '../../components/Border.vue';

class Badge {
    number: number = 0
    value: boolean = false
}

const props = defineProps({
    mapper: { required: true },
    border: { type: Boolean, required: false, default: true },
    title: { type: String, required: false, default: null }
})

const mapper = props.mapper as MapperClient
const hasData = computed(() => mapper?.properties?.game?.generation?.value > 0)

// TODO: Rewrite this function later.
const badges = computed(() => {
    let baseNumber = 0

    if (mapper.properties.game.generation.value == 1) baseNumber = 0
    else if (mapper.properties.game.generation.value == 2) baseNumber = 8
    else if (mapper.properties.game.generation.value == 3) baseNumber = 16

    return [
        { number: 1 + baseNumber, value: mapper.properties.player.badges.badge1.value },
        { number: 2 + baseNumber, value: mapper.properties.player.badges.badge2.value },
        { number: 3 + baseNumber, value: mapper.properties.player.badges.badge3.value },
        { number: 4 + baseNumber, value: mapper.properties.player.badges.badge4.value },
        { number: 5 + baseNumber, value: mapper.properties.player.badges.badge5.value },
        { number: 6 + baseNumber, value: mapper.properties.player.badges.badge6.value },
        { number: 7 + baseNumber, value: mapper.properties.player.badges.badge7.value },
        { number: 8 + baseNumber, value: mapper.properties.player.badges.badge8.value }
    ] as Badge[]
})

const badgeImageSrc = (x: Badge) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/${x.number}.png`
const badgeImageClass = function (x: Badge) {
    if (x.value) {
        return ['m-1']
    } else {
        return ['m-1', 'img-grayscale', 'img-transparent-85']
    }
}
</script>

<template>
    <template v-if="hasData">
        <Border :show="border" :title="'Badges' ?? props.title">
            <div class="mt-2 grid grid-cols-4 gap-4">
                <div v-for="badge in badges">
                    <img :src="badgeImageSrc(badge)" :class="badgeImageClass(badge)" style="width: 64px; height: 64px;" />
                </div>
            </div>
        </Border>
    </template>
</template>