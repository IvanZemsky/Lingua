<template>
  <div class="flex flex-col gap-5 h-full">
    <slot name="header" />

    <div class="grow-1">
      <slot/>
    </div>

    <slot name="footer" />
  </div>
</template>
