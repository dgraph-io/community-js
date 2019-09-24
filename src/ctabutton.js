import $ from 'jquery'

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

export function createCtaButton() {
  document.body.insertAdjacentHTML('beforeend', ctaHtml)

  $('.community-cta-wrapper .cta-button').on('click', function(e) {
  	e.stopPropagation()
  	e.preventDefault()
  	$(this).closest('.community-cta-wrapper').toggleClass('open')
  })

  $('.community-cta-wrapper .community-link').on('click', function(e) {
  	$(this).closest('.community-cta-wrapper').toggleClass('open')
  })

  $('.community-cta-wrapper .community-link.mailchimp').on('click', function(e) {
    openMailchimpPopup()
  })

  $(document).click(function() {
  	$('.community-cta-wrapper').removeClass('open')
  })
}
