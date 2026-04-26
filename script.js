const principleContent = {
  cumhuriyetcilik: {
    details:
      "Cumhuriyetçilik, yönetim gücünün bir hanedana değil millete ait olduğunu savunur. Meclis ve yurttaşın siyasal iradesi, devletin temel zemini haline gelir.",
    focus: "TBMM'nin açılması ve Cumhuriyet'in ilanı",
    impact: "Meşruiyetin kaynağı kişi değil millet iradesi oldu.",
    history: "1919: Samsun • 1920: TBMM • 1923: Cumhuriyetin ilanı • 1924: Halifeliğin sona ermesi",
    note:
      "Bu ilke, diğer bütün ilkelerin uygulanacağı siyasal zemini kurduğu için kurucu rol taşır."
  },
  milliyetcilik: {
    details:
      "Atatürk'ün milliyetçilik anlayışı, ortak tarih ve kader etrafında birleşen yurttaşlık bilincini güçlendirir. Irk üstünlüğünden değil bağımsız ve birlikte yaşayan bir millet fikrinden beslenir.",
    focus: "Milli Mücadele ruhu ve ulusal birlik fikri",
    impact: "Bağımsızlığı koruyan ortak aidiyet ve dayanışma duygusu güçlendi.",
    history: "1919-1922: Milli Mücadele • 1923: Lozan • Yeni devletin uluslararası tanınması",
    note:
      "Milliyetçilik, yeni devletin ortak kimlik ve bağımsızlık duygusuyla kalıcılaşmasına katkı sağladı."
  },
  halkcilik: {
    details:
      "Halkçılık, toplum içindeki sınıf ayrıcalıklarını reddeder ve devletin tüm yurttaşlara eşit mesafede durmasını hedefler. Katılım duygusunu güçlendiren bir eşit yurttaşlık anlayışı kurar.",
    focus: "Eşit yurttaşlık, sosyal reformlar ve siyasal haklar",
    impact: "Tebaa anlayışından eşit yurttaşlık kültürüne geçiş hızlandı.",
    history: "1924: Medeni düzenlemeler • 1928: Harf Devrimi • 1934: Siyasal hakların genişlemesi",
    note:
      "Cumhuriyetin toplumsal tabanını genişleten bu ilke, dayanışma ve eşitlik fikrini görünür hale getirdi."
  },
  laiklik: {
    details:
      "Laiklik, devlet yönetimi ile dini kurumların alanlarını ayırarak hukuk, eğitim ve kamusal düzenin rasyonel temelde örgütlenmesini sağlar.",
    focus: "Halifeliğin kaldırılması, eğitim ve hukuk reformları",
    impact: "Kamusal alan ortak hukuk ve akıl ilkeleriyle daha tutarlı hale geldi.",
    history: "1924: Halifeliğin kaldırılması • 1924: Eğitim birliği • 1926: Medeni Kanun",
    note:
      "Laiklik, yalnızca din-devlet ayrımı değil; kamusal kararların akılcı esaslara dayanması anlamına gelir."
  },
  devletcilik: {
    details:
      "Devletçilik, ekonominin tümüyle devlet kontrolüne alınması değil; ihtiyaç duyulan alanlarda devletin yönlendirici ve yatırımcı rol üstlenmesidir.",
    focus: "Sanayi planları, demiryolları ve kamu yatırımları",
    impact: "Üretim ve ulaşım kapasitesi daha hızlı büyüyerek ekonomik dayanıklılık arttı.",
    history: "1923-1939: Sanayi planları • Demiryolu genişlemesi • Sümerbank ve Etibank",
    note:
      "Ekonomik bağımsızlık olmadan siyasal bağımsızlığın eksik kalacağı düşüncesi bu ilkenin merkezindedir."
  },
  inkilapcilik: {
    details:
      "İnkılapçılık, yapılan reformları yalnızca korumakla yetinmez; değişen koşullara göre kendini yenileyebilen bir toplum düzenini savunur.",
    focus: "Harf Devrimi, kültürel dönüşüm ve günlük yaşam reformları",
    impact: "Yenilikler günlük hayata yayılarak kurumsallaştı ve değişim fikri güçlendi.",
    history: "1925: Kıyafet düzenlemeleri • 1928: Harf Devrimi • 1928-1934: Modernleşme adımları",
    note:
      "Cumhuriyetin yalnızca kurulmuş değil, sürekli gelişen bir proje olduğunu vurgulayan ilkedir."
  }
};

const revealElements = document.querySelectorAll(".reveal");
const principleItems = document.querySelectorAll(".principle-item");
const principleTriggers = document.querySelectorAll(".principle-trigger");

function collapseAllPrinciples() {
  principleItems.forEach((item) => {
    item.classList.remove("is-expanded");
    const trigger = item.querySelector(".principle-trigger");
    const content = item.querySelector(".principle-content");
    if (trigger) trigger.setAttribute("aria-expanded", "false");
    if (content) content.hidden = true;
  });
}

function expandPrinciple(item) {
  const key = item.dataset.principle;
  const content = principleContent[key];

  if (!content) return;

  collapseAllPrinciples();

  item.classList.add("is-expanded");
  const trigger = item.querySelector(".principle-trigger");
  const contentDiv = item.querySelector(".principle-content");
  const detailsText = item.querySelector(".principle-details-text");
  const focusEl = item.querySelector(".principle-focus");
  const impactEl = item.querySelector(".principle-impact");
  const historyEl = item.querySelector(".principle-history");
  const noteEl = item.querySelector(".principle-note");

  if (trigger) trigger.setAttribute("aria-expanded", "true");
  if (contentDiv) contentDiv.hidden = false;
  if (detailsText) detailsText.textContent = content.details;
  if (focusEl) focusEl.textContent = content.focus;
  if (impactEl) impactEl.textContent = content.impact;
  if (historyEl) historyEl.textContent = content.history;
  if (noteEl) noteEl.textContent = content.note;
}

principleTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const item = trigger.closest(".principle-item");
    if (!item) return;

    if (item.classList.contains("is-expanded")) {
      collapseAllPrinciples();
      return;
    }

    expandPrinciple(item);
  });
});

if (principleItems.length > 0) {
  expandPrinciple(principleItems[0]);
}

window.addEventListener("load", () => {
  if (window.location.hash) {
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
  }
  window.scrollTo({ top: 0, left: 0 });
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.16 }
);

revealElements.forEach((element) => revealObserver.observe(element));

/* ========== ADVANCED FOTOĞRAF ANİMASYONLARI ========== */

// Parallax scroll effect
const parallaxImages = document.querySelectorAll(".gallery-main img, .story-card img");

if (parallaxImages.length > 0) {
  const handleParallax = (e) => {
    parallaxImages.forEach((img) => {
      const rect = img.getBoundingClientRect();
      const yOffset = (rect.top / window.innerHeight) * 15;
      img.style.transform = `translateY(${yOffset}px) ${img.parentElement?.classList.contains("gallery-main") ? "scale(1.02)" : "scale(1)"}`;
    });
  };

  window.addEventListener("scroll", () => {
    requestAnimationFrame(handleParallax);
  }, { passive: true });
}

// Image glow effect on hover
const images = document.querySelectorAll(".story-card img, .gallery-mini img, .principle-art img");

images.forEach((img) => {
  img.addEventListener("mousemove", (e) => {
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    img.style.cssText = `
      background: radial-gradient(circle at ${x}px ${y}px, rgba(198, 154, 73, 0.2), transparent);
    `;
  });

  img.addEventListener("mouseleave", () => {
    img.style.cssText = "";
  });
});

// Scroll reveal with stagger animation
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px"
  };

  const scrollRevealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("is-visible");
        }, index * 100);
        scrollRevealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".story-card, .gallery-mini, .timeline-card").forEach((el) => {
    scrollRevealObserver.observe(el);
  });
});

// Smooth scroll animations for images
const imageContainers = document.querySelectorAll(".story-card, .gallery-layout, .principle-art");

imageContainers.forEach((container) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const images = entry.target.querySelectorAll("img");
          images.forEach((img) => {
            img.style.transition = "transform 600ms cubic-bezier(0.23, 1, 0.320, 1), filter 600ms ease";
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(container);
});
