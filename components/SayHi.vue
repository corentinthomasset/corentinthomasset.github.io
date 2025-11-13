<script lang="ts" setup>
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'
import { countries, flag, name } from 'country-emoji'
import { useStorage } from '@vueuse/core'

const toast = useToast()
const store = useStorage('hi-store', { greeted: false, name: 'Bob', counter: 0 })

type SelectItem = { label: string, value: string }
const countrySelectItems = computed(() => {
  const items: SelectItem[] = []
  Object.keys(countries).forEach(country => {
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
  toast.add({ title: event.data.name,  description: `Hi ${'again '.repeat(store.value.counter)} from ${name(event.data.country)} ${flag(event.data.country)}!`, progress: false, close: false, color: 'ghost' })
  store.value.name = event.data.name
  store.value.counter += 1
}
</script>

<template>
  <UModal :ui="{content: 'bg-transparent ring-transparent shadow-none', overlay: 'bg-background/60'}" @update:open="(value: boolean) => {if (value) sayHi()}">
    <button
      class="bg-green-500 hover:bg-green-400 dark:shadow-xl text-green-100 shadow border border-green-400 cursor-pointer rounded-xl h-10 shrink-0 text-md flex items-center justify-center px-4 gap-2 font-semibold focus:outline-none">
      👋 Say hi!
    </button>
    <template #content>
      <UForm :schema="schema" :state="state" class="w-full max-w-4xl p-6 text-xl" @submit="onSubmit">
        <div class="flex items-center justify-between p-6 bg-muted/50 dark:shadow-2xl border border-border/50 backdrop-blur-sm rounded-2xl shadow" v-motion-slide-bottom>
          <div class="font-semibold">
            <div class="text-sm">{{ state.name }}</div>
            Hi from {{ name(state.country || 'CA') }} {{ flag(state.country || 'CA') }}
          </div>
          <button class="bg-green-500 hover:bg-green-400 dark:shadow-xl text-green-100 shadow border border-green-400 cursor-pointer rounded-xl size-10 shrink-0 text-md flex items-center justify-center text-xl font-semibold focus:outline-none" type="submit">
            <UIcon name="i-lucide-send-horizontal" />
          </button>
        </div>
        <div class="flex flex-col gap-4 p-6 bg-muted/50 dark:shadow-2xl border border-border/50 backdrop-blur-sm rounded-2xl shadow mt-4" v-motion-slide-bottom :delay="100">
          <UFormField label="What's your name?" name="name" class="flex-1">
            <UInput v-model="state.name" placeholder="Bob" size="xl" class="w-full"/>
          </UFormField>
          <UFormField label="Where are your form?" name="country" class="flex-1">
            <USelectMenu v-model="state.country" :items="countrySelectItems" class="w-full" size="xl" value-key="value"/>
          </UFormField>
        </div>
      </UForm>
    </template>
  </UModal>
</template>