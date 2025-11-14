<template>
  <span class="encrypted-text">
    <span v-for="(char, index) in displayText" :key="index" :class="['letter', { space: char === ' ' }]" :style="{ animationDelay: `${index * 0.1}s` }">
      {{ char }}
    </span>
  </span>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface Props {
  text: string
  speed?: number
  pauseDuration?: number
}

const props = withDefaults(defineProps<Props>(), {
  speed: 100, // milliseconds between character changes
  pauseDuration: 2000, // milliseconds to show final text
})

const displayText = ref<string[]>([])
const isDecrypted = ref(false)
const decryptedUntil = ref(-1) // Index of last decrypted character
let animationInterval: number | null = null
let decryptionTimeout: number | null = null
let pauseTimeout: number | null = null

// Characters to cycle through for encryption effect
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

// Initialize display text with random characters
const initializeText = () => {
  displayText.value = props.text.split('').map((char) => {
    if (char === ' ') return ' '
    const randomChar = chars[Math.floor(Math.random() * chars.length)]
    return randomChar || char
  })
  decryptedUntil.value = -1
  isDecrypted.value = false
}

// Continuous animation loop
const startContinuousAnimation = () => {
  const animate = () => {
    for (let i = 0; i < props.text.length; i++) {
      const currentChar = props.text[i]
      if (currentChar === ' ') {
        displayText.value[i] = ' '
        continue
      }

      if (i <= decryptedUntil.value) {
        // Character is decrypted, keep it correct
        displayText.value[i] = currentChar || ''
      } else {
        // Character is encrypted, keep rotating
        const randomChar = chars[Math.floor(Math.random() * chars.length)]
        displayText.value[i] = randomChar || ''
      }
    }

    animationInterval = window.setTimeout(animate, props.speed)
  }

  animate()
}

// Start decryption sequence
const startDecryptionSequence = () => {
  let currentIndex = 0
  let iterationCount = 0
  const maxIterations = 5

  const decryptNextChar = () => {
    if (currentIndex >= props.text.length) {
      // All characters decrypted
      isDecrypted.value = true

      // Pause, then start encryption sequence
      pauseTimeout = window.setTimeout(() => {
        startEncryptionSequence()
      }, props.pauseDuration)
      return
    }

    const currentChar = props.text[currentIndex]
    if (currentChar === ' ') {
      decryptedUntil.value = currentIndex
      currentIndex++
      iterationCount = 0
      decryptionTimeout = window.setTimeout(decryptNextChar, props.speed)
      return
    }

    if (iterationCount >= maxIterations) {
      // Reveal the correct character
      decryptedUntil.value = currentIndex
      currentIndex++
      iterationCount = 0
    } else {
      iterationCount++
    }

    decryptionTimeout = window.setTimeout(decryptNextChar, props.speed)
  }

  decryptNextChar()
}

// Start encryption sequence
const startEncryptionSequence = () => {
  isDecrypted.value = false
  let currentIndex = props.text.length - 1

  const encryptNextChar = () => {
    if (currentIndex < 0) {
      // All characters encrypted
      decryptedUntil.value = -1

      // Short pause, then start decryption again
      pauseTimeout = window.setTimeout(() => {
        startDecryptionSequence()
      }, 2000)
      return
    }

    decryptedUntil.value = currentIndex - 1
    currentIndex--

    decryptionTimeout = window.setTimeout(encryptNextChar, props.speed)
  }

  encryptNextChar()
}

const cleanup = () => {
  if (animationInterval) {
    window.clearTimeout(animationInterval)
    animationInterval = null
  }
  if (decryptionTimeout) {
    window.clearTimeout(decryptionTimeout)
    decryptionTimeout = null
  }
  if (pauseTimeout) {
    window.clearTimeout(pauseTimeout)
    pauseTimeout = null
  }
}

onMounted(() => {
  initializeText()
  // Start continuous character rotation
  startContinuousAnimation()
  // Start decryption sequence after a short delay
  setTimeout(() => {
    startDecryptionSequence()
  }, 500)
})

onUnmounted(() => {
  cleanup()
})
</script>

<style scoped>
.encrypted-text {
  display: inline-block;
  font-family: monospace;
  font-weight: bold;
  opacity: 1;
}

.letter {
  text-transform: uppercase;
  display: inline-block;
  transition: color 0.1s ease;
}

.letter.space {
  width: 0.5em;
}

.encrypted-text {
  text-shadow: 0 0 5px currentColor;
}
</style>
