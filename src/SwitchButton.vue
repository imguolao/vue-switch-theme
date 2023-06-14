<template>
  <button class="SwitchButton" type="button" role="switch">
    <span class="check">
      <span v-if="$slots.default" class="icon">
        <slot />
      </span>
    </span>
  </button>
</template>

<style scoped>
*,
::before,
::after {
  box-sizing: border-box;
}

button {
  border: 0;
  padding: 0;
  line-height: inherit;
  color: inherit;
  padding: 0;
  font-family: inherit;
  background-color: transparent;
  background-image: none;
}

button:enabled,
[role='button']:enabled {
  cursor: pointer;
}

button:focus,
button:focus-visible {
  outline: 1px dotted;
  outline: 4px auto -webkit-focus-ring-color;
}

button:focus:not(:focus-visible) {
  outline: none !important;
}

.SwitchButton {
  font-size: 16px;
  position: relative;
  border-radius: 11px;
  display: block;
  width: 40px;
  height: 22px;
  flex-shrink: 0;
  border: 1px solid var(--swith-theme-border-color, rgba(60, 60, 67, 0.29));
  background-color: var(--switch-theme-bg-color, #f6f6f7);
  transition: border-color 0.25s;
}

[data-color-mode*=dark] .SwitchButton {
  border: 1px solid var(--swith-theme-border-color, rgba(60, 60, 67, 0.68));
  background-color: var(--switch-theme-bg-color, #313136);
}

.SwitchButton:hover {
  border-color: var(--swith-theme-hover-border-color, #8e8e93);
}

.check {
  position: absolute;
  top: 1px;
  /*rtl:ignore*/
  left: 1px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: var(--switch-theme-neutral-inverse, #ffffff);
  box-shadow: var(--switch-theme-shadow, 0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06));
  transition: transform 0.25s;
}

[data-color-mode*=dark] .check {
  background-color: var(--switch-theme-neutral-inverse, #000000);
}

.icon {
  position: relative;
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  overflow: hidden;
}

.icon :deep(svg) {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 12px;
  height: 12px;
  fill: var(--switch-theme-text, rgba(60, 60, 67, 0.75));
}

[data-color-mode*=dark] .icon :deep(svg) {
  fill: var(--switch-theme-text, rgba(255, 255, 245, 0.86));
  transition: opacity 0.25s;
}
</style>
