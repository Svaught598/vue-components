<script setup lang="ts">
import Border from '../../components/Border.vue';
import LiveTime from '../../components/LiveTime.vue';

defineProps({
  show: { type: Boolean, optional: true, default: true },
  title: { type: String, optional: true }
})
</script>

<template>
  <Border :show="show" :title="title">
    <LiveTime />
  </Border>
</template>

