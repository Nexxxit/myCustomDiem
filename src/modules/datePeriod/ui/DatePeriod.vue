<script setup lang="ts">
interface Props {
  currentPeriod: string
}

defineProps<Props>()

</script>

<template>
  <div>
    <p class="arsenal-sc-bold text-2xl">{{ currentPeriod }}</p>
  </div>
</template>

<style scoped>

</style>