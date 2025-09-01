<script setup lang="ts">
interface Props {
  onClick: () => void
  title: string
  text?: string
  className?: string
}

defineProps<Props>()
</script>

<template>
  <button :class="['flex items-center gap-1 border backdrop-blur-lg bg-white/50 border-white/30 shadow ' +
   'hover:bg-white/10 hover:border-black/10 hover:cursor-pointer active:bg-black/3 active:border-black/10', className]" @click="onClick" :title="title">
    {{ text }}
    <slot name="icon"></slot>
  </button>
</template>

<style scoped>

</style>