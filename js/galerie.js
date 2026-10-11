// Projektgalerie: Pro Projekt wird nur das erste Bild als Vorschau gezeigt.
// Ein Klick öffnet eine Großansicht, in der man mit Pfeilen (Buttons,
// Pfeiltasten oder Wischen) zwischen allen Bildern des Projekts wechselt.
(function () {
  const galleries = [...document.querySelectorAll(".media")]
    .map((media) => ({ media, images: [...media.querySelectorAll("img")] }))
    .filter((g) => g.images.length > 0);
  if (galleries.length === 0) return;

  // Großansicht einmal anlegen und für alle Projekte verwenden
  const dialog = document.createElement("dialog");
  dialog.className = "lightbox";
  dialog.setAttribute("aria-label", "Bildergalerie");
  dialog.innerHTML = `
    <button class="lb-close" type="button" aria-label="Schließen">×</button>
    <button class="lb-prev" type="button" aria-label="Vorheriges Bild">‹</button>
    <figure>
      <img alt="">
      <figcaption><span class="lb-caption"></span><span class="lb-count"></span></figcaption>
    </figure>
    <button class="lb-next" type="button" aria-label="Nächstes Bild">›</button>`;
  document.body.append(dialog);

  const big = dialog.querySelector("img");
  const caption = dialog.querySelector(".lb-caption");
  const count = dialog.querySelector(".lb-count");
  const prev = dialog.querySelector(".lb-prev");
  const next = dialog.querySelector(".lb-next");
  let images = [];
  let index = 0;

  function captionOf(img) {
    const fig = img.closest("figure");
    const text = img.dataset.caption || (fig && fig.querySelector("figcaption")?.textContent);
    return (text || img.alt || "").trim();
  }

  function show(i) {
    index = (i + images.length) % images.length;
    const img = images[index];
    big.src = img.currentSrc || img.src;
    big.alt = img.alt;
    caption.textContent = captionOf(img);
    count.textContent = images.length > 1 ? `${index + 1} / ${images.length}` : "";
  }

  function open(gallery) {
    images = gallery.images;
    const single = images.length < 2;
    prev.hidden = single;
    next.hidden = single;
    show(0);
    dialog.showModal();
  }

  // Erstes Bild jedes Projekts in einen Button verpacken, die übrigen ausblenden
  for (const gallery of galleries) {
    const [first, ...rest] = gallery.images;
    rest.forEach((img) => {
      const fig = img.closest("figure");
      // Figure ganz ausblenden, wenn sie nur noch versteckte Bilder enthält
      img.hidden = true;
      if (fig && fig !== first.closest("figure") && !fig.querySelector("img:not([hidden]), video")) fig.hidden = true;
    });

    const button = document.createElement("button");
    button.type = "button";
    button.className = "media-open";
    const n = gallery.images.length;
    button.setAttribute("aria-label", n > 1 ? `${n} Bilder ansehen` : "Bild vergrößern");
    first.replaceWith(button);
    button.append(first);
    if (n > 1) {
      const badge = document.createElement("span");
      badge.className = "media-count";
      badge.textContent = `${n} Bilder`;
      button.append(badge);
    }
    button.addEventListener("click", () => open(gallery));
  }

  prev.addEventListener("click", () => show(index - 1));
  next.addEventListener("click", () => show(index + 1));
  dialog.querySelector(".lb-close").addEventListener("click", () => dialog.close());

  // Klick auf den dunklen Hintergrund schließt die Großansicht
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) dialog.close();
  });

  dialog.addEventListener("keydown", (e) => {
    if (images.length < 2) return;
    if (e.key === "ArrowLeft") { e.preventDefault(); show(index - 1); }
    if (e.key === "ArrowRight") { e.preventDefault(); show(index + 1); }
  });

  // Wischen auf dem Smartphone
  let startX = null;
  dialog.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive: true });
  dialog.addEventListener("touchend", (e) => {
    if (startX === null || images.length < 2) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
    startX = null;
  });

  dialog.addEventListener("close", () => { big.removeAttribute("src"); });
})();
