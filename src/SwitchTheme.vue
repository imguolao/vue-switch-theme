<script lang="ts" setup>
/* eslint-disable @typescript-eslint/no-unused-vars */

import { ref, onMounted, watch } from 'vue'
import { useTheme, type Theme } from './hooks'
import SwitchButton from './SwitchButton.vue'
import IconSun from './IconSun.vue'
import IconMoon from './IconMoon.vue'

const props = defineProps<{ mode?: Theme }>()
const emit = defineEmits(['change'])

const { toggle, isDark, setTheme, theme } = useTheme('SwitchTheme')
  
onMounted(() => {
  setTheme(props.mode ?? 'auto')
  watch(theme, () => emit('change', theme.value))
})
</script>

<template>
  <SwitchButton
    title="toggle dark mode"
    class="SwitchTheme"
    :aria-checked="isDark"
    @click="toggle"
  >
    <IconSun class="sun" />
    <IconMoon class="moon" />
  </SwitchButton>
</template>

<style scoped>
.sun {
  opacity: 1;
}

.moon {
  opacity: 0;
}

[data-color-mode*=dark] .sun {
  opacity: 0;
}

[data-color-mode*=dark] .moon {
  opacity: 1;
}

[data-color-mode*=dark] .SwitchTheme :deep(.check) {
  /* rtl:ignore */
  transform: translateX(18px);
}
</style>
