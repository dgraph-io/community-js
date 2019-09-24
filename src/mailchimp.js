function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
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
	exdays = exdays || 60
	var expires = new Date()
	expires.setTime(expires.getTime() + (exdays*24*60*60*1000))
	document.cookie = `${cname}=${cvalue};expires=${expires.toUTCString()};domain=.dgraph.io;path=/`
	document.cookie = `${cname}=${cvalue};expires=${expires.toUTCString()};path=/`
}

function startCookiePush() {
  setInterval(function() {
  	var cookieVal = getCookie('MCPopupClosed')
  	if (cookieVal) {
  		// Unlike mailchimps standard behavior
      // setCookie pushes cookie to all *.dgraph.io subdomains
  		setCookie('MCPopupClosed', cookieVal, 10)
  	}
  }, 3000)
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

let mailchimpDojoLoader = null
/*
  JS function implementing second generated script tag from above.
*/
function doMailchimpRequire(doStartCall = false) {
  window.dojoRequire(["mojo/signup-forms/Loader"], function(L) {
    mailchimpDojoLoader = L
    doStartCall && doMailchimpStartCall()
  })
}

function doMailchimpStartCall() {
  mailchimpDojoLoader.start({
    "baseUrl":"mc.us17.list-manage.com",
    "uuid":"f6c6a28bb40d10e26b88fff1c",
    "lid":"e85c448cac",
    "uniqueMethods":true
  })
}

export function initMailchimp() {
  const script = document.createElement('script')
  script.setAttribute('type', 'text/javascript')
  script.setAttribute('src', '//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js')
  script.setAttribute('data-dojo-config', 'usePlainJson: true, isDebug: false')

  document.body.appendChild(script)

  script.onload = function () {
    doMailchimpRequire()
    startCookiePush()
  }
}

export function openMailchimpPopup() {
  // Terminate currently open mailchimp modal
  var elements = document.getElementsByClassName('mc-modal')
	while(elements.length > 0) {
		elements[0].parentNode.parentNode.removeChild(elements[0].parentNode)
	}

	setCookie('MCPopupClosed', '', -10)
  doMailchimpStartCall()
}
