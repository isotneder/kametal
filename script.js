const principleContent = {
  cumhuriyetcilik: {
    label: "01 • Cumhuriyetçilik",
    title: "Millet egemenliği, modern yönetimin merkezine yerleşir.",
    summary:
      "Cumhuriyetçilik, yönetim gücünün bir hanedana değil millete ait olduğunu savunur. Bu anlayış, meclisi ve yurttaşın siyasal iradesini devletin temel zemini haline getirir.",
    focus: "TBMM'nin açılması, Cumhuriyet'in ilanı",
    impact: "Meşruiyetin kaynağı millet iradesi oldu.",
    note: "Bu ilke, diğer tüm ilkelerin uygulanacağı siyasal zemini kurduğu için kurucu bir rol üstlenir."
  },
  milliyetcilik: {
    label: "02 • Milliyetçilik",
    title: "Ulusal birlik, bağımsızlık fikrinin koruyucu kalkanına dönüşür.",
    summary:
      "Atatürk'ün milliyetçilik anlayışı, ortak tarih ve kader etrafında birleşen yurttaşlık bilincini güçlendirir. Irk üstünlüğünden değil, bağımsız ve birlikte yaşayan bir millet fikrinden beslenir.",
    focus: "Milli Mücadele ruhu, Misak-ı Milli anlayışı",
    impact: "Ulusal dayanışma, dış baskılara karşı ortak direnç yarattı.",
    note: "Bu ilke, yeni devletin varlığını ortak kimlik ve bağımsızlık duygusuyla sağlamlaştırdı."
  },
  halkcilik: {
    label: "03 • Halkçılık",
    title: "Ayrıcalıksız, eşit ve ortak sorumluluk taşıyan yurttaşlık anlayışı.",
    summary:
      "Halkçılık, toplum içindeki sınıf ayrıcalıklarını reddeder ve devletin tüm yurttaşlara eşit mesafede durmasını hedefler. Yönetimde ve kamusal yaşamda katılım duygusunu güçlendirir.",
    focus: "Sosyal reformlar, eşit yurttaşlık anlayışı",
    impact: "Tebaa anlayışından yurttaşlık kültürüne geçiş hızlandı.",
    note: "Cumhuriyet'in toplumsal tabanını genişleten bu ilke, dayanışma ve eşitlik fikrini öne çıkardı."
  },
  laiklik: {
    label: "04 • Laiklik",
    title: "Kamusal düzen, inançtan değil hukuk ve akıldan güç alır.",
    summary:
      "Laiklik, devlet yönetimi ile dini kurumların alanlarını ayırarak hukuk, eğitim ve kamu düzeninin rasyonel temelde örgütlenmesini sağlar. Bu yaklaşım, farklı inançların bir arada yaşamasını da güvence altına alır.",
    focus: "Halifeliğin kaldırılması, hukuk ve eğitim reformları",
    impact: "Devlet kurumları daha tutarlı ve merkezi bir yapıya kavuştu.",
    note: "Laiklik, yalnızca din-devlet ayrımı değil; aynı zamanda kamusal kararların akılcı esaslara dayanmasıdır."
  },
  devletcilik: {
    label: "05 • Devletçilik",
    title: "Kalkınma, özel girişimle birlikte kamusal öncülükle hız kazanır.",
    summary:
      "Devletçilik, ekonominin tamamen devlet kontrolüne alınması değil; ihtiyaç duyulan alanlarda devletin yönlendirici ve yatırımcı rol üstlenmesidir. Özellikle sanayileşme ve altyapı hamlelerinde belirleyici olmuştur.",
    focus: "Sanayi planları, demiryolları, kamu yatırımları",
    impact: "Genç Cumhuriyet, üretim ve ulaşım kapasitesini daha hızlı büyüttü.",
    note: "Ekonomik bağımsızlık olmadan siyasal bağımsızlığın eksik kalacağı düşüncesi bu ilkenin merkezindedir."
  },
  inkilapcilik: {
    label: "06 • İnkılapçılık",
    title: "Toplumun çağın gerisinde kalmaması için yenilik süreklilik kazanır.",
    summary:
      "İnkılapçılık, yapılan reformları korumakla yetinmez; değişen koşullara göre kendini yenileyebilen bir toplum düzenini savunur. Durağanlığı değil ilerlemeyi esas alır.",
    focus: "Harf Devrimi, kıyafet ve kültür reformları",
    impact: "Yenilikler günlük yaşama yayılarak kurumsallaştı.",
    note: "Bu ilke, Cumhuriyet'in sadece kurulmuş değil, sürekli gelişen bir proje olduğunu vurgular."
  }
};

const revealElements = document.querySelectorAll(".reveal");
const counters = document.querySelectorAll(".counter");
const principleButtons = document.querySelectorAll(".principle-card");
const spotlight = document.getElementById("spotlight");

const spotlightLabel = document.getElementById("spotlight-label");
const spotlightTitle = document.getElementById("spotlight-title");
const spotlightSummary = document.getElementById("spotlight-summary");
const spotlightFocus = document.getElementById("spotlight-focus");
const spotlightImpact = document.getElementById("spotlight-impact");
const spotlightNote = document.getElementById("spotlight-note");

function updateSpotlight(key) {
  const content = principleContent[key];

  if (!content || !spotlight) {
    return;
  }

  spotlight.dataset.theme = key;
  spotlightLabel.textContent = content.label;
  spotlightTitle.textContent = content.title;
  spotlightSummary.textContent = content.summary;
  spotlightFocus.textContent = content.focus;
  spotlightImpact.textContent = content.impact;
  spotlightNote.textContent = content.note;

  principleButtons.forEach((button) => {
    const isActive = button.dataset.principle === key;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

principleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    updateSpotlight(button.dataset.principle);
  });
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealElements.forEach((element) => revealObserver.observe(element));

function animateCounter(element) {
  const target = Number(element.dataset.target || 0);
  const duration = 1000;
  const startTime = performance.now();

  function frame(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = Math.round(target * eased).toString();

    if (progress < 1) {
      requestAnimationFrame(frame);
    }
  }

  requestAnimationFrame(frame);
}

const counterObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.7 }
);

counters.forEach((counter) => counterObserver.observe(counter));

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      document.querySelectorAll(".site-nav a").forEach((link) => {
        const isMatch = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("is-active", isMatch);
      });
    });
  },
  { threshold: 0.52 }
);

document.querySelectorAll("main section[id]").forEach((section) => {
  sectionObserver.observe(section);
});

const heroVisual = document.querySelector(".hero-visual");

if (heroVisual && window.matchMedia("(pointer: fine)").matches) {
  heroVisual.addEventListener("pointermove", (event) => {
    const rect = heroVisual.getBoundingClientRect();
    const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
    const offsetY = (event.clientY - rect.top) / rect.height - 0.5;

    heroVisual.style.transform = `perspective(1200px) rotateX(${offsetY * -8}deg) rotateY(${offsetX * 10}deg)`;
  });

  heroVisual.addEventListener("pointerleave", () => {
    heroVisual.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg)";
  });
}
