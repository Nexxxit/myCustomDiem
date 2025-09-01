<script setup lang="ts">

import Button from "../../ud-ui/button/ui/Button.vue";
import ChevronLeft from "../../../assets/ChevronLeft.vue";
import ChevronRight from "../../../assets/ChevronRight.vue";
import CurrentPeriod from "../../currentPeriod/ui/CurrentPeriod.vue";

const date = new Date().toLocaleDateString(undefined, {
  year: "numeric",
  month: "long",
  day: "numeric"
})
</script>

<template>
  <div class="flex gap-3 items-center justify-center">
    <Button on-click="" title="Предыдущая дата" class-name="p-2 rounded-full justify-center">
      <template #icon>
        <ChevronLeft />
      </template>
    </Button>

    <CurrentPeriod :current-period="date" />

    <Button on-click="" title="Следующая дата" class-name="p-2 rounded-full justify-center">
      <template #icon>
        <ChevronRight />
      </template>
    </Button>
  </div>
</template>

<style scoped>

</style>