/* =====================================================
   ✏️ 1) DATOS GENERALES — CAMBIA AQUÍ
   ===================================================== */
const NOMBRE_ELLA = "Fiorella";          // ✏️ CAMBIA AQUÍ
const NOMBRE_EL   = "Bryan";             // ✏️ CAMBIA AQUÍ
const FECHA_CLAVE = "17/01/2025";        // ✏️ CAMBIA AQUÍ (dd/mm/aaaa) fecha que ella debe escribir
const INICIO = new Date(2025, 0, 17);    // ✏️ CAMBIA AQUÍ (año, mes-1, día) → enero = 0
const CANCION = "imagenes/cancion.mp3";  // ✏️ CAMBIA AQUÍ (tu audio; si no existe, no pasa nada)
const TOTAL_FOTOS_GALERIA = 30;          // ✏️ CAMBIA AQUÍ: la galería muestra foto1.jpg ... fotoN.jpg (las que no existan se ocultan)

/* ✏️ 2) CARTA — CAMBIA AQUÍ todo el texto (una línea vacía = un espacio) */
const CARTA = `${NOMBRE_ELLA},

No sé si alguna vez te he dicho todo esto de la manera correcta, pero quería que tuvieras un lugar donde pudieras recordar todo lo que hemos vivido.

Desde aquel 17 de septiembre de 2024 hasta hoy han pasado muchísimas cosas.

Hemos tenido días increíbles y también días complicados, pero cada momento forma parte de nuestra historia.

Y si tuviera que elegir algo, elegiría seguir creando recuerdos contigo.

Te amo muchísimo. ❤️`;

/* ✏️ 3) RAZONES — agrega o quita líneas entre comillas (no olvides la coma al final) */
const RAZONES = [
  "Porque eres tú.",
  "Porque me haces sonreír.",
  "Porque amo nuestros momentos.",
  "Porque contigo puedo ser yo.",
  "Porque incluso los días difíciles forman parte de nuestra historia.",
  "Porque me encanta compartir mi vida contigo.",
  "Porque todavía quiero vivir muchas cosas contigo.",
  // ✏️ AGREGA MÁS RAZONES AQUÍ
];

/* ✏️ 4) FUTURO */
const FUTURO = [
  "Nos faltan viajes.", "Nos faltan fotos.", "Nos faltan aventuras.",
  "Nos faltan cumpleaños.", "Nos faltan aniversarios.", "Nos faltan muchísimas risas.",
  "Nos faltan recuerdos que todavía no existen.",
];

/* ✏️ 5) MENSAJE FINAL (cada línea aparece una por una) */
const FINAL = [
  [`${NOMBRE_ELLA} ❤️`, "grande"], ["Si llegaste hasta aquí, quiero que sepas algo..."],
  ["Gracias por cada momento."], ["Gracias por cada recuerdo."], ["Gracias por estar en mi vida."],
  ["Te amo muchísimo."], ["Y espero que esta historia tenga muchísimas páginas más."],
  [`Te amo, ${NOMBRE_ELLA}. ❤️`, "grande"], ["FIN...", "grande"], ["¿O quizás apenas estamos comenzando?"],
];

/* =====================================================
   ✏️ 6) ESCENAS DE LA HISTORIETA
   Orden = como aparecen. Para AGREGAR una escena, copia un bloque { ... }, pégalo
   donde quieras (con coma al final) y cambia foto, titulo y texto.
   Tipos: "texto", "foto", "dobles", "fechaGrande", "carta", "razones", "galeria",
          "contador", "cancion", "futuro", "final"
   Las fotos van en la carpeta imagenes/ (ejemplo: "foto20.jpg")
   ===================================================== */
const ESCENAS = [
  { tipo:"foto", fecha:"17 de septiembre de 2024", titulo:"Y así comenzó todo...",
    texto:"Quién iba a pensar que una conversación que parecía una más terminaría convirtiéndose en una de las historias más importantes para mí.",
    foto:"foto1.jpg", boton:"Continuar ❤️" },

  { tipo:"foto", titulo:"Sin darnos cuenta...",
    texto:"Fuimos compartiendo conversaciones, momentos, risas y poco a poco empezamos a formar algo que se volvió muy especial.",
    foto:"foto2.jpg", globo:"¿Te acuerdas de estas conversaciones? 💬", boton:"Seguir nuestra historia →" },

  { tipo:"fechaGrande", fecha:"17 de enero de 2025 ❤️", titulo:"El día que nuestra historia comenzó oficialmente.",
    texto:"Desde ese día, ya no éramos simplemente dos personas que se conocían. Éramos nosotros.",
    foto:"foto3.jpg" },

  { tipo:"foto", titulo:"Nuestro primer recuerdo...", texto:"Escribe aquí lo que recuerdas de ese día.", foto:"foto4.jpg", pie:"¿Te acuerdas de este día?" },

  { tipo:"texto", titulo:"Y entre todos esos momentos...", texto:"Nos fuimos conociendo más.\nAprendimos uno del otro." },

  { tipo:"dobles", titulo:"Una de tantas veces que me hiciste sonreír.", texto:"Escribe aquí una frase corta.",
    fotos:["foto5.jpg","foto6.jpg"], pie:"¿Te acuerdas de este día?" },

  { tipo:"foto", titulo:"Nuestros momentos favoritos.", texto:"Escribe aquí tu texto.", foto:"foto7.jpg", frase:"Escribe aquí una frase bonita." },

  { tipo:"texto", titulo:"También tuvimos días difíciles.", texto:"Pero seguimos creando recuerdos." },

  { tipo:"foto", titulo:"Las cosas pequeñas también se volvieron grandes recuerdos.", texto:"Escribe aquí tu texto.", foto:"foto8.jpg" },

  { tipo:"carta", titulo:"Quiero decirte algo..." },

  { tipo:"razones", titulo:"Y si me preguntas por qué te amo..." },

  { tipo:"dobles", titulo:"Nosotros.", texto:"", fotos:["foto9.jpg","foto10.jpg"] },

  // ✏️ AQUÍ PUEDES AGREGAR MÁS ESCENAS DE FOTOS (copia una de arriba y cambia foto20.jpg, título, texto)
  // { tipo:"foto", titulo:"Título", texto:"Texto", foto:"foto20.jpg", boton:"Continuar ❤️" },

  { tipo:"galeria", titulo:"Nuestros recuerdos ❤️" },
  { tipo:"contador", titulo:"Y mira todo lo que llevamos..." },
  { tipo:"cancion", titulo:"Una canción que me recuerda a ti 🎵" },
  { tipo:"futuro", titulo:"Pero nuestra historia todavía no termina..." },
  { tipo:"final" },
];

/* =====================================================
   DE AQUÍ PARA ABAJO NO NECESITAS CAMBIAR NADA
   ===================================================== */
const $ = id => document.getElementById(id);
const FALLA = "this.outerHTML='<div class=foto-vacia>📷</div>'";
const foto = (n, pie="") => `<div class="vineta"><img src="imagenes/${n}" alt="" loading="lazy" onerror="${FALLA}">${pie?`<small>${pie}</small>`:""}</div>`;

function corazones(n = 25) {
  for (let i = 0; i < n; i++) {
    const c = document.createElement("span");
    c.className = "corazon"; c.textContent = ["❤️","💕","🌹","💗"][i % 4];
    c.style.cssText = `left:${Math.random()*100}%;font-size:${16+Math.random()*24}px;animation-duration:${3+Math.random()*3}s;animation-delay:${Math.random()*1.5}s`;
    $("lluvia").appendChild(c); setTimeout(() => c.remove(), 8000);
  }
}

function cambiar(a, b) { $(a).classList.remove("activa"); $(b).classList.add("activa"); window.scrollTo(0, 0); }

$("saludo").textContent = `Hola, ${NOMBRE_ELLA} ❤️`;
$("btnIngresar").onclick = () => cambiar("bienvenida", "acceso");

$("fecha").addEventListener("input", e => {
  const d = e.target.value.replace(/\D/g, "").slice(0, 8);
  e.target.value = d.length > 4 ? `${d.slice(0,2)}/${d.slice(2,4)}/${d.slice(4)}` : d.length > 2 ? `${d.slice(0,2)}/${d.slice(2)}` : d;
});
$("fecha").addEventListener("keydown", e => { if (e.key === "Enter") validar(); });
$("btnDesbloquear").onclick = validar;

function validar() {
  const limpio = s => s.replace(/\D/g, "");
  if (limpio($("fecha").value) === limpio(FECHA_CLAVE)) {
    $("error").textContent = ""; corazones(35);
    $("correcto").classList.add("ver");
    setTimeout(() => {
      $("acceso").classList.remove("activa"); $("historia").classList.add("activa");
      window.scrollTo(0, 0); observar();
    }, 2600);
  } else {
    $("error").textContent = "Esa no es... piensa un poquito más, amor ❤️";
  }
}

/* ---- Construir escenas ---- */
const cuerpo = e => `${e.fecha ? `<div class="fecha">${e.fecha}</div>` : ""}${e.titulo ? `<h2>${e.titulo}</h2>` : ""}${e.texto ? `<p>${e.texto.replace(/\n/g, "<br>")}</p>` : ""}`;

function construir(e, i) {
  const s = document.createElement("section");
  s.className = "escena"; let h = "";
  switch (e.tipo) {
    case "texto": h = cuerpo(e); break;
    case "foto": h = cuerpo(e) + (e.globo ? `<div class="globo">${e.globo}</div>` : "") + foto(e.foto, e.pie) + (e.frase ? `<p class="frase">${e.frase}</p>` : ""); break;
    case "dobles": h = cuerpo(e) + `<div class="dobles">${e.fotos.map(f => foto(f)).join("")}</div>` + (e.pie ? `<p class="frase">${e.pie}</p>` : ""); break;
    case "fechaGrande": h = `<div class="fecha grande">${e.fecha}</div><h2>${e.titulo}</h2>` + foto(e.foto) + `<p>${e.texto}</p>`; break;
    case "carta": h = cuerpo(e) + `<div class="carta">${CARTA.split("\n").map(l => `<span class="linea">${l}</span>`).join("")}</div>`; break;
    case "razones": h = cuerpo(e) + `<div class="razones" id="razones"></div><button class="btn" id="masRazones">Quiero mostrarte más...</button>`; break;
    case "galeria": h = cuerpo(e) + `<div class="galeria">${Array.from({length: TOTAL_FOTOS_GALERIA}, (_, k) => `<img src="imagenes/foto${k+1}.jpg" alt="" loading="lazy" onerror="this.remove()">`).join("")}</div><p class="suave">Toca una foto para verla grande</p>`; break;
    case "contador": h = cuerpo(e) + `<div class="contador">${["Años","Meses","Días","Horas","Minutos","Segundos"].map(t => `<div><b data-t="${t}">0</b><span>${t}</span></div>`).join("")}</div><p class="frase">Y cada segundo contigo cuenta.</p>`; break;
    case "cancion": h = cuerpo(e) + `<p>Dale play y recuerda...</p><button class="btn" id="btnPlay">▶ Reproducir</button><p class="suave">(Pon tu audio en imagenes/cancion.mp3)</p>`; break;
    case "futuro": h = cuerpo(e) + `<div class="lista">${FUTURO.map(f => `<p>${f}</p>`).join("")}</div><p class="frase">Nos queda muchísimo por escribir juntos. ❤️</p>`; break;
    case "final": h = `<h2>Espera...</h2><p>Esta historia todavía no termina.</p><button class="btn" id="btnFinal">Ver la última página ❤️</button>`; break;
  }
  if (e.tipo !== "final") h += `<button class="btn sig">${e.boton || "Continuar ❤️"}</button>`;
  s.innerHTML = h; return s;
}
ESCENAS.forEach((e, i) => $("historia").appendChild(construir(e, i)));

document.querySelectorAll(".sig").forEach(b => b.onclick = () => b.closest(".escena").nextElementSibling?.scrollIntoView({behavior: "smooth"}));

/* Razones */
let mostradas = 0;
function masRazones() {
  RAZONES.slice(mostradas, mostradas + 3).forEach(r => { const d = document.createElement("div"); d.className = "razon"; d.textContent = r; $("razones").appendChild(d); });
  mostradas += 3; if (mostradas >= RAZONES.length) $("masRazones").style.display = "none";
}
$("masRazones").onclick = masRazones; masRazones();

/* Galería: visor grande */
document.querySelectorAll(".galeria img").forEach(img => img.onclick = () => { $("visorImg").src = img.src; $("visor").classList.add("ver"); });
$("cerrar").onclick = () => $("visor").classList.remove("ver");
$("visor").onclick = e => { if (e.target.id === "visor") $("visor").classList.remove("ver"); };

/* Contador */
function contar() {
  const n = new Date(); let a = n.getFullYear() - INICIO.getFullYear(), m = n.getMonth() - INICIO.getMonth(), d = n.getDate() - INICIO.getDate();
  if (d < 0) { m--; d += new Date(n.getFullYear(), n.getMonth(), 0).getDate(); }
  if (m < 0) { a--; m += 12; }
  const v = {Años: a, Meses: m, Días: d, Horas: n.getHours(), Minutos: n.getMinutes(), Segundos: n.getSeconds()};
  document.querySelectorAll("[data-t]").forEach(el => el.textContent = v[el.dataset.t]);
}
contar(); setInterval(contar, 1000);

/* Canción */
const audio = $("audio"); audio.src = CANCION;
$("btnPlay").onclick = () => {
  if (audio.paused) audio.play().then(() => $("btnPlay").textContent = "⏸ Pausar").catch(() => alert("Aún no hay canción en imagenes/cancion.mp3"));
  else { audio.pause(); $("btnPlay").textContent = "▶ Reproducir"; }
};

/* Aparición suave al desplazarse (+ carta línea por línea) */
function observar() {
  const o = new IntersectionObserver(es => es.forEach(x => {
    if (!x.isIntersecting || x.target.classList.contains("ver")) return;
    x.target.classList.add("ver");
    x.target.querySelectorAll(".lista").forEach(l => l.classList.add("ver"));
    x.target.querySelectorAll(".linea").forEach((l, k) => setTimeout(() => l.classList.add("ver"), 600 + k * 650));
    if (x.target.querySelector(".fecha.grande")) corazones(12);
  }), {threshold: .25});
  document.querySelectorAll(".escena").forEach(s => o.observe(s));
}

/* Sorpresa final */
$("btnFinal").onclick = () => {
  $("telon").classList.add("ver");
  $("mensajeFinal").innerHTML = FINAL.map((l, i) => `<p class="${l[1] || ""}" style="animation-delay:${2 + i * 2.2}s">${l[0]}</p>`).join("");
  corazones(40); setInterval(() => corazones(8), 2500);
};
