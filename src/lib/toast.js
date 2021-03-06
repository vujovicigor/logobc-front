import _Toast from './toast.svelte'
import {  browser } from '$app/env';

export default class Toast {
  constructor (opts) {
    this.opts = Object.assign({
      position: 'bottom-center',
      duration: 2000
    }, opts)
  }

  show (msg, opts = {}) {
    this._show(msg, opts, 'default')
  }

  info (msg, opts = {}) {
    this._show(msg, opts, 'info')
  }

  success (msg, opts = {}) {
    this._show(msg, opts, 'success')
  }

  error (msg, opts = {}) {
    this._show(msg, opts, 'error')
  }

  _show (msg, opts, type) {
    const _opts = Object.assign({}, this.opts, opts)
    const t = new _Toast({
      target: browser ? document.querySelector('body'):null,
      props: {
        msg,
        type,
        position: _opts.position
      }
    })

    setTimeout(() => {
      t.$set({ type: type + ' ' + 'anim' })
    }, 0)

    setTimeout(() => {
      t.$destroy()
    }, _opts.duration)
  }
}