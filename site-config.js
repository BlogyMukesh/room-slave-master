window.SITE_CONFIG = {
  extraHeadHTML: "<meta name=\"robots\" content=\"noindex,nofollow\"><meta name=\"referrer\" content=\"no-referrer-when-downgrade\"><script async src=\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3691583433336252\" crossorigin=\"anonymous\"></script>",
  analyticsHTML: "<script async src=\"https://www.googletagmanager.com/gtag/js?id=G-449VYY7XNQ\"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-449VYY7XNQ');</script>",
  adHTML1: "<script async src=\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3691583433336252\" crossorigin=\"anonymous\"></script><!-- vertical-ad --><ins class=\"adsbygoogle\" style=\"display:inline-block;width:728px;height:90px\" data-ad-client=\"ca-pub-3691583433336252\" data-ad-slot=\"5957745437\"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>",
  adHTML2: "<script async src=\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3691583433336252\" crossorigin=\"anonymous\"></script><!-- GFL1 --><ins class=\"adsbygoogle\" style=\"display:block\" data-ad-client=\"ca-pub-3691583433336252\" data-ad-slot=\"9877126377\" data-ad-format=\"auto\" data-full-width-responsive=\"true\"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>"
};

(function initSiteConfig() {
  if (window.__SITE_CONFIG_INJECTED) return;
  window.__SITE_CONFIG_INJECTED = true;

  const cfg = window.SITE_CONFIG || {};

  function appendHTML(target, html) {
    if (!target || !html) return;
    const container = document.createElement("div");
    container.innerHTML = html;

    const scripts = Array.from(container.querySelectorAll("script"));
    scripts.forEach((script) => script.remove());

    while (container.firstChild) {
      target.appendChild(container.firstChild);
    }

    scripts.forEach((script) => {
      const injected = document.createElement("script");
      Array.from(script.attributes).forEach((attr) => {
        injected.setAttribute(attr.name, attr.value);
      });
      injected.text = script.textContent || "";
      document.head.appendChild(injected);
    });
  }

  function loadAdSenseOnce(html) {
    if (!html) return;
    const match = html.match(/https:\/\/pagead2\.googlesyndication\.com\/pagead\/js\/adsbygoogle\.js\?client=[^"']+/);
    if (!match) return;
    const existing = document.querySelector('script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]');
    if (existing) return;
    const script = document.createElement("script");
    script.async = true;
    script.src = match[0];
    script.setAttribute("crossorigin", "anonymous");
    document.head.appendChild(script);
  }

  function renderAd(target, html) {
    if (!target || !html) return;
    const container = document.createElement("div");
    container.innerHTML = html;
    const ins = container.querySelector("ins.adsbygoogle");
    if (ins) {
      target.innerHTML = "";
      target.appendChild(ins);
      loadAdSenseOnce(html);
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        // Ignore ad push errors during local testing.
      }
      return;
    }
    appendHTML(target, html);
  }

  document.addEventListener("DOMContentLoaded", () => {
    appendHTML(document.head, cfg.extraHeadHTML);
    appendHTML(document.head, cfg.analyticsHTML);

    document.querySelectorAll(".player-ad").forEach((el) => {
      renderAd(el, cfg.adHTML1);
    });
    document.querySelectorAll(".ad-card").forEach((el) => {
      renderAd(el, cfg.adHTML2);
    });
  });
})();
