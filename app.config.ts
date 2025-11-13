export default defineAppConfig({
    ui: {
        carousel: {
            slots: {
                viewport: 'overflow-visible'
            }
        },
      modal: {
          variants: {
            ghost: {
              true: {content: 'bg-transparent ring-transparent shadow-none', overlay: 'bg-background/60'}
            }
          }
      },
      toast: {
          variants: {
            color: {
              ghost: {root: 'bg-muted/40 dark:shadow-2xl border border-border/50 backdrop-blur-sm rounded-2xl shadow-lg ring-transparent inline-flex', description: 'text-md text-foreground'}
            }
          }
      }
    }
})