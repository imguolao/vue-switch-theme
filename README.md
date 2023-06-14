# vue-switch-theme

A simple, tiny vue component(or hook) to help you easily implement dark mode.

[![gitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/imguolao/vue-switch-theme/blob/main/LICENSE) 

English | [简体中文](./README.zh-CN.md)

## Installation

```sh
# npm
npm i @guolao/vue-switch-theme

# yarn
yarn add @guolao/vue-switch-theme

# pnpm
pnpm add @guolao/vue-switch-theme
```

## Usage

```vue
<template>
  <SwitchTheme />
</template>

<script setup>
import SwitchTheme from '@guolao/vue-switch-theme'
</script>
```

## Props & Events

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| mode | `'auto' \| 'dark' \| 'light'` | `'auto'` | appearance theme |
| onChange | `(theme: 'auto' \| 'dark' \| 'light') => void` | `null` | emit after theme mode change |

## hooks

Customize your own theme switch component by `useTheme` hook.

```vue
<template>
  <button 
    class="theme-button"
    @click="toggle">
    mode: {{ theme }}
  </button>
</template>

<script setup>
import { onMounted } from 'vue'
import { useTheme } from '@guolao/vue-switch-theme'

const { toggle, setTheme, theme } = useTheme('theme-button')
onMounted(() => setTheme('dark'))
</script>
```

## License

[MIT](LICENSE)
