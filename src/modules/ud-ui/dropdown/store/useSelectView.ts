import {defineStore} from "pinia";
import {ref} from "vue";

export const useSelectView = defineStore('selectView', () => {
    const selectedView = ref('День')

    return {
        selectedView
    }
})