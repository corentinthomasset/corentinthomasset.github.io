<script lang="ts" setup>
const initialContainer = useTemplateRef<HTMLElement>('initial-container-el')
const dockContainer = useTemplateRef<HTMLElement>('dock-container-el')
const navContainer = useTemplateRef<HTMLElement>('nav-container-el')
const target = useTemplateRef<HTMLElement>('target-el')
const handle = useTemplateRef<HTMLElement>('handle-el')
const dragging = ref(false)
const draggable = ref(false)
const containers = [initialContainer, dockContainer, navContainer]
const metaStyle = ref<string>('')

const { x, y, style } = useDraggable(target, {
  handle: handle,
  initialValue: { x: 0, y: 0 },
  onStart: () => {
    dragging.value = draggable.value
    metaStyle.value = 'position: fixed;'
    if (typeof umami !== 'undefined') umami.track('dragging-action-bar')
  },
  onEnd: () => {
    const tragetRect = target.value?.getBoundingClientRect()
    containers.forEach((container) => {
      const containerRect = container.value?.getBoundingClientRect()
      if (
        containerRect &&
        tragetRect &&
        ((x.value >= containerRect?.x && x.value <= containerRect.x + containerRect.width && y.value >= containerRect?.y && y.value <= containerRect.y + containerRect.height) ||
          (x.value + tragetRect.width >= containerRect?.x &&
            x.value + tragetRect.width <= containerRect.x + containerRect.width &&
            y.value >= containerRect?.y &&
            y.value <= containerRect.y + containerRect.height) ||
          (x.value + tragetRect.width >= containerRect?.x &&
            x.value + tragetRect.width <= containerRect.x + containerRect.width &&
            y.value + tragetRect.height >= containerRect?.y &&
            y.value + tragetRect.height <= containerRect.y + containerRect.height) ||
          (x.value >= containerRect?.x &&
            x.value <= containerRect.x + containerRect.width &&
            y.value + tragetRect.height >= containerRect?.y &&
            y.value + tragetRect.height <= containerRect.y + containerRect.height))
      ) {
        draggable.value = false
        metaStyle.value = container.value?.getAttribute('data-container-style') || ''
        x.value = containerRect?.x || 0
        y.value = containerRect?.y || 0
      }
    })
    dragging.value = false
  },
})

onMounted(() => {
  const containerRect = initialContainer.value?.getBoundingClientRect()
  x.value = containerRect?.x || 0
  y.value = containerRect?.y || 0
})
</script>

<template>
  <div class="block" @mousedown.capture="(e) => e.preventDefault()">
    <div ref="initial-container-el" :class="['m-auto h-16 w-full rounded-full transition delay-100 duration-300 md:w-96', dragging ? 'bg-foreground/5' : '']" data-container-style="position: static;">
      <div
        ref="target-el"
        :class="['bg-muted/40 border-border/50 @container z-50 m-auto flex h-16 w-full items-center justify-start gap-4 rounded-full border px-6 backdrop-blur-sm md:w-96 dark:shadow-2xl']"
        :style="style + metaStyle"
      >
        <UIcon
          ref="handle-el"
          class="text-muted-foreground/50 hidden size-4 cursor-move md:block"
          name="i-lucide-grip"
          @mousedown="
            () => {
              draggable = true
              dragging = true
            }
          "
        />
        <slot />
      </div>
    </div>
    <div
      ref="nav-container-el"
      :class="['fixed top-4 right-4 left-4 m-auto h-16 rounded-full transition duration-300', dragging ? 'bg-foreground/5 backdrop-blur-sm' : '']"
      data-container-style="position: fixed; width: calc(100% - 2 * (var(--spacing) * 4));"
    ></div>
    <div
      ref="dock-container-el"
      :class="['fixed bottom-2 left-1/2 m-auto h-16 w-full max-w-4xl -translate-x-1/2 rounded-full transition delay-150 duration-300', dragging ? 'bg-foreground/5 backdrop-blur-sm' : '']"
      data-container-style="position: fixed; width: 100%; max-width: var(--container-4xl);"
    ></div>
  </div>
</template>
