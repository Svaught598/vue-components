<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { StateManager, WorldState } from '@gamehook-io/bindings/extras/PokemonStateManager'
import { MapperClient } from "@gamehook-io/bindings/GB/PokemonCrystal.js";

// setup mapper
const mapperInstance = new MapperClient()
const mapper = ref(() => mapperInstance)
const worldState = computed(() => new StateManager(mapperInstance))

// local state needed
const timerHasStarted = ref(false);
const startTime = ref<Date>(new Date());
const gameTime = ref<string>("");
const gameTimeMs = ref<string>("");

// watch for new game event, and start timer
watch(() => worldState?.value?.world, (newWorldState, oldWorldState) => {
  if (newWorldState == null || oldWorldState == null) return;
  const fromMenu = oldWorldState == WorldState.MAIN_MENU;
  const toOverworld = newWorldState == WorldState.OVERWORLD;
  if (fromMenu && toOverworld) {
    startTimer()
  }
})

// get time and format to tuple of (h:m:s, ms)
const getTime = () => {
  const time = Date.now() - startTime.value.getTime();
  const format = (num: number) => num.toString().padStart(2, "0");
  const ms = (Math.floor(time / 10) % 100);
  const ss = (Math.floor(time / 1000) % 60);
  const mm = (Math.floor(time / 60000) % 60);
  const hh = (Math.floor(time / 3600000));

  if (hh > 0) {
    return [`${hh}:${format(mm)}:${format(ss)}`, `.${format(ms)}`];
  }
  else if (mm > 0) {
    return [`${mm}:${format(ss)}`, `.${format(ms)}`];
  }
  else {
    return [`${ss}`, `.${format(ms)}`];
  }
}

// used in watcher to actually start the timer
const startTimer = () => {
  timerHasStarted.value = true;
  startTime.value = new Date();
  const [time, ms] = getTime();
  gameTime.value = time;
  gameTimeMs.value = ms;

  setInterval(() => {
    const [time, ms] = getTime();
    gameTime.value = time;
    gameTimeMs.value = ms;
  }, 1);
}

// uncomment for testing
// startTimer()
</script>

<template>
  <!-- must be monospace font so that the numbers don't jump around -->
  <div v-if="timerHasStarted" class="font-mono font-bold w-full text-right text-black text-5xl">
    {{ gameTime }}<span class="text-xl">{{ gameTimeMs }}</span>
  </div>
  <div v-else class="w-full text-right text-black text-xl">
    Start new game in emulator to begin timer
  </div>
</template>

