<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{numDots: number, colorDots: string}>()

const container = ref<HTMLDivElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null
let animationId: number | null = null
const dots: Dot[] = []

class Dot {
  x:  number
  y:  number
  vx: number
  vy: number
  radius: number
  opacity: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
    this.vx = 0
    this.vy = Math.random() * -0.5
    this.radius = 1.5
    this.opacity = Math.random() * 0.5 + 0.1
  }

  update() {
    if (!canvas.value) return
    this.x += this.vx
    this.y += this.vy

    if (this.x <= 0 || this.x >= canvas.value.width) {
      this.vx = -this.vx
    }
    if (this.y <= 0 || this.y >= canvas.value.height) {
      this.y = canvas.value.height
    }

    this.x = Math.max(0, Math.min(canvas.value.width, this.x))
    this.y = Math.max(0, Math.min(canvas.value.height, this.y)) 
  }

  draw() {
    if (!ctx) return
    ctx.save()
    ctx.globalAlpha = this.opacity
    ctx.fillStyle = props.colorDots
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
  }
}

function initDots() {
  if (!canvas.value) return
  dots.length = 0
  for (let i = 0; i < props.numDots; i++) {
    dots.push(new Dot(
      Math.random() * canvas.value.width,
      Math.random() * canvas.value.height
    ))
  }
}

function animate() {
  if (!ctx || !canvas.value) return
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)

  dots.forEach(dot => {
    dot.update()
    dot.draw()
  })

  animationId = requestAnimationFrame(animate)
}

function initCanvas() {
  if (!canvas.value || !container.value) return
  const rect = container.value.getBoundingClientRect()
  canvas.value.width = rect.width
  canvas.value.height = rect.height
  ctx = canvas.value.getContext('2d')
  
  if (!ctx ) return
  ctx.fillStyle = '#000'
  ctx.fillRect(0, 0, canvas.value.width, canvas.value.height)

  initDots()
  animate()
}

// Handle window resize
function handleResize() {
  if (!canvas.value || !container.value) return
  
  const rect = container.value.getBoundingClientRect()
  canvas.value.width = rect.width
  canvas.value.height = rect.height
  
  initDots()
}

onMounted(() => {
  initCanvas()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div ref="container" class="w-full h-full">
      <canvas ref="canvas" />
  </div>
</template>