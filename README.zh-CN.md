# vue-switch-theme

一个帮助你实现暗黑模式的 vue 组件。

当然，你也可以使用导出的 hook 进行自定义。

[![gitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/imguolao/vue-switch-theme/blob/main/LICENSE) 

简体中文 | [English](./README.md)

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
| mode | `'auto' \| 'dark' \| 'light'` | `'auto'` | 环境主题 |
| onChange | `(theme: 'auto' \| 'dark' \| 'light') => void` | `null` | 在环境主题改变后触发 |

## hooks

使用 `useTheme` hook 自定义属于你自己的环境主题选择器。

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
