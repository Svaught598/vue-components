<script setup lang="ts">
import { PropType } from 'vue';
import { IPokemonInParty } from '@gamehook-io/bindings/GB/PokemonCrystal';
import Border from '../../components/Border.vue';

const props = defineProps({
    pokemon: { type: Object as PropType<IPokemonInParty>, required: true },
    border: { type: Boolean, required: false, default: true },
    title: { type: String, required: false }
})
</script>

<template>
    <Border :show="border" :title="'Moves' ?? title">
        <table>
            <thead>
                <tr>
                    <th>Moves</th>
                    <th>Pwr.</th>
                    <th>Acc.</th>
                    <th>PP</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="move in pokemon.moves">
                    <td>{{ move.type?.value ?? '--' }}</td>
                    <td>-</td>
                    <td>-</td>
                    <td>{{ move.pp?.value ?? '--' }}</td>
                </tr>
            </tbody>
        </table>
    </Border>
</template>