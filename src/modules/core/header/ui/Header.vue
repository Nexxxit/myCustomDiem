<script setup lang="ts">

import Navigation from "../../../navigation/ui/Navigation.vue";
import Button from "../../../ud-ui/button/ui/Button.vue";
import Dropdown from "../../../ud-ui/dropdown/ui/Dropdown.vue";
</script>

<template>
  <header class="grid grid-cols-3 items-center backdrop-blur-lg bg-white/40 border border-white/30
  shadow-lg shadow-black/10 rounded-3xl p-5">
    <div class="flex gap-6">
      <p class="font-bold text-3xl">MyCustomDiem</p>
      <Button title="Сегодняшняя дата" on-click="" text="Сегодня" class="py-1 px-2 rounded-full text-lg" />
    </div>
    <Navigation/>
    <Dropdown />
  </header>
</template>

<style scoped>

</style>