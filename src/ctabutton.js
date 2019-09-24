import { openMailchimpPopup } from './mailchimp'

import './community-cta.scss'

const ctaHtml = `
<div class='community-cta-wrapper'>
  <link rel='stylesheet' href='https://unpkg.com/font-awesome@4.7.0/css/font-awesome.min.css'>
  <a href='#community-links' class='cta-button'>Join our community</a>
  <ul>
    <li>
      <a href='#' class='community-link mailchimp'>
        <i class='fa fa-envelope-o'></i><span>Subscribe</span>
      </a>
    </li>
    <li>
      <a href='https://github.com/dgraph-io/dgraph' target='_blank' class='community-link'>
        <i class='fa fa-github'></i><span>Github</span>
      </a>
    </li>
    <li>
      <a href='https://slack.dgraph.io/' target='_blank' class='community-link'>
        <i class='fa fa-slack'></i><span>Slack</span>
      </a>
    </li>
    <li>
      <a href='https://discuss.dgraph.io/' target='_blank' class='community-link'>
        <i class='fa fa-comments-o'></i><span>Forum</span>
      </a>
    </li>
  </ul>
</div>
`

const $all = query => document.body.querySelectorAll(query)
const $el = query => document.body.querySelector(query)

const onClick = (el, handler) => el.addEventListener('click', handler)
const toggleClass = (el, className) => el.classList.toggle(className)

export function createCtaButton() {
  document.body.insertAdjacentHTML('beforeend', ctaHtml)

  onClick(
    $el('.community-cta-wrapper .cta-button'),
    e => {
    	e.stopPropagation()
    	e.preventDefault()
    	toggleClass($el('body .community-cta-wrapper'), 'open')
    })

  $all('.community-cta-wrapper .community-link').forEach(
    el => onClick(
      el,
      () => toggleClass($el('body .community-cta-wrapper'), 'open'),
    )
  )

  onClick(
    $el('.community-cta-wrapper .community-link.mailchimp'),
    openMailchimpPopup,
  )

  onClick(
    document,
    () => $el('body .community-cta-wrapper').classList.remove('open'),
  )
}
