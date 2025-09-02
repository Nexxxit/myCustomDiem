<script setup lang="ts">

import Button from "../../ud-ui/button/ui/Button.vue";
import ChevronLeft from "../../../assets/ChevronLeft.vue";
import ChevronRight from "../../../assets/ChevronRight.vue";
import DatePeriod from "../../datePeriod/ui/DatePeriod.vue";
import {useChangeDate} from "../store/useChangeDate.ts";
import {useSelectView} from "../../ud-ui/dropdown/store/useSelectView.ts";
import {storeToRefs} from "pinia";

const changeDateStore = useChangeDate()
const {prevDay, prevWeek, nextWeek, nextDay} = changeDateStore
const {formattedDate} = storeToRefs(changeDateStore)
const selectView = useSelectView()

function handlePrev() {
  if(selectView.selectedView === 'День') {
    prevDay()
  } else if (selectView.selectedView === 'Неделя') {
    prevWeek()
  }
}

function handleNext() {
  if(selectView.selectedView === 'День') {
    nextDay()
  } else if (selectView.selectedView === 'Неделя') {
    nextWeek()
  }
}

</script>

<template>
  <div class="flex gap-3 items-center justify-center">
    <Button @click="handlePrev" title="Предыдущая дата" class="p-2 rounded-full justify-center">
      <template #icon>
        <ChevronLeft/>
      </template>
    </Button>

    <DatePeriod :current-period="formattedDate"/>

    <Button @click="handleNext" title="Следующая дата" class="p-2 rounded-full justify-center">
      <template #icon>
        <ChevronRight/>
      </template>
    </Button>
  </div>
</template>

<style scoped>

</style>