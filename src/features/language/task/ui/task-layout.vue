<template>
  <div class="flex flex-col gap-5 grow-1 pt-5">
    <slot name="header" />

    <div class="flex flex-col grow-1">
      <slot />
    </div>

    <div class="w-full flex item-center gap-4">
      <slot name="footer" />
    </div>
  </div>
</template>
