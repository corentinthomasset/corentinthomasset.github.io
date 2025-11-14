<script lang="ts" setup>
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'
import { countries, flag, name } from 'country-emoji'
import { useStorage } from '@vueuse/core'

const toast = useToast()
const store = useStorage('hi-store', { greeted: false, name: 'Bob', counter: 0 })

type SelectItem = { label: string; value: string }
const countrySelectItems = computed(() => {
  const items: SelectItem[] = []
  Object.keys(countries).forEach((country) => {
    items.push({
      label: `${flag(country)} ${name(country)}`,
      value: country,
    })
  })
  return items
})

const schema = z.object({
  name: z.string('Huh, Looks like you made a typo').min(3).max(20),
  country: z.string('Where are you from?').length(2),
})

type Schema = z.output<typeof schema>
const state = reactive<Partial<Schema>>({
  name: store.value.name,
  country: 'CA',
})

function sayHi() {
  if (!store.value.greeted) {
    toast.add({ title: 'Corentin', description: `Hi from Canada ${flag('CA')}!`, progress: false, close: false, color: 'ghost' })
    store.value.greeted = true
  }
}

function onSubmit(event: FormSubmitEvent<Schema>) {
  const counter = store.value.counter
  toast.add({ title: event.data.name, description: `Hi ${'again '.repeat(counter)} from ${name(event.data.country)} ${flag(event.data.country)}!`, progress: false, close: false, color: 'ghost' })
  if (counter === 0) {
    setTimeout(() => {
      toast.add({
        title: 'Corentin',
        description: `Thanks so much for stopping by! 🙌 I'd love to chat about tech, opportunities, or anything else on your mind. Feel free to reach out via email or LinkedIn. Let's connect!`,
        progress: false,
        close: false,
        color: 'ghost',
        duration: 10000,
      })
    }, 1000)
  }
  if (counter > 0 && counter < 3) {
    setTimeout(() => {
      toast.add({ title: 'Corentin', description: `Hi ${'again '.repeat(counter)} from ${name('CA')} ${flag('CA')}!`, progress: false, close: false, color: 'ghost' })
    }, 1000)
  }
  if (counter === 3) {
    setTimeout(() => {
      toast.add({ title: 'Corentin', description: `Fanatic clicker mode unlocked 🔥`, progress: false, close: false, color: 'ghost' })
    }, 1000)
  }
  store.value.name = event.data.name
  store.value.counter += 1
}
</script>

<template>
  <UModal
    :ui="{ content: 'bg-transparent ring-transparent shadow-none', overlay: 'bg-background/60' }"
    @update:open="
      (value: boolean) => {
        if (value) sayHi()
      }
    "
  >
    <button
      class="text-md flex h-10 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl border border-green-400 bg-green-500 px-4 font-semibold text-green-100 shadow hover:bg-green-400 focus:outline-none @md:size-10 @md:border-none @md:bg-transparent @md:px-0 @md:shadow-none @md:hover:bg-black/20 dark:shadow-xl"
    >
      👋 <span class="@md:hidden">Say hi!</span>
    </button>
    <template #content>
      <UForm :schema="schema" :state="state" class="w-full max-w-4xl p-6 text-xl" @submit="onSubmit">
        <div class="bg-muted/50 border-border/50 flex items-center justify-between rounded-2xl border p-6 shadow backdrop-blur-sm dark:shadow-2xl" v-motion-slide-bottom>
          <div class="font-semibold">
            <div class="text-sm">{{ state.name || 'Bob' }}</div>
            Hi from {{ name(state.country || 'CA') }} {{ flag(state.country || 'CA') }}
          </div>
          <button
            class="text-md flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-green-400 bg-green-500 text-xl font-semibold text-green-100 shadow hover:bg-green-400 focus:outline-none dark:shadow-xl"
            type="submit"
          >
            <UIcon name="i-lucide-send-horizontal" />
          </button>
        </div>
        <div class="bg-muted/50 border-border/50 mt-4 flex flex-col gap-4 rounded-2xl border p-6 shadow backdrop-blur-sm dark:shadow-2xl" v-motion-slide-bottom :delay="100">
          <UFormField label="What's your name?" name="name" class="flex-1">
            <UInput v-model="state.name" placeholder="Bob" size="xl" class="w-full" />
          </UFormField>
          <UFormField label="Where are your form?" name="country" class="flex-1">
            <USelectMenu v-model="state.country" :items="countrySelectItems" class="w-full" size="xl" value-key="value" />
          </UFormField>
        </div>
      </UForm>
    </template>
  </UModal>
</template>
