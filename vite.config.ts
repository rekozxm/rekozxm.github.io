import { defineConfig } from 'vite'
import * as path from 'path'
import { css, server, build, plugins } from './conf'

export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@assets': path.resolve(__dirname, './frame/assets'),
      '@styles': path.resolve(__dirname, './frame/styles'),
      '@router': path.resolve(__dirname, './frame/router'),
      '@types': path.resolve(__dirname, './frame/types'),
      '@component': path.resolve(__dirname, './frame/component'),
      '@container': path.resolve(__dirname, './frame/container')
    }
  },
  css,
  plugins,
  server,
  build
})
