<script setup lang="ts">
    const initialContainer = useTemplateRef<HTMLElement>('initial-container-el')
    const dockContainer = useTemplateRef<HTMLElement>('dock-container-el')
    const navContainer = useTemplateRef<HTMLElement>('nav-container-el')
    const target = useTemplateRef<HTMLElement>('target-el')
    const handle = useTemplateRef<HTMLElement>('handle-el')
    const dragging = ref(false)
    const draggable = ref(false)
    const targetIntersect = ref(false)
    const containers = [initialContainer, dockContainer, navContainer]
    const metaStyle = ref<string>('')

    const { x, y, style } = useDraggable(target, {
        handle: handle,
        initialValue: {x: 0, y: 0},
        onStart: () => { dragging.value = draggable.value; metaStyle.value = "position: fixed;" },
        onEnd: () => { 
            const tragetRect = target.value?.getBoundingClientRect()
            containers.forEach(container => {
                const containerRect = container.value?.getBoundingClientRect()
                if (containerRect && tragetRect && (
                    (x.value >= containerRect?.x && x.value <= containerRect.x + containerRect.width && y.value >= containerRect?.y && y.value <= containerRect.y + containerRect.height) ||
                    (x.value + tragetRect.width >= containerRect?.x && x.value + tragetRect.width <= containerRect.x + containerRect.width && y.value >= containerRect?.y && y.value <= containerRect.y + containerRect.height) || 
                    (x.value + tragetRect.width>= containerRect?.x && x.value + tragetRect.width <= containerRect.x + containerRect.width && y.value + tragetRect.height >= containerRect?.y && y.value + tragetRect.height <= containerRect.y + containerRect.height) ||
                    (x.value >= containerRect?.x && x.value <= containerRect.x + containerRect.width && y.value + tragetRect.height >= containerRect?.y && y.value + tragetRect.height <= containerRect.y + containerRect.height))
                ) {
                    draggable.value = false
                    metaStyle.value = container.value?.getAttribute('data-container-style') || ''
                    x.value = containerRect?.x || 0
                    y.value = containerRect?.y || 0
                }
            })
            dragging.value = false 
        },
        onMove: () => {
            console.log(dragging.value, draggable.value, targetIntersect.value)
        }
    })

    onMounted(() => {
        const containerRect = initialContainer.value?.getBoundingClientRect()
        x.value = containerRect?.x || 0
        y.value = containerRect?.y || 0
    })
</script>

<template>
    <div @mousedown.capture="(e) => e.preventDefault()" class="hidden md:block">
        <div ref="initial-container-el" :class="['w-96 h-16 rounded-full m-auto transition duration-300 delay-100', dragging?'bg-foreground/5':'']" data-container-style="position: static;">
            <div ref="target-el" :class="['@container w-96 h-16 px-6 z-50 flex items-center justify-start gap-4 rounded-full m-auto bg-muted/40 dark:shadow-2xl border border-border/50 backdrop-blur-sm']" :style="style + metaStyle">
                <UIcon ref="handle-el" name="i-lucide-grip" class="size-4 text-muted-foreground/50 cursor-move" @mousedown="draggable = true; dragging = true"/>
                <slot/>
            </div>
        </div>
        <div ref="nav-container-el" :class="['fixed top-4 left-4 right-4 h-16 rounded-full m-auto transition duration-300', dragging?'bg-foreground/5 backdrop-blur-sm':'']" data-container-style="position: fixed; width: calc(100% - 2 * (var(--spacing) * 4));"></div>
        <div ref="dock-container-el" :class="['fixed bottom-2 w-full max-w-4xl left-1/2 -translate-x-1/2 h-16 rounded-full m-auto transition duration-300 delay-150', dragging?'bg-foreground/5 backdrop-blur-sm':'']" data-container-style="position: fixed; width: 100%; max-width: var(--container-4xl);"></div>
    </div>
</template>