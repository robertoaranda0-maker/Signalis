(function () {
  const translations = {
    "MENÚ PRINCIPAL": "MAIN MENU", "PROTAGONISTAS": "CHARACTERS", "PERSONAJES": "CHARACTERS", "GUÍA": "WALKTHROUGH",
    "¡Bienvenido a la wiki de SIGNALIS!": "Welcome to the SIGNALIS wiki!", "Instrucciones:": "Instructions:",
    "ANTERIOR": "PREVIOUS", "SIGUIENTE": "NEXT", "Biografía": "Biography", "Biography": "Biografía",
    "ADVERTENCIA: El siguiente contenido puede contener spoilers de SIGNALIS. Continúa bajo tu responsabilidad.": "WARNING: The following may contain spoilers about SIGNALIS. Proceed at your own risk.",
    "WARNING: The following may contain spoilers about SIGNALIS, proceed at your own risk.": "ADVERTENCIA: El siguiente contenido puede contener spoilers de SIGNALIS. Continúa bajo tu responsabilidad.",
    "Parte 1: El navío Penrose": "Part 1: The Penrose Ship", "Parte 2: Instalación AEON": "Part 2: AEON Facility",
    "Parte 3: Habitáculos de los trabajadores": "Part 3: Worker Dormitories", "Parte 4: Hospital": "Part 4: Hospital",
    "Parte 5: Protektors": "Part 5: Protektors", "Parte 6: Excavación": "Part 6: Excavation",
    "Parte 7: Limbo": "Part 7: Limbo", "Parte 8: Nueva Partida": "Part 8: New Game", "Parte 9:": "Part 9:",
    "Capítulo 1: Sincronicidad": "Chapter 1: Synchronicity", "Capítulo 2: Liminalidad": "Chapter 2: Liminality",
    "Capítulo 3: Gestaltzerfall": "Chapter 3: Gestaltzerfall", "Premisa": "Premise", "Personajes": "Characters",
    "Ariane Yeong": "Ariane Yeong", "Elster (LSTR-512)": "Elster (LSTR-512)", "Falke (FKLR)": "Falke (FKLR)"
  };
  const english = new Map(Object.entries(translations));
  const spanish = new Map(Object.entries(translations).map(([es,en]) => [en,es]));
  const button = document.querySelector('.language-toggle');
  if (!button) return;
  let lang = 'es';
  function translateText(node, map) {
    if (node.nodeType === Node.TEXT_NODE) {
      const raw = node.nodeValue;
      const trimmed = raw.trim();
      if (map.has(trimmed)) node.nodeValue = raw.replace(trimmed, map.get(trimmed));
    } else if (node.nodeType === Node.ELEMENT_NODE && !['SCRIPT','STYLE','BUTTON'].includes(node.tagName)) {
      node.childNodes.forEach(child => translateText(child, map));
    }
  }
  button.addEventListener('click', () => {
    const map = lang === 'es' ? english : spanish;
    document.querySelectorAll('body *').forEach(el => {
      if (el.children.length === 0) translateText(el, map);
    });
    lang = lang === 'es' ? 'en' : 'es';
    document.documentElement.lang = lang;
    button.textContent = lang === 'es' ? 'EN' : 'ES';
    button.setAttribute('aria-label', lang === 'es' ? 'Cambiar a inglés' : 'Cambiar a español');
  });
})();
