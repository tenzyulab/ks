#!/usr/bin/env zx

import 'zx/globals'
import { VITE_REACT } from './templates'

const main = async () => {
  const basepath = process.argv[3] ?? '.'

  await $`mkdir -p ${basepath}`
  Object.entries(VITE_REACT).forEach(([filename, content]) => {
    $`echo ${content} > ${basepath}/${filename}`
  })
  await $`pnpm update`
  await $`pnpm outdated`
}

main()
