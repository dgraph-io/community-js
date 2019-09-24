import { initMailchimp, openMailchimpPopup } from './mailchimp'

import { createCtaButton } from './ctabutton'

import './main.scss'

const Dgraph = window.DgraphJS = window.DgraphJS || {}

Dgraph.init = () => {
  initMailchimp()
  createCtaButton()
}

Dgraph.openMailchimpPopup = openMailchimpPopup

Dgraph.createCtaButton = createCtaButton

console.info('Dgraph Community JS Loaded')

window.setTimeout(openMailchimpPopup, 20 * 1000)
