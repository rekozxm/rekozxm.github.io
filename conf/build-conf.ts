import { BuildOptions } from 'vite'

export const build: BuildOptions = {
  outDir: 'docs',
  rollupOptions: {
    input: ['/404.html', '/index.html']
  }
}
