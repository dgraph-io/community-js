function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return "";
}

function setCookie(cname, cvalue, exdays) {
  exdays = exdays || 60;
  var expires = new Date();
  expires.setTime(expires.getTime() + exdays * 24 * 60 * 60 * 1000);
  document.cookie = "".concat(cname, "=").concat(cvalue, ";expires=").concat(expires.toUTCString(), ";domain=.dgraph.io;path=/");
  document.cookie = "".concat(cname, "=").concat(cvalue, ";expires=").concat(expires.toUTCString(), ";path=/");
}

function startCookiePush() {
  setInterval(function () {
    var cookieVal = getCookie('MCPopupClosed');

    if (cookieVal) {
      // Unlike mailchimps standard behavior
      // setCookie pushes cookie to all *.dgraph.io subdomains
      setCookie('MCPopupClosed', cookieVal, 10);
    }
  }, 3000);
}
/**

Mailchimp code generated at:
https://us17.admin.mailchimp.com/lists/signup-forms/popup/editor?site=true&id=46071#0

<script
  type="text/javascript"
  src="//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js"
  data-dojo-config="usePlainJson: true, isDebug: false"
></script>

<script type="text/javascript">
  window.dojoRequire(["mojo/signup-forms/Loader"], function(L) {
    L.start({"baseUrl":"mc.us17.list-manage.com","uuid":"f6c6a28bb40d10e26b88fff1c","lid":"e85c448cac","uniqueMethods":true})
  })
</script>

*/


var mailchimpDojoLoader = null;
/*
  JS function implementing second generated script tag from above.
*/

function doMailchimpRequire() {
  var doStartCall = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  window.dojoRequire(["mojo/signup-forms/Loader"], function (L) {
    mailchimpDojoLoader = L;
    doStartCall && doMailchimpStartCall();
  });
}

function doMailchimpStartCall() {
  mailchimpDojoLoader.start({
    "baseUrl": "mc.us17.list-manage.com",
    "uuid": "f6c6a28bb40d10e26b88fff1c",
    "lid": "e85c448cac",
    "uniqueMethods": true
  });
}

function initMailchimp() {
  var script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', '//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js');
  script.setAttribute('data-dojo-config', 'usePlainJson: true, isDebug: false');
  document.body.appendChild(script);

  script.onload = function () {
    doMailchimpRequire();
    startCookiePush();
  };
}
function openMailchimpPopup() {
  // Terminate currently open mailchimp modal
  var elements = document.getElementsByClassName('mc-modal');

  while (elements.length > 0) {
    elements[0].parentNode.parentNode.removeChild(elements[0].parentNode);
  }

  setCookie('MCPopupClosed', '', -10);
  doMailchimpStartCall();
}

var ctaHtml = "\n<div class='community-cta-wrapper'>\n  <link rel='stylesheet' href='https://unpkg.com/font-awesome@4.7.0/css/font-awesome.min.css'>\n  <a href='#community-links' class='cta-button'>Join our community</a>\n  <ul>\n    <li>\n      <a href='#' class='community-link mailchimp'>\n        <i class='fa fa-envelope-o'></i><span>Subscribe</span>\n      </a>\n    </li>\n    <li>\n      <a href='https://github.com/dgraph-io/dgraph' target='_blank' class='community-link'>\n        <i class='fa fa-github'></i><span>Github</span>\n      </a>\n    </li>\n    <li>\n      <a href='https://slack.dgraph.io/' target='_blank' class='community-link'>\n        <i class='fa fa-slack'></i><span>Slack</span>\n      </a>\n    </li>\n    <li>\n      <a href='https://discuss.dgraph.io/' target='_blank' class='community-link'>\n        <i class='fa fa-comments-o'></i><span>Forum</span>\n      </a>\n    </li>\n  </ul>\n</div>\n";

var $all = function $all(query) {
  return document.body.querySelectorAll(query);
};

var $el = function $el(query) {
  return document.body.querySelector(query);
};

var onClick = function onClick(el, handler) {
  return el.addEventListener('click', handler);
};

var toggleClass = function toggleClass(el, className) {
  return el.classList.toggle(className);
};

function createCtaButton() {
  document.body.insertAdjacentHTML('beforeend', ctaHtml);
  onClick($el('.community-cta-wrapper .cta-button'), function (e) {
    e.stopPropagation();
    e.preventDefault();
    toggleClass($el('body .community-cta-wrapper'), 'open');
  });
  $all('.community-cta-wrapper .community-link').forEach(function (el) {
    return onClick(el, function () {
      return toggleClass($el('body .community-cta-wrapper'), 'open');
    });
  });
  onClick($el('.community-cta-wrapper .community-link.mailchimp'), openMailchimpPopup);
  onClick(document, function () {
    return $el('body .community-cta-wrapper').classList.remove('open');
  });
}

var Dgraph = window.DgraphJS = window.DgraphJS || {};

Dgraph.init = function () {
  initMailchimp();
  createCtaButton();
};

Dgraph.openMailchimpPopup = openMailchimpPopup;
Dgraph.createCtaButton = createCtaButton;
console.info('Dgraph Community JS Loaded');
window.setTimeout(openMailchimpPopup, 20 * 1000);

if (!Dgraph.disableAutoInit) {
  Dgraph.init();
}
