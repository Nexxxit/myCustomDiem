import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useChangeDate = defineStore('changeDate', () => {

    const currentPeriod = ref(Date.now())

    const formattedDate = computed(() => {
        const date = new Date(currentPeriod.value)
        return date.toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric"
        })
    })

    function changeDate(days: number) {
        const newDate = new Date(currentPeriod.value)
        newDate.setDate(newDate.getDate() + days)
        currentPeriod.value = newDate.getTime()
    }

    function nextDay() {
        changeDate(1)
    }

    function prevDay() {
        changeDate(-1)
    }

    function nextWeek() {
        changeDate(7)
    }

    function prevWeek() {
        changeDate(-7)
    }

    function resetToToday() {
        currentPeriod.value = Date.now()
    }

    return {
        formattedDate,
        nextDay,
        prevDay,
        nextWeek,
        prevWeek,
        resetToToday,
    }
})