<script setup lang="ts">
import { MapperClient } from '@gamehook-io/bindings/GB/PokemonCrystal';
import Border from '../../components/Border.vue';
import LiveTime from '../../components/pokemon/LiveTime.vue';

defineProps({
  mapper: { type: MapperClient, required: true },
  show: { type: Boolean, optional: true, default: true },
  title: { type: String, optional: true }
})
</script>

<template>
  <Border :show="show" :title="title">
    <LiveTime :mapper="mapper" />
  </Border>
</template>

