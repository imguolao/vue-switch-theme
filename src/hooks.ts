import { ref, computed } from 'vue'

export type Theme = 'dark' | 'light' | 'auto'

export const THEME_KEY = '$$vue-switch-theme'

export function getTheme() {
  return localStorage.getItem(THEME_KEY) as Theme | null
}

export function saveTheme(theme: Theme) {
  localStorage.setItem(THEME_KEY, theme)
}

export function useTheme(className: string) {
  const userTheme = getTheme()
  const query = window.matchMedia('(prefers-color-scheme: dark)')
  const __isDark = ref(userTheme === null ? query.matches : userTheme === 'dark')
  const isDark = computed(() => __isDark.value)
  const isLight = computed(() => !__isDark.value)
  const theme = computed<Theme>(() =>
    __isDark.value ? (query.matches ? 'auto' : 'dark') : query.matches ? 'light' : 'auto',
  )

  query.onchange = e => {
    if (getTheme() === 'auto') {
      __isDark.value = e.matches
      setTheme(isDark.value ? 'dark' : 'light')
    }
  }

  function setTheme(newTheme: Theme) {
    __isDark.value = newTheme === 'auto' ? query.matches : newTheme === 'dark'
    document.documentElement.setAttribute('data-color-mode', __isDark.value ? 'dark' : 'light')

    const css = document.createElement('style')
    css.appendChild(
      document.createTextNode(`
      :not(.${className}):not(.${className} *) {
        -webkit-transition: none !important;
        -moz-transition: none !important;
        -o-transition: none !important;
        -ms-transition: none !important;
        transition: none !important;
      }
    `),
    )
    document.head.appendChild(css)

    // copied by https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/components/VPSwitchAppearance.vue#L64
    // keep unused declaration, used to force the browser to redraw
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _ = window.getComputedStyle(css).opacity
    document.head.removeChild(css)

    saveTheme(theme.value)
  }

  function toggle() {
    setTheme(__isDark.value ? 'light' : 'dark')
  }

  return {
    THEME_KEY,
    theme,
    isDark,
    isLight,
    setTheme,
    toggle,
  }
}
