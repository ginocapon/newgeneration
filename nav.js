/* Frecce Indietro/Avanti nella barra in basso.
   Stesso sistema di forzaquotidiana (barra fissa mobile), adattato allo stile New Generation:
   i pulsanti entrano dentro la .tabbar esistente, che ha gia' la Home e l'area sicura dell'iPhone. */
(function () {
  var bar = document.querySelector(".tabbar");
  if (!bar || bar.querySelector(".ng-navarrow")) return;

  function mk(dir, label, path) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "ng-navarrow";
    b.setAttribute("aria-label", label);
    b.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' + path + '"/></svg>';
    b.addEventListener("click", function () {
      if (dir < 0) {
        var sameSite = document.referrer && document.referrer.indexOf(location.origin) === 0;
        if (sameSite && history.length > 1) history.back();
        else location.href = "index.html";
      } else {
        history.forward();
      }
    });
    return b;
  }

  bar.insertBefore(mk(-1, "Indietro", "M15 18l-6-6 6-6"), bar.firstChild);
  bar.appendChild(mk(1, "Avanti", "M9 6l6 6-6 6"));
})();
