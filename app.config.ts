export default defineAppConfig({
  app: {
    head: {
      scripts: [
        {
          src: 'https://telemetry.corentinthomasset.com/script.js',
          'data-website-id': '079d5604-e5c8-47b8-b059-3c0a46552223',
          async: true,
          defer: true,
        },
      ],
    },
  },
  ui: {
    carousel: {
      slots: {
        viewport: 'overflow-visible',
      },
    },
    modal: {
      variants: {
        ghost: {
          true: { content: 'bg-transparent ring-transparent shadow-none', overlay: 'bg-background/60' },
        },
      },
    },
    toast: {
      variants: {
        color: {
          ghost: { root: 'bg-muted/40 dark:shadow-2xl border border-border/50 backdrop-blur-sm rounded-2xl shadow-lg ring-transparent inline-flex', description: 'text-md text-foreground' },
        },
      },
    },
  },
})
