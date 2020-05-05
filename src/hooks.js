import { isFunction } from '@hanzo/utils'
import midstream from 'midstream'
import { useState } from 'react'

export default function (config, opts) {
  const [dst] = useState(() => opts.dst || opts.destination || {})
  const [err] = useState(() => opts.err || opts.errors || {})

  // standard force rerender hack
  const [, setTick] = useState(0)

  const [ms] = useState(() => {
    let tick = 0

    return midstream(config, {
      dst: (name, value) => {
        if (isFunction(dst)) {
          dst(name, value)
        } else {
          dst[name] = value
        }
        setTick(tick++)
      },
      // err behaves just like dst
      err: (name, value) => {
        if (isFunction(err)) {
          err(name, value)
        } else {
          err[name] = value
        }
        setTick(tick++)
      },
    })
  })

  const ret = { ...ms }

  return Object.assign(ret, {
    get dst() {
      return dst
    },
    get err() {
      return err
    },
  })
}
