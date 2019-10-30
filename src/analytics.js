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
function loadGoogleAnalytics() {
  const propertyMap = {
    'blog.dgraph.io': 'UA-75364122-5',
    'dgraph.io': 'UA-75364122-1',
    'docs.dgraph.io': 'UA-75364122-3',
    'graphql.dgraph.io': 'UA-75364122-7',
    'tour.dgraph.io': 'UA-75364122-2',
  }

  const gaId = propertyMap[window.location.hostname]
  if (!gaId) {
    console.log('No known GA for hostname', window.location.hostname)
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
  loadGoogleAnalytics()
}
