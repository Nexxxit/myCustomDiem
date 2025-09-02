<script setup lang="ts">

import Button from "../../button/ui/Button.vue";
import ChevronDown from "../../../../assets/ChevronDown.vue";
import {ref} from "vue";

const array = ref(["День", "Неделя", "Месяц", "Год", "4 дня", "Расписание"])
const selectedMode = ref('День')
const isActive = ref(false)

</script>

<template>
  <div class="relative justify-self-end">
    <Button title="Выбрать период" @click="isActive = !isActive" :text="selectedMode"
            class="flex justify-center py-1 px-2 rounded-full text-lg min-w-30">
      <template #icon>
        <ChevronDown/>
      </template>
    </Button>
    <div class="absolute top-11 right-0 min-w-30 border backdrop-blur-lg bg-white/50 border-white/30 shadow rounded-2xl" v-if="isActive">
      <ul class="flex flex-col">
        <li class="p-1 first:rounded-t-2xl last:rounded-b-2xl
        hover:bg-black/5 hover:border-black/10 hover:cursor-pointer active:bg-black/10 active:border-black/10"
            v-for="item in array"
            @click="[selectedMode = item, isActive = !isActive]"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>