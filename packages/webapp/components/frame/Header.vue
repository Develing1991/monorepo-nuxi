<template>
  <header>
    <div>
      <slot name="left" />
    </div>
    <div>
      <slot name="center" />
    </div>
    <div>
      <slot name="right" />
    </div>
  </header>
</template>

  <style lang="scss" scoped>
  header{
      @apply flex justify-between px-2
  }
  </style>
