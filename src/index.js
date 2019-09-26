import { startAnalytics } from './analytics'
import { initMailchimp, openMailchimpPopup } from './mailchimp'
import { createCtaButton } from './ctabutton'
import { injectCssLink } from './util'

import './main.scss'

const Dgraph = window.DgraphJS = window.DgraphJS || {}

Dgraph.init = () => {
  injectCssLink('//unpkg.com/@dgraph-io/community/dist/index.iife.css')
  initMailchimp()
  createCtaButton()
  startAnalytics()
}

Dgraph.openMailchimpPopup = openMailchimpPopup

Dgraph.createCtaButton = createCtaButton

console.info('Dgraph Community JS Loaded')

window.setTimeout(openMailchimpPopup, 20 * 1000)

if (!Dgraph.disableAutoInit) {
  Dgraph.init()
}
