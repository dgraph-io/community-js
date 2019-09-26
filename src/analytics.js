import { injectScript } from './util'

/*
  Analytics scripts for Dgraph sites
*/

/*
  tour GA code copied from
  https://analytics.google.com/analytics/web/#/a75364122w145443106p150171855/admin/tracking/tracking-code/

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-75364122-2"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-75364122-2');
    </script>
*/
function loadGoogleAnalytics(property) {
  const propertyMap = {
    'blog': 'UA-75364122-5',
    'dgraph.io': 'UA-75364122-1',
    'docs': 'UA-75364122-3',
    'tour': 'UA-75364122-2',
  }

  const gaId = propyMap[property]
  if (!gaId) {
    console.log('No known GA for ', property)
    return;
  }

  const script = injectScript(
    `https://www.googletagmanager.com/gtag/js?id=${gaId}`,
  ).onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', gaId);
  }
}

export function startAnalytics() {
  if (window.location.hostname === 'tour.dgraph.io') {
    loadGoogleAnalytics('tour')
  }
}
