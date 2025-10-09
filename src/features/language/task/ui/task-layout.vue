<template>
  <div class="flex flex-col items-center gap-5 grow-1 pt-5">
    <slot name="header" />

    <div class="flex flex-col justify-center items-center grow-1 w-full max-w-[650px]">
      <slot />
    </div>

    <div class="w-full flex item-center items-center gap-4">
      <slot name="footer" />
    </div>
  </div>
</template>
