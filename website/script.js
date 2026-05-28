const header = document.querySelector("[data-header]");
const ageGate = document.querySelector("#ageGate");
const ageAccept = document.querySelector("#ageAccept");
const ageDecline = document.querySelector("#ageDecline");
const ageMessage = document.querySelector("#ageMessage");
const galleryFilters = document.querySelectorAll("[data-gallery-filter]");
const galleryItems = document.querySelectorAll("[data-gallery-item]");
const languageMenu = document.querySelector("[data-language-menu]");
const languageButton = document.querySelector("#languageButton");
const languageOptions = document.querySelectorAll("[data-language-option]");
const languageCurrentFlag = document.querySelector("[data-language-current-flag]");
const languageCurrentCode = document.querySelector("[data-language-current-code]");
const parallaxLayers = document.querySelectorAll("[data-parallax]");
const lightbox = document.querySelector("#imageLightbox");
const lightboxImage = lightbox?.querySelector("img");
const lightboxClose = lightbox?.querySelector(".lightbox-close");

const languageMeta = {
  en: { flagClass: "flag-en", code: "EN" },
  ru: { flagClass: "flag-ru", code: "RU" },
  th: { flagClass: "flag-th", code: "TH" },
  zh: { flagClass: "flag-zh", code: "ZH" },
};

const translations = {
  en: {
    navVisit: "Visit",
    navAssortment: "Assortment",
    navPhotos: "Photos",
    navUpdates: "Updates",
    navReviews: "Reviews",
    navLocation: "Location",
    navContact: "Contact",
    callShort: "Call",
    heroEyebrow: "Pattaya / Chon Buri",
    heroCopy: "A friendly local cannabis shop near Thepprasit Night Market, known for fair value, helpful guidance, and a relaxed community atmosphere.",
    directions: "Get Directions",
    callFull: "Call +66 80 995 0256",
    factRating: "rating visible on Google and Weed.th",
    factReviews: "5-star reviews on Weed.th",
    factPlusCode: "Pattaya Plus Code",
    whyEyebrow: "Why visit",
    whyTitle: "Local, relaxed, easy to find.",
    whyCopy: "Reviews describe Community Cannabis as a welcoming Pattaya stop with friendly staff, good prices, a chill place to sit, and easy access from Thepprasit Night Market. The public Facebook page also lists delivery, outdoor seating, and in-store pickup.",
    featureOneTitle: "Helpful staff",
    featureOneCopy: "Customers mention clear recommendations, good conversations, and a friendly owner.",
    featureTwoTitle: "Fair value",
    featureTwoCopy: "Good prices and value for money are repeated themes across customer reviews.",
    featureThreeTitle: "Market-side location",
    featureThreeCopy: "A practical stop near Thepprasit Soi 3 and Thepprasit Night Market in Pattaya.",
    expectEyebrow: "What to expect",
    expectTitle: "Flower, edibles, accessories, pickup, and guidance without the hard sell.",
    expectCopy: "Public listings and reviews mention flower, edibles such as brownies, cookies and gummies, plus smoking accessories and glassware. Facebook lists delivery, outdoor seating, and in-store pickup; availability should be confirmed directly with the shop.",
    expectItemOne: "Flower and staff recommendations",
    expectItemTwo: "Edibles mentioned by customers",
    expectItemThree: "Accessories visible in-store",
    expectItemFour: "Outdoor seating and local atmosphere",
    expectItemFive: "Delivery and in-store pickup listed on Facebook",
    expectItemSix: "Facebook wall posts show rotating flower and accessory updates",
    assortmentEyebrow: "Assortment",
    assortmentTitle: "Rotating flower, edibles, accessories, and care products.",
    assortmentCopy: "Public Facebook posts and customer reviews show a menu that changes over time. This section treats Facebook product posts as historical examples, not a live menu; call or message the shop for today's exact availability.",
    productFlowerExample: "Flower example",
    indicaTitle: "Indica-style drops",
    indicaCopy: "Oreo King appeared in a public Facebook wall post as one of the rotating flower updates.",
    sativaTitle: "Sativa-style drops",
    sativaCopy: "Jack Herer appeared in another wall post, showing that the shop posts strain updates online.",
    accessoriesLabel: "Accessories",
    careTitle: "Care products",
    careCopy: "Facebook also shows accessory support products, including cleaning supplies for glassware.",
    seenOlder: "Seen in older public posts",
    menuBoardCopy: "Older captions also included THC/CBD details and prices. Those details are kept in the research pack and should be confirmed by the owner before publishing as menu data.",
    photoEyebrow: "Photo menu",
    photoTitle: "Browse the shop, assortment, and Facebook updates separately.",
    filterAll: "All",
    filterShop: "Shop",
    filterAssortment: "Assortment",
    filterUpdates: "Updates",
    localLabel: "Local",
    captionStorefront: "Storefront near Thepprasit Soi 3",
    captionInterior: "Interior display",
    captionMarket: "Thepprasit Night Market context",
    captionCounter: "Counter and accessories",
    captionFlower: "Flower post example",
    captionCare: "Care product post",
    captionUpdates: "Closure and hours notices",
    wallEyebrow: "Facebook wall",
    wallTitle: "Menu notes, closures, and local updates live on Facebook.",
    wallCopy: "The public wall is useful for four categories: rotating product posts, accessory updates, temporary opening-hour notices, and local Pattaya/community posts. Exact menu details should be checked directly before visiting.",
    openFacebookWall: "Open Facebook wall",
    wallNoteOneTitle: "Product drops",
    wallNoteOneCopy: "Public captions show flower posts across indica, sativa, and hybrid-style categories.",
    wallNoteTwoTitle: "Accessories and care",
    wallNoteTwoCopy: "Accessory support products appear on the wall, so the site separates them from flower.",
    wallNoteThreeTitle: "Hours and closures",
    wallNoteThreeCopy: "Older posts mention daily 10:00-22:00, temporary closures, and special opening times.",
    wallNoteFourTitle: "Community and compliance",
    wallNoteFourCopy: "Posts include Thepprasit Night Market references, Thai New Year/420 content, music, and GACP/prescription notes.",
    reviewsEyebrow: "Reputation",
    reviewsTitle: "Loved by locals and travelers.",
    reviewsSmall: "41 reviews on Weed.th, all visible ratings are 5-star.",
    reviewsCopy: "Reviews appear in Thai, English, Russian, German, and Italian. The repeated message: friendly staff, good value, chill atmosphere, good product guidance, and a convenient stop near Thepprasit Night Market.",
    followersLabel: "Facebook followers",
    visitsLabel: "Facebook visits/check-ins",
    viewSource: "View source listing",
    locationEyebrow: "Location",
    locationTitle: "Find us near Thepprasit Night Market.",
    locationCopy: "Google Maps coordinates: 12.9076217, 100.8914428. Facebook lists the service area as Pattaya, Chon Buri. Call or message before visiting to confirm today's hours.",
    openGoogleMaps: "Open Google Maps",
    contactEyebrow: "Contact",
    contactTitle: "Call or message before visiting to confirm today's hours.",
    profileCopy: "Public Facebook page: 159 followers, 108 visits/check-ins, LINE, Instagram, and X listed.",
    footerCopy: "Adults 21+ only. Follow local laws. No medical claims are made on this website.",
    backTop: "Back to top",
  },
};

translations.ru = {
  ...translations.en,
  navVisit: "\u0412\u0438\u0437\u0438\u0442",
  navAssortment: "\u0410\u0441\u0441\u043e\u0440\u0442\u0438\u043c\u0435\u043d\u0442",
  navPhotos: "\u0424\u043e\u0442\u043e",
  navUpdates: "\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f",
  navReviews: "\u041e\u0442\u0437\u044b\u0432\u044b",
  navLocation: "\u041b\u043e\u043a\u0430\u0446\u0438\u044f",
  navContact: "\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",
  callShort: "\u0417\u0432\u043e\u043d\u043e\u043a",
  heroEyebrow: "\u041f\u0430\u0442\u0442\u0430\u0439\u044f / \u0427\u043e\u043d\u0431\u0443\u0440\u0438",
  heroCopy: "\u0414\u0440\u0443\u0436\u0435\u043b\u044e\u0431\u043d\u044b\u0439 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0439 cannabis shop \u0440\u044f\u0434\u043e\u043c \u0441 Thepprasit Night Market: \u0447\u0435\u0441\u0442\u043d\u044b\u0435 \u0446\u0435\u043d\u044b, \u0441\u043f\u043e\u043a\u043e\u0439\u043d\u0430\u044f \u0430\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u0430 \u0438 \u043f\u043e\u043d\u044f\u0442\u043d\u044b\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438.",
  directions: "\u041c\u0430\u0440\u0448\u0440\u0443\u0442",
  callFull: "\u041f\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u044c +66 80 995 0256",
  factRating: "\u0440\u0435\u0439\u0442\u0438\u043d\u0433 \u0432\u0438\u0434\u0435\u043d \u0432 Google \u0438 Weed.th",
  factReviews: "5-\u0437\u0432\u0435\u0437\u0434\u043e\u0447\u043d\u044b\u0435 \u043e\u0442\u0437\u044b\u0432\u044b \u043d\u0430 Weed.th",
  whyEyebrow: "\u041f\u043e\u0447\u0435\u043c\u0443 \u0437\u0430\u0439\u0442\u0438",
  whyTitle: "\u041b\u043e\u043a\u0430\u043b\u044c\u043d\u043e, \u0441\u043f\u043e\u043a\u043e\u0439\u043d\u043e, \u043b\u0435\u0433\u043a\u043e \u043d\u0430\u0439\u0442\u0438.",
  photoEyebrow: "\u0424\u043e\u0442\u043e-\u043c\u0435\u043d\u044e",
  photoTitle: "\u041c\u0430\u0433\u0430\u0437\u0438\u043d, \u0430\u0441\u0441\u043e\u0440\u0442\u0438\u043c\u0435\u043d\u0442 \u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f Facebook \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e.",
  filterAll: "\u0412\u0441\u0435",
  filterShop: "\u041c\u0430\u0433\u0430\u0437\u0438\u043d",
  filterAssortment: "\u0410\u0441\u0441\u043e\u0440\u0442\u0438\u043c\u0435\u043d\u0442",
  filterUpdates: "\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f",
  locationTitle: "\u041d\u0430\u0439\u0434\u0438\u0442\u0435 \u043d\u0430\u0441 \u0440\u044f\u0434\u043e\u043c \u0441 Thepprasit Night Market.",
  contactEyebrow: "\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",
  contactTitle: "\u041f\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u0435 \u0438\u043b\u0438 \u043d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043f\u0435\u0440\u0435\u0434 \u0432\u0438\u0437\u0438\u0442\u043e\u043c.",
  footerCopy: "\u0422\u043e\u043b\u044c\u043a\u043e 21+. \u0421\u043e\u0431\u043b\u044e\u0434\u0430\u0439\u0442\u0435 \u043c\u0435\u0441\u0442\u043d\u044b\u0435 \u0437\u0430\u043a\u043e\u043d\u044b. \u041d\u0430 \u0441\u0430\u0439\u0442\u0435 \u043d\u0435\u0442 \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u0438\u0445 \u0437\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u0439.",
  backTop: "\u041d\u0430\u0432\u0435\u0440\u0445",
};

translations.th = {
  ...translations.en,
  navVisit: "\u0e40\u0e22\u0e35\u0e48\u0e22\u0e21\u0e0a\u0e21",
  navAssortment: "\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32",
  navPhotos: "\u0e23\u0e39\u0e1b\u0e20\u0e32\u0e1e",
  navUpdates: "\u0e2d\u0e31\u0e1b\u0e40\u0e14\u0e15",
  navReviews: "\u0e23\u0e35\u0e27\u0e34\u0e27",
  navLocation: "\u0e17\u0e35\u0e48\u0e15\u0e31\u0e49\u0e07",
  navContact: "\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d",
  callShort: "\u0e42\u0e17\u0e23",
  heroEyebrow: "\u0e1e\u0e31\u0e17\u0e22\u0e32 / \u0e0a\u0e25\u0e1a\u0e38\u0e23\u0e35",
  directions: "\u0e14\u0e39\u0e40\u0e2a\u0e49\u0e19\u0e17\u0e32\u0e07",
  filterAll: "\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",
  filterShop: "\u0e23\u0e49\u0e32\u0e19",
  filterAssortment: "\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32",
  filterUpdates: "\u0e2d\u0e31\u0e1b\u0e40\u0e14\u0e15",
  openGoogleMaps: "\u0e40\u0e1b\u0e34\u0e14 Google Maps",
};

translations.zh = {
  ...translations.en,
  navVisit: "\u5230\u8bbf",
  navAssortment: "\u4ea7\u54c1",
  navPhotos: "\u7167\u7247",
  navUpdates: "\u66f4\u65b0",
  navReviews: "\u8bc4\u4ef7",
  navLocation: "\u4f4d\u7f6e",
  navContact: "\u8054\u7cfb",
  callShort: "\u7535\u8bdd",
  heroEyebrow: "\u82ad\u63d0\u96c5 / \u6625\u6b66\u91cc",
  directions: "\u83b7\u53d6\u8def\u7ebf",
  filterAll: "\u5168\u90e8",
  filterShop: "\u5e97\u94fa",
  filterAssortment: "\u4ea7\u54c1",
  filterUpdates: "\u66f4\u65b0",
  openGoogleMaps: "\u6253\u5f00 Google Maps",
};

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

const setLanguageMenuState = (isOpen) => {
  if (!languageMenu || !languageButton) return;
  languageMenu.classList.toggle("is-open", isOpen);
  languageButton.setAttribute("aria-expanded", String(isOpen));
};

const applyLanguage = (language) => {
  const dictionary = translations[language] || translations.en;
  const meta = languageMeta[language] || languageMeta.en;

  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.textContent = dictionary[key];
  });

  if (languageCurrentFlag) {
    languageCurrentFlag.className = `flag-icon ${meta.flagClass}`;
  }
  if (languageCurrentCode) languageCurrentCode.textContent = meta.code;
  languageOptions.forEach((option) => {
    option.setAttribute("aria-selected", String(option.dataset.languageOption === language));
  });

  window.localStorage.setItem("communityCannabisLanguage", language);
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

if (languageButton && languageOptions.length) {
  const savedLanguage = window.localStorage.getItem("communityCannabisLanguage") || "en";
  applyLanguage(translations[savedLanguage] ? savedLanguage : "en");

  languageButton.addEventListener("click", () => {
    setLanguageMenuState(!languageMenu.classList.contains("is-open"));
  });

  languageButton.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setLanguageMenuState(true);
      languageOptions[0].focus();
    }
  });

  languageOptions.forEach((option) => {
    option.addEventListener("click", () => {
      applyLanguage(option.dataset.languageOption);
      setLanguageMenuState(false);
      languageButton.focus();
    });
  });

  document.addEventListener("click", (event) => {
    if (!languageMenu.contains(event.target)) setLanguageMenuState(false);
  });
}

if (ageGate && ageAccept) {
  const accepted = window.localStorage.getItem("communityCannabisAgeConfirmed21") === "yes";

  if (accepted) {
    ageGate.hidden = true;
    ageGate.classList.add("is-hidden");
  } else {
    ageGate.hidden = false;
    document.body.classList.add("age-lock");
    ageAccept.focus();
  }

  ageAccept.addEventListener("click", () => {
    window.localStorage.setItem("communityCannabisAgeConfirmed21", "yes");
    ageGate.classList.add("is-opening");
    document.body.classList.remove("age-lock");
    window.setTimeout(() => {
      ageGate.classList.add("is-hidden");
      ageGate.hidden = true;
    }, 820);
  });
}

if (ageGate && ageDecline) {
  ageDecline.addEventListener("click", () => {
    ageGate.classList.add("is-denied");
    if (ageMessage) {
      ageMessage.textContent = "You must be 21 or older to enter this site.";
    }
  });
}

if (galleryFilters.length && galleryItems.length) {
  galleryFilters.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedCategory = button.dataset.galleryFilter;
      galleryFilters.forEach((filterButton) => {
        filterButton.setAttribute("aria-pressed", String(filterButton === button));
      });
      galleryItems.forEach((item) => {
        const shouldShow =
          selectedCategory === "all" || item.dataset.gallery === selectedCategory;
        item.classList.toggle("is-hidden", !shouldShow);
      });
    });
  });
}

if (lightbox && lightboxImage && lightboxClose) {
  const zoomableImages = document.querySelectorAll(
    ".hero picture img, .image-stack img, .product-tile img, .photo-card img, .profile-card img"
  );

  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImage.removeAttribute("src");
    lightboxImage.alt = "";
  };

  zoomableImages.forEach((image) => {
    image.setAttribute("tabindex", "0");
    image.setAttribute("role", "button");

    const openLightbox = () => {
      lightboxImage.src = image.currentSrc || image.src;
      lightboxImage.alt = image.alt || "";
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      lightboxClose.focus();
    };

    image.addEventListener("click", openLightbox);
    image.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox();
      }
    });
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox || event.target === lightboxImage) closeLightbox();
  });

  lightboxClose.addEventListener("click", closeLightbox);
}

if (parallaxLayers.length) {
  let ticking = false;

  const updateParallax = () => {
    const scrollY = window.scrollY;
    parallaxLayers.forEach((layer) => {
      const speed = Number(layer.dataset.speed || 0);
      const side = layer.classList.contains("jungle-layer-left") ? -1 : 1;
      const horizontal = Math.min(scrollY * 0.28, 180) * side;
      const vertical = scrollY * speed;
      layer.style.transform = `translate3d(${horizontal}px, ${vertical}px, 0)`;
      layer.style.opacity = String(Math.max(0, 0.58 - scrollY / 900));
    });
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    },
    { passive: true }
  );

  updateParallax();
}

window.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  setLanguageMenuState(false);
  if (lightbox?.classList.contains("is-open")) {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
  }
});
