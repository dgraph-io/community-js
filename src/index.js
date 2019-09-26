import { startAnalytics } from './analytics'
import { initMailchimp, openMailchimpPopup } from './mailchimp'
import { createCtaButton } from './ctabutton'
import { injectCssLink } from './util'

const Dgraph = window.DgraphJS = window.DgraphJS || {}

function calcCssUrl() {
  let src = document.currentScript && document.currentScript.src
  src = src || '//unpkg.com/@dgraph-io/community'
  return `${src}/dist/index.iife.css`
}

Dgraph.init = () => {
  injectCssLink(calcCssUrl())
  initMailchimp()
  createCtaButton()
  startAnalytics()
}

Dgraph.openMailchimpPopup = openMailchimpPopup

Dgraph.createCtaButton = createCtaButton

console.info('Dgraph Community JS Loaded')

if (!Dgraph.disableAutoInit) {
  Dgraph.init()
}
