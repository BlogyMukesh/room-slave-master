window.SITE_CONFIG = {
  extraHeadHTML: "<meta name=\"robots\" content=\"noindex,nofollow\"><meta name=\"referrer\" content=\"no-referrer-when-downgrade\"><script async src=\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3691583433336252\" crossorigin=\"anonymous\"></script>",
  analyticsHTML: "<script async src=\"https://www.googletagmanager.com/gtag/js?id=G-449VYY7XNQ\"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-449VYY7XNQ');</script>",
  moduleScriptSrc: "/integrate.js",
  adHTML1: "<script async src=\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3691583433336252\" crossorigin=\"anonymous\"></script><!-- vertical-ad --><ins class=\"adsbygoogle\" style=\"display:inline-block;width:728px;height:90px\" data-ad-client=\"ca-pub-3691583433336252\" data-ad-slot=\"5957745437\"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>",
  adHTML2: "<script async src=\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3691583433336252\" crossorigin=\"anonymous\"></script><!-- GFL1 --><ins class=\"adsbygoogle\" style=\"display:block\" data-ad-client=\"ca-pub-3691583433336252\" data-ad-slot=\"9877126377\" data-ad-format=\"auto\" data-full-width-responsive=\"true\"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>",
  iframeUrls: [
    "https://23azostore.github.io/s2/bubble-shooter/",
    "https://html5.gamedistribution.com/rvvASMiM/415961cf27fb44759c184d150b301f54/index.html?gd_sdk_referrer_url=https%3A%2F%2Fwww.miniplay.com%2Fgame%2Fblock-puzzle&mp_api_as3_url=https%3A%2F%2Fssl.minijuegosgratis.com%2Flechuck%2Fas3%2Flatest.swf&mp_api_as3_url_bck=https%3A%2F%2Fapi.minijuegos.com%2Flechuck%2Fclient-as%2F&mp_api_id=5708&mp_api_js_url=https%3A%2F%2Fssl.minijuegosgratis.com%2Flechuck%2Fjs%2Flatest.js&mp_api_js_url_bck=https%3A%2F%2Fapi.minijuegos.com%2Flechuck%2Fclient-js%2F&mp_assets=https%3A%2F%2Fs2.minijuegosgratis.com%2F&mp_embed=0&mp_game_id=244317&mp_game_uid=block-puzzle&mp_game_url=https%3A%2F%2Fwww.miniplay.com%2Fgame%2Fblock-puzzle&mp_int=1&mp_locale=en_US&mp_player_type=IFRAME&mp_site_https_url=https%3A%2F%2Fwww.miniplay.com%2F&mp_site_name=miniplay.com&mp_site_url=https%3A%2F%2Fwww.miniplay.com%2F&mp_timezone=Europe%2FMadrid&mp_view_type=&mini_signature=8c21e7ac0869df82459d0dee620f31fe&xdm_e=https%3A%2F%2Fwww.miniplay.com&xdm_c=default6429&xdm_p=1&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL3d3dy5taW5pcGxheS5jb20vZ2FtZS9ibG9jay1wdXp6bGUiLCJwYXJlbnREb21haW4iOiJtaW5pcGxheS5jb20iLCJ0b3BEb21haW4iOiJtaW5pcGxheS5jb20iLCJoYXNJbXByZXNzaW9uIjpmYWxzZSwibG9hZGVyRW5hYmxlZCI6dHJ1ZSwiaG9zdCI6Imh0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tIiwidmVyc2lvbiI6IjEuNS4xOCJ9",
    "https://fly.silvergames.com/m/candy-crush/",
    "https://s3.ap-south-1.amazonaws.com/htg.gamezi.com/drive-mad/index.html",
    "iframe/hill-climb-iframe.html",
    "https://s3.ap-south-1.amazonaws.com/htg.gamezi.com/level-devil/index.html",
    "https://g.igroutka.ru/games/1278/hMRVJrwIQ8mYf6AS/d4d99b3a-cc26-41af-98df-da4c196e5308/index.html",
    "https://worms.zone/game/web/",
    "https://s3.ap-south-1.amazonaws.com/htg.gamezi.com/subway-surfers-ny/index.html",
    "https://g.igroutka.ru/games/793/2xTdm6GrXEuN0Kwq/fe831138-3321-40ed-b8cd-f1c482091e04/index.html",
    "https://s3.ap-south-1.amazonaws.com/htg.gamezi.com/stickman-hook/index.html",
    "https://azgames.io/game/temple-run-2/"
  ]
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

  function appendModuleScript(src) {
    if (!src) return;
    const selector = 'script[type="module"][src="' + src + '"]';
    if (document.querySelector(selector)) return;
    const script = document.createElement("script");
    script.type = "module";
    script.src = src;
    if (document.body) {
      document.body.appendChild(script);
      return;
    }
    document.documentElement.appendChild(script);
  }

  const iframeUrls = Array.isArray(cfg.iframeUrls)
    ? cfg.iframeUrls.filter((url) => typeof url === "string" && url.trim())
    : [];
  const pinnedCarouselSlugs = [
    "subway-surfers",
    "temple-run-2",
    "stickman-hook",
    "stunt-bike-extreme",
    "drive-mad",
    "plonky",
    "level-devil",
    "hill-climb-racing-lite",
    "snake-vs-worms",
    "bubble-shooter",
    "blocky-blast-puzzle",
    "candy-crush"
  ];

  function pickRandom(items) {
    if (!items || !items.length) return "";
    const index = Math.floor(Math.random() * items.length);
    return items[index];
  }

  function getMetaContent(selector) {
    const meta = document.querySelector(selector);
    return meta ? meta.getAttribute("content") || "" : "";
  }

  function getGameMeta() {
    const titleEl =
      document.querySelector(".player-text h1") ||
      document.querySelector("h1");
    const rawTitle = (titleEl && titleEl.textContent) || document.title || "Game";
    const title = rawTitle.replace(/\s+-\s+Play Online$/i, "").trim() || "Game";
    const thumbEl = document.querySelector(".player-thumb");
    const thumb =
      (thumbEl && thumbEl.getAttribute("src")) ||
      getMetaContent('meta[property="og:image"]') ||
      getMetaContent('meta[name="twitter:image"]') ||
      "";
    return { title, thumb };
  }

  function ensureGameEmbed() {
    if (document.querySelector(".game-embed")) return;
    const main = document.querySelector("main");
    if (!main) return;
    const { title, thumb } = getGameMeta();
    const safeTitle = title.replace(/"/g, "&quot;");
    const safeThumb = thumb.replace(/"/g, "&quot;");
    const section = document.createElement("section");
    section.className = "game-player";
    section.setAttribute("aria-label", "Play " + title);
    section.innerHTML = `
      <div class="game-embed game-frame" data-state="idle">
        ${safeThumb ? `<img class="game-thumb" src="${safeThumb}" alt="${safeTitle} thumbnail" loading="lazy" />` : ""}
        <button class="game-play" type="button" aria-label="Play ${safeTitle}">
          <span class="play-icon" aria-hidden="true"></span>
          <span class="play-label">Play now</span>
        </button>
        <iframe
          class="game-iframe"
          title="${safeTitle}"
          loading="lazy"
          allow="fullscreen; autoplay; gamepad"
          allowfullscreen
          data-src=""
        ></iframe>
        <button class="back-fab" type="button" aria-label="Go back">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="ad-overlay" aria-hidden="true">
          <div class="ad-modal">
            <div class="ad-frame">
              <ins class="adsbygoogle"
                   style="display:block"
                   data-ad-client="ca-pub-3691583433336252"
                   data-ad-slot="7315360452"
                   data-ad-format="auto"
                   data-full-width-responsive="true"></ins>
            </div>
            <button class="ad-close" type="button" disabled>Close in 10</button>
            <button class="ad-skip" type="button" disabled>Skip in 10</button>
          </div>
        </div>
      </div>
    `;
    main.insertBefore(section, main.firstElementChild);
  }

  function initGameEmbeds() {
    document.querySelectorAll(".game-embed").forEach((embed) => {
      if (embed.dataset.embedInit === "true") return;
      embed.dataset.embedInit = "true";

      const playButton = embed.querySelector(".game-play");
      const frame = embed.querySelector(".game-iframe");
      const adOverlay = embed.querySelector(".ad-overlay");
      const adFrame = embed.querySelector(".ad-frame");
      const adSkip = embed.querySelector(".ad-skip");
      const adClose = embed.querySelector(".ad-close");
      let backFab = embed.querySelector(".back-fab");
      let adIntervalId = null;
      let adLastClosedAt = 0;

      if (!playButton || !frame) return;

      if (!backFab) {
        backFab = document.createElement("button");
        backFab.className = "back-fab";
        backFab.type = "button";
        backFab.setAttribute("aria-label", "Go back");
        backFab.innerHTML = `
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        `;
        if (adOverlay && adOverlay.parentNode === embed) {
          embed.insertBefore(backFab, adOverlay);
        } else {
          embed.appendChild(backFab);
        }
      }

      if (iframeUrls.length) {
        frame.dataset.src = pickRandom(iframeUrls);
      }

      const getSrc = () => frame.dataset.src;

      const startGame = () => {
        if (embed.dataset.state === "playing") return;
        embed.dataset.state = "playing";
        const src = getSrc();
        if (src) {
          frame.src = src;
        }
        const isMobile = window.matchMedia && window.matchMedia("(max-width: 640px)").matches;
        if (isMobile) {
          const targets = [frame, embed];
          for (const target of targets) {
            const request =
              target.requestFullscreen ||
              target.webkitRequestFullscreen ||
              target.mozRequestFullScreen ||
              target.msRequestFullscreen;
            if (!request) continue;
            try {
              request.call(target);
              break;
            } catch (err) {
              console.warn("Fullscreen request failed:", err);
            }
          }
        }
        if (!adIntervalId) {
          adIntervalId = setInterval(() => {
            if (embed.dataset.state !== "playing") return;
            if (!adOverlay || adOverlay.classList.contains("is-visible")) return;
            const now = Date.now();
            if (adLastClosedAt && now - adLastClosedAt < 30000) return;
            showAdOverlay();
          }, 30000);
        }
      };

      const pushAdWhenReady = () => {
        if (!adOverlay || !adFrame || adOverlay.dataset.adLoaded === "true") return;
        const ins = adFrame.querySelector("ins.adsbygoogle");
        if (!ins) return;
        const tryPush = (attemptsLeft) => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              const width = adFrame.getBoundingClientRect().width;
              if (width > 0) {
                adOverlay.dataset.adLoaded = "true";
                try {
                  (window.adsbygoogle = window.adsbygoogle || []).push({});
                } catch (error) {
                  // Ignore ad push errors during local testing.
                }
                return;
              }
              if (attemptsLeft > 0) {
                setTimeout(() => tryPush(attemptsLeft - 1), 200);
              }
            });
          });
        };
        tryPush(6);
      };

      const showAdOverlay = () => {
        if (!adOverlay) {
          startGame();
          return;
        }
        adOverlay.classList.add("is-visible");
        adOverlay.setAttribute("aria-hidden", "false");
        const skipDelay = 10;
        const closeDelay = 20;
        if (adSkip) {
          adSkip.disabled = true;
          adSkip.textContent = "Skip Ad in " + skipDelay;
        }
        if (adClose) {
          adClose.disabled = true;
          adClose.textContent = "Game starts in " + closeDelay;
        }

        let remainingSkip = skipDelay;
        let remainingClose = closeDelay;
        const tick = () => {
          if (adOverlay && !adOverlay.classList.contains("is-visible")) {
            return;
          }
          remainingSkip -= 1;
          remainingClose -= 1;

          if (remainingSkip <= 0 && adSkip) {
            adSkip.disabled = false;
            adSkip.textContent = "Skip Ad";
          } else if (adSkip) {
            adSkip.textContent = "Skip Ad in " + Math.max(remainingSkip, 0);
          }

          if (remainingClose <= 0) {
            if (adClose) {
              adClose.disabled = false;
              adClose.textContent = "Close";
            }
            finishAd();
            return;
          } else if (adClose) {
            adClose.textContent = "Game starts in " + Math.max(remainingClose, 0);
          }

          setTimeout(tick, 1000);
        };
        setTimeout(tick, 1000);
        pushAdWhenReady();
      };

      const hideAdOverlay = () => {
        if (!adOverlay) return;
        adOverlay.classList.remove("is-visible");
        adOverlay.setAttribute("aria-hidden", "true");
      };

      const resumeGameFocus = () => {
        try {
          frame.focus();
        } catch (err) {
          // Ignore focus errors.
        }
        try {
          if (frame.contentWindow && frame.contentWindow.focus) {
            frame.contentWindow.focus();
          }
        } catch (err) {
          // Cross-origin focus may be blocked.
        }
        try {
          if (frame.contentWindow && frame.contentWindow.postMessage) {
            frame.contentWindow.postMessage({ type: "resume" }, "*");
          }
        } catch (err) {
          // Ignore postMessage errors.
        }
      };

      const requestFrameFullscreen = () => {
        const isMobile = window.matchMedia && window.matchMedia("(max-width: 640px)").matches;
        if (!isMobile) return;
        const request =
          embed.requestFullscreen ||
          embed.webkitRequestFullscreen ||
          embed.mozRequestFullScreen ||
          embed.msRequestFullscreen;
        const ua = navigator.userAgent || "";
        const isiOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
        if (!request) {
          if (isiOS) {
            embed.classList.add("is-fake-fullscreen");
            document.body.classList.add("is-fake-fullscreen");
          }
          return;
        }
        try {
          request.call(embed);
        } catch (err) {
          if (isiOS) {
            embed.classList.add("is-fake-fullscreen");
            document.body.classList.add("is-fake-fullscreen");
          } else {
            console.warn("Fullscreen request failed:", err);
          }
        }
      };

      document.addEventListener("fullscreenchange", () => {
        const isFull = document.fullscreenElement === embed;
        embed.classList.toggle("is-fullscreen", isFull);
        document.body.classList.toggle("is-fullscreen", isFull);
      });

      playButton.addEventListener("click", () => {
        if (embed.dataset.state === "playing") return;
        embed.classList.add("show-back");
        if (getSrc() && !frame.getAttribute("src")) {
          frame.src = getSrc();
        }
        const gameTitle =
          (document.querySelector(".player-text h1") || {}).textContent ||
          playButton.getAttribute("aria-label") ||
          "";
        const gameName = gameTitle.replace(/^Play\s+/i, "").trim();
        const pageSlug =
          typeof window.currentSlug === "string"
            ? window.currentSlug
            : (location.pathname || "").split("/").pop().replace(/\.html$/, "");
        if (typeof window.gtag === "function") {
          window.gtag("event", "play_click", {
            gamename: gameName,
            page: pageSlug,
            debug_mode: true
          });
        }
        requestFrameFullscreen();
        showAdOverlay();
      });

      const finishAd = () => {
        hideAdOverlay();
        adLastClosedAt = Date.now();
        startGame();
        setTimeout(resumeGameFocus, 50);
        setTimeout(resumeGameFocus, 350);
      };

      if (adSkip) {
        adSkip.addEventListener("click", () => {
          if (adSkip.disabled) return;
          finishAd();
        });
      }

      if (adClose) {
        adClose.addEventListener("click", () => {
          if (adClose.disabled) return;
          finishAd();
        });
      }

      if (backFab) {
        backFab.addEventListener("click", () => {
          window.history.back();
        });
      }
    });
  }

  window.initGameEmbeds = initGameEmbeds;

  function pinCarouselItems() {
    const row = document.getElementById("carouselRow");
    if (!row) return;
    const cards = Array.from(row.querySelectorAll("a.carousel-card"));
    if (!cards.length) return;
    const lookup = new Map();
    cards.forEach((card) => {
      const href = card.getAttribute("href") || "";
      const slug = href.replace(/\.html$/, "").split("/").pop();
      if (slug) {
        lookup.set(slug, card);
      }
    });
    pinnedCarouselSlugs.forEach((slug) => {
      const card = lookup.get(slug);
      if (card) {
        row.insertBefore(card, row.firstChild);
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    appendHTML(document.head, cfg.extraHeadHTML);
    appendHTML(document.head, cfg.analyticsHTML);

    document.querySelectorAll(".player-card").forEach((el) => el.remove());
    document.querySelectorAll(".full-width-section").forEach((el) => {
      if (el.querySelector(".player-card")) {
        el.remove();
      }
    });
    document.querySelectorAll(".player-ad").forEach((el) => el.remove());
    document.querySelectorAll(".ad-card").forEach((el) => el.remove());

    ensureGameEmbed();
    initGameEmbeds();
    pinCarouselItems();
    setTimeout(pinCarouselItems, 250);
    appendModuleScript(cfg.moduleScriptSrc);
  });
})();
