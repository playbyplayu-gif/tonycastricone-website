// Shared navigation — include on every page with <script src="nav.js"></script>
// Place a <div id="nav"></div> where you want the nav to appear.

(function() {
  var navHTML = ''
  + '<nav class="nav" id="mainNav">'
  + '  <div class="nav-inner">'
  + '    <div class="nav-left">'
  + '      <a href="index.html" class="nav-logo">TONY<span class="nav-logo-last">CASTRICONE</span><span class="nav-logo-dot">.COM</span></a>'
  + '      <div class="nav-social-icons">'
  + '        <a href="https://twitter.com/Castricone" target="_blank" rel="noopener" title="X / Twitter"><svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>'
  + '        <a href="https://www.linkedin.com/in/tony-castricone-860793a/" target="_blank" rel="noopener" title="LinkedIn"><svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>'
  + '        <a href="https://open.spotify.com/show/3hXEAWatT5seWUmb0zSomK" target="_blank" rel="noopener" title="Spotify"><svg viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg></a>'
  + '        <a href="https://www.youtube.com/watch?v=zpkOjGq7M7s&list=PLMB_4qs7NTQ4OLPvQK12DWN39Gnd8Eh1R" target="_blank" rel="noopener" title="YouTube"><svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>'
  + '      </div>'
  + '    </div>'
  + '    <ul class="nav-menu">'
  + '      <li class="nav-menu-item"><a>Products <span class="arrow">&#9662;</span></a><div class="nav-dropdown"><a href="https://playbyplayu.com" target="_blank">Play-By-Play U</a><a href="index.html#playbyplayai">Play-By-Play AI</a></div></li>'
  + '      <li class="nav-menu-item"><a>On Air <span class="arrow">&#9662;</span></a><div class="nav-dropdown"><a href="demo.html">Listen</a><a href="journey.html">Journey</a><a href="press.html">Press</a><a href="kudos.html">Kudos</a><a href="gamelog.html"><span id="gamesCount">Game Log</span></a></div></li>'
  + '      <li class="nav-menu-item"><a>Content <span class="arrow">&#9662;</span></a><div class="nav-dropdown"><a href="viral.html">Influencer</a><a href="podcast.html">Storyteller</a><a href="oncamera.html">On Camera</a></div></li>'
  + '      <li class="nav-menu-item no-drop"><a href="mailto:tony.castricone@learfield.com">Email</a></li>'
  + '    </ul>'
  + '    <button class="nav-hamburger" id="hamburger" onclick="document.getElementById(\'mobileMenu\').classList.toggle(\'open\'); this.textContent = this.textContent === String.fromCharCode(9776) ? String.fromCharCode(10005) : String.fromCharCode(9776);">&#9776;</button>'
  + '  </div>'
  + '  <div class="nav-mobile" id="mobileMenu">'
  + '    <div class="nav-mobile-group-label">Products</div>'
  + '    <a href="https://playbyplayu.com" target="_blank" onclick="closeMobile()">Play-By-Play U</a>'
  + '    <a href="index.html#playbyplayai" onclick="closeMobile()">Play-By-Play AI</a>'
  + '    <div class="nav-mobile-group-label">On Air</div>'
  + '    <a href="demo.html" onclick="closeMobile()">Listen</a>'
  + '    <a href="journey.html" onclick="closeMobile()">Journey</a>'
  + '    <a href="press.html" onclick="closeMobile()">Press</a>'
  + '    <a href="kudos.html" onclick="closeMobile()">Kudos</a>'
  + '    <a href="gamelog.html" onclick="closeMobile()"><span id="gamesCountMobile">Game Log</span></a>'
  + '    <div class="nav-mobile-group-label">Content</div>'
  + '    <a href="viral.html" onclick="closeMobile()">Influencer</a>'
  + '    <a href="podcast.html" onclick="closeMobile()">Storyteller</a>'
  + '    <a href="oncamera.html" onclick="closeMobile()">On Camera</a>'
  + '    <div class="nav-mobile-group-label">&nbsp;</div>'
  + '    <a href="mailto:tony.castricone@learfield.com" onclick="closeMobile()">Email</a>'
  + '  </div>'
  + '</nav>';

  var navCSS = ''
  + '.nav { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; padding: 0 clamp(1rem,4vw,3rem); background: rgba(10,5,20,0.92); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(180,160,255,0.06); transition: background 0.5s, backdrop-filter 0.5s; }'
  + '.nav-inner { max-width: 1400px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; height: 65px; }'
  + '.nav-left { display: flex; align-items: center; gap: 1.2rem; }'
  + '.nav-logo { font-family: "Oswald", sans-serif; font-weight: 700; font-size: 0.85rem; letter-spacing: 0.08em; color: #fff; text-transform: uppercase; text-decoration: none; opacity: 1; }'
  + '.nav-logo:hover { opacity: 0.85; }'
  + '.nav-logo-last { background: linear-gradient(135deg, var(--purple), var(--purple-deep), var(--gold)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }'
  + '.nav-logo-dot { font-weight: 300; color: var(--text-dim); font-size: 0.65rem; }'
  + '.nav-social-icons { display: flex; align-items: center; gap: 0.8rem; }'
  + '.nav-social-icons a { display: flex; align-items: center; opacity: 0.35; transition: opacity 0.3s, transform 0.3s; }'
  + '.nav-social-icons a:hover { opacity: 1; transform: translateY(-1px); }'
  + '.nav-social-icons svg { width: 15px; height: 15px; fill: #fff; }'
  + '.nav-menu { display: flex; gap: 2.5rem; align-items: center; list-style: none; }'
  + '.nav-menu-item { position: relative; padding: 0.8rem 0; }'
  + '.nav-menu-item > a { font-family: "Oswald", sans-serif; font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--text-dim); transition: color 0.3s; display: flex; align-items: center; gap: 0.3rem; cursor: pointer; }'
  + '.nav-menu-item > a:hover, .nav-menu-item:hover > a { color: var(--purple); }'
  + '.nav-menu-item > a .arrow { font-size: 0.5rem; transition: transform 0.3s; margin-top: 1px; }'
  + '.nav-menu-item:hover > a .arrow { transform: rotate(180deg); }'
  + '.nav-dropdown { position: absolute; top: 100%; left: 50%; transform: translateX(-50%); min-width: 180px; background: rgba(13,8,32,0.97); backdrop-filter: blur(20px); border: 1px solid rgba(180,160,255,0.08); border-radius: 8px; padding: 0.7rem 0 0.5rem; opacity: 0; visibility: hidden; transition: opacity 0.25s ease, visibility 0.25s ease; pointer-events: none; }'
  + '.nav-dropdown::before { content: ""; position: absolute; top: -12px; left: 0; right: 0; height: 12px; }'
  + '.nav-menu-item:hover .nav-dropdown { opacity: 1; visibility: visible; pointer-events: auto; }'
  + '.nav-dropdown a { display: block; font-family: "Oswald", sans-serif; font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--text-dim); padding: 0.6rem 1.4rem; transition: color 0.2s, background 0.2s; white-space: nowrap; }'
  + '.nav-dropdown a:hover { color: var(--purple); background: rgba(180,160,255,0.05); }'
  + '.nav-menu-item.no-drop > a { cursor: pointer; }'
  + '.nav-hamburger { display: none; background: none; border: none; color: #fff; font-size: 1.5rem; cursor: pointer; }'
  + '.nav-mobile { display: none; position: absolute; top: 65px; left: 0; right: 0; background: rgba(10,5,20,0.97); backdrop-filter: blur(20px); padding: 1rem 2rem 2rem; flex-direction: column; max-height: 80vh; overflow-y: auto; }'
  + '.nav-mobile.open { display: flex; }'
  + '.nav-mobile-group-label { font-family: "Oswald", sans-serif; font-size: 0.6rem; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); padding: 1rem 0 0.3rem; }'
  + '.nav-mobile a { font-family: "Oswald", sans-serif; font-size: 0.9rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-dim); padding: 0.6rem 0 0.6rem 0.8rem; border-bottom: 1px solid rgba(255,255,255,0.03); display: block; }'
  + '@media (max-width: 768px) { .nav-menu { display: none; } .nav-hamburger { display: block; } .nav-social-icons { display: none; } }';

  // Inject CSS
  var style = document.createElement('style');
  style.textContent = navCSS;
  document.head.appendChild(style);

  // Inject HTML
  var target = document.getElementById('nav');
  if (target) {
    target.innerHTML = navHTML;
  } else {
    document.body.insertAdjacentHTML('afterbegin', navHTML);
  }

  // Nav scroll behavior (transparent → solid on homepage)
  if (document.querySelector('.hero-section')) {
    var navEl = document.getElementById('mainNav');
    navEl.style.background = 'transparent';
    navEl.style.borderBottom = '1px solid transparent';
    window.addEventListener('scroll', function() {
      if (window.scrollY > 60) {
        navEl.style.background = 'rgba(10,5,20,0.92)';
        navEl.style.backdropFilter = 'blur(20px)';
        navEl.style.borderBottomColor = 'rgba(180,160,255,0.06)';
      } else {
        navEl.style.background = 'transparent';
        navEl.style.backdropFilter = 'none';
        navEl.style.borderBottomColor = 'transparent';
      }
    }, { passive: true });
  }
})();

function closeMobile() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('hamburger').innerHTML = '&#9776;';
}
