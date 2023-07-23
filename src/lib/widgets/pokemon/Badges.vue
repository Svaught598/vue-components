<script setup lang="ts">
import { computed } from 'vue';
import { PokemonCrystalMapperClient } from '@gamehook-io/bindings/GB/PokemonCrystal'
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

const mapper = props.mapper as PokemonCrystalMapperClient
const hasData = computed(() => mapper?.game?.generation?.value > 0)

// TODO: Rewrite this function later.
const badges = computed(() => {
    let baseNumber = 0

    if (mapper.game.generation.value == 1) baseNumber = 0
    else if (mapper.game.generation.value == 2) baseNumber = 8
    else if (mapper.game.generation.value == 3) baseNumber = 16

    return [
        { number: 1 + baseNumber, value: mapper.player.badges.badge1.value },
        { number: 2 + baseNumber, value: mapper.player.badges.badge2.value },
        { number: 3 + baseNumber, value: mapper.player.badges.badge3.value },
        { number: 4 + baseNumber, value: mapper.player.badges.badge4.value },
        { number: 5 + baseNumber, value: mapper.player.badges.badge5.value },
        { number: 6 + baseNumber, value: mapper.player.badges.badge6.value },
        { number: 7 + baseNumber, value: mapper.player.badges.badge7.value },
        { number: 8 + baseNumber, value: mapper.player.badges.badge8.value }
    ] as Badge[]
})

const badgeImageSrc = (x: Badge) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/${x.number}.png`
const badgeImageClass = function (x: Badge) {
    if (x.value) {
        return ['img-sprite']
    } else {
        return ['img-sprite', 'img-grayscale', 'img-transparent-85']
    }
}
</script>

<template>
    <template v-if="hasData">
        <Border :show="border" :title="props.title">
            <div class="d-flex">
                <div class="m-2" v-for="badge in badges.slice(0, 4)">
                    <img :src="badgeImageSrc(badge)" :class="badgeImageClass(badge)" />
                </div>
            </div>

            <div class="d-flex">
                <div class="m-2" v-for="badge in badges.slice(4, 8)">
                    <img :src="badgeImageSrc(badge)" :class="badgeImageClass(badge)" />
                </div>
            </div>
        </Border>
    </template>
</template>