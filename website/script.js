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

let currentLanguage = "en";

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

Object.assign(translations.en, {
  titleText: "Community Cannabis Pattaya | Cannabis Shop near Thepprasit Night Market",
  metaDescription: "Community Cannabis in Pattaya near Thepprasit Night Market. Friendly local cannabis shop with helpful staff, delivery, outdoor seating, pickup, and easy directions from Thepprasit Soi 3. Adults 21+ only.",
  ageEyebrow: "Adults only",
  ageTitle: "Are you 21 or older?",
  ageMessage: "This website contains cannabis-related business information for Thailand. Please enter only where legal and appropriate.",
  ageAccept: "Yes, I am 21+",
  ageDecline: "No",
  ageLeave: "Leave",
  ageDeniedMessage: "You must be 21 or older to enter this site.",
  languageMenuLabel: "Language",
  langEnglish: "English",
  langRussian: "Russian",
  langThai: "Thai",
  langChinese: "Chinese",
  facebookButton: "Facebook",
  plusCodeLabel: "Plus Code",
  contactMethodsLabel: "Contact methods",
  contactIconCall: "Call",
  contactIconMail: "Mail",
  contactPhoneSmall: "Phone confirmed by Facebook and Google Maps",
  contactEmailSmall: "Email listed on Facebook",
  contactLineSmall: "LINE ID listed on Facebook",
  contactFacebookSmall: "Facebook page",
  contactInstagramSmall: "Instagram",
  contactXSmall: "X",
  imagePreviewLabel: "Image preview",
  closeImagePreviewLabel: "Close image preview",
  closeButton: "Close",
  strainOreoKing: "Oreo King",
  strainJackHerer: "Jack Herer",
  strainBlackberry: "Blackberry",
  strainBlueDream: "Blue Dream",
  strainTropicanaBanana: "Tropicana Banana",
  strainTruffelMonkey: "Truffel Monkey",
  strainMaxPunch: "Max Punch",
  strainSugarCandy: "Sugar Candy",
  strainBananaDaddy: "Banana Daddy r1",
  strainMandarinCookies: "Mandarin Cookies V2",
  strainSugarCane: "Sugar Cane",
});

Object.assign(translations.ru, {
  titleText: "Community Cannabis Pattaya | Каннабис-магазин рядом с Thepprasit Night Market",
  metaDescription: "Community Cannabis в Паттайе рядом с Thepprasit Night Market. Дружелюбный локальный магазин каннабиса с понятными рекомендациями, доставкой, местами на улице, самовывозом и удобным маршрутом от Thepprasit Soi 3. Только 21+.",
  ageEyebrow: "Только для взрослых",
  ageTitle: "Вам уже есть 21 год?",
  ageMessage: "На этом сайте размещена информация о cannabis-бизнесе в Таиланде. Продолжайте только там, где это законно и уместно.",
  ageAccept: "Да, мне есть 21+",
  ageDecline: "Нет",
  ageLeave: "Выйти",
  ageDeniedMessage: "Чтобы войти на сайт, вам должно быть 21 год или больше.",
  languageMenuLabel: "Язык",
  langEnglish: "Английский",
  langRussian: "Русский",
  langThai: "Тайский",
  langChinese: "Китайский",
  navVisit: "Визит",
  navAssortment: "Ассортимент",
  navPhotos: "Фото",
  navUpdates: "Обновления",
  navReviews: "Отзывы",
  navLocation: "Локация",
  navContact: "Контакты",
  callShort: "Звонок",
  heroEyebrow: "Паттайя / Чонбури",
  heroCopy: "Дружелюбный локальный магазин каннабиса рядом с Thepprasit Night Market: честные цены, спокойная атмосфера и понятные рекомендации.",
  directions: "Маршрут",
  callFull: "Позвонить +66 80 995 0256",
  factRating: "рейтинг виден в Google и Weed.th",
  factReviews: "5-звездочные отзывы на Weed.th",
  factPlusCode: "Plus Code в Паттайе",
  whyEyebrow: "Почему зайти",
  whyTitle: "Локально, спокойно, легко найти.",
  whyCopy: "Отзывы описывают Community Cannabis как приветливое место в Паттайе с дружелюбной командой, хорошими ценами, расслабленной зоной для отдыха и удобным доступом от Thepprasit Night Market. В публичной Facebook-странице также указаны доставка, места на улице и самовывоз.",
  featureOneTitle: "Помогают с выбором",
  featureOneCopy: "Клиенты отмечают понятные рекомендации, приятное общение и дружелюбного владельца.",
  featureTwoTitle: "Честная цена",
  featureTwoCopy: "Хорошие цены и соотношение цены и качества часто повторяются в отзывах.",
  featureThreeTitle: "Рядом с рынком",
  featureThreeCopy: "Удобная остановка рядом с Thepprasit Soi 3 и Thepprasit Night Market в Паттайе.",
  expectEyebrow: "Что ожидать",
  expectTitle: "Цветы, съедобные продукты, аксессуары, самовывоз и рекомендации без навязчивых продаж.",
  expectCopy: "Публичные листинги и отзывы упоминают цветы, съедобные продукты вроде брауни, печенья и жевательных сладостей, а также аксессуары и стекло. Facebook указывает доставку, места на улице и самовывоз; наличие лучше уточнять напрямую у магазина.",
  expectItemOne: "Цветы и рекомендации команды",
  expectItemTwo: "Съедобные продукты, которые упоминают клиенты",
  expectItemThree: "Аксессуары, видимые в магазине",
  expectItemFour: "Места на улице и локальная атмосфера",
  expectItemFive: "Доставка и самовывоз указаны на Facebook",
  expectItemSix: "Посты Facebook показывают обновления цветов и аксессуаров",
  assortmentEyebrow: "Ассортимент",
  assortmentTitle: "Обновляющиеся цветы, съедобные продукты, аксессуары и средства ухода.",
  assortmentCopy: "Публичные посты Facebook и отзывы клиентов показывают, что меню меняется со временем. Этот блок использует посты как исторические примеры, а не как живое меню; для точного наличия на сегодня лучше позвонить или написать.",
  productFlowerExample: "Пример цветка",
  indicaTitle: "Позиции в стиле indica",
  indicaCopy: "Oreo King появлялся в публичном посте Facebook как один из примеров обновления цветов.",
  sativaTitle: "Позиции в стиле sativa",
  sativaCopy: "Jack Herer появлялся в другом посте, показывая, что магазин публикует обновления по сортам онлайн.",
  accessoriesLabel: "Аксессуары",
  careTitle: "Средства ухода",
  careCopy: "Facebook также показывает вспомогательные товары, включая средства для очистки стекла.",
  seenOlder: "Встречалось в старых публичных постах",
  strainOreoKing: "Oreo King",
  strainJackHerer: "Jack Herer",
  strainBlackberry: "Blackberry",
  strainBlueDream: "Blue Dream",
  strainTropicanaBanana: "Tropicana Banana",
  strainTruffelMonkey: "Truffel Monkey",
  strainMaxPunch: "Max Punch",
  strainSugarCandy: "Sugar Candy",
  strainBananaDaddy: "Banana Daddy r1",
  strainMandarinCookies: "Mandarin Cookies V2",
  strainSugarCane: "Sugar Cane",
  menuBoardCopy: "В старых подписях также были детали THC/CBD и цены. Эти данные оставлены в исследовательском пакете и должны быть подтверждены владельцем перед публикацией как меню.",
  photoEyebrow: "Фото-меню",
  photoTitle: "Магазин, ассортимент и обновления Facebook отдельно.",
  filterAll: "Все",
  filterShop: "Магазин",
  filterAssortment: "Ассортимент",
  filterUpdates: "Обновления",
  localLabel: "Локация",
  captionStorefront: "Витрина рядом с Thepprasit Soi 3",
  captionInterior: "Внутренняя витрина",
  captionMarket: "Контекст Thepprasit Night Market",
  captionCounter: "Стойка и аксессуары",
  captionFlower: "Пример поста с цветком",
  captionCare: "Пост о средстве ухода",
  captionUpdates: "Уведомления о часах и закрытиях",
  wallEyebrow: "Стена Facebook",
  wallTitle: "Заметки меню, закрытия и локальные обновления живут в Facebook.",
  wallCopy: "Публичная стена полезна для четырех категорий: обновления продуктов, аксессуары, временные уведомления о часах работы и локальные посты Паттайи/сообщества. Точные детали меню лучше проверять напрямую перед визитом.",
  openFacebookWall: "Открыть стену Facebook",
  wallNoteOneTitle: "Обновления продуктов",
  wallNoteOneCopy: "Публичные подписи показывают посты о цветах в категориях indica, sativa и hybrid.",
  wallNoteTwoTitle: "Аксессуары и уход",
  wallNoteTwoCopy: "На стене появляются вспомогательные товары, поэтому сайт отделяет их от цветов.",
  wallNoteThreeTitle: "Часы и закрытия",
  wallNoteThreeCopy: "Старые посты упоминают ежедневные 10:00-22:00, временные закрытия и специальные часы открытия.",
  wallNoteFourTitle: "Сообщество и правила",
  wallNoteFourCopy: "Посты включают упоминания Thepprasit Night Market, Thai New Year/420, музыку и GACP/prescription notes.",
  reviewsEyebrow: "Репутация",
  reviewsTitle: "Любят местные и путешественники.",
  reviewsSmall: "41 отзыв на Weed.th, все видимые оценки — 5 звезд.",
  reviewsCopy: "Отзывы встречаются на тайском, английском, русском, немецком и итальянском. Главный повторяющийся смысл: дружелюбная команда, хорошая цена, спокойная атмосфера, полезные рекомендации и удобная точка рядом с Thepprasit Night Market.",
  followersLabel: "подписчиков Facebook",
  visitsLabel: "визитов/чекинов Facebook",
  viewSource: "Открыть источник",
  locationEyebrow: "Локация",
  locationTitle: "Найдите нас рядом с Thepprasit Night Market.",
  locationCopy: "Координаты Google Maps: 12.9076217, 100.8914428. Facebook указывает зону обслуживания Pattaya, Chon Buri. Позвоните или напишите перед визитом, чтобы подтвердить сегодняшние часы.",
  openGoogleMaps: "Открыть Google Maps",
  facebookButton: "Facebook",
  plusCodeLabel: "Plus Code",
  contactEyebrow: "Контакты",
  contactTitle: "Позвоните или напишите перед визитом, чтобы подтвердить сегодняшние часы.",
  profileCopy: "Публичная Facebook-страница: 159 подписчиков, 108 визитов/чекинов, указаны LINE, Instagram и X.",
  contactMethodsLabel: "Способы связи",
  contactIconCall: "Звонок",
  contactIconMail: "Почта",
  contactPhoneSmall: "Телефон подтвержден Facebook и Google Maps",
  contactEmailSmall: "Email указан на Facebook",
  contactLineSmall: "LINE ID указан на Facebook",
  contactFacebookSmall: "Страница Facebook",
  contactInstagramSmall: "Instagram",
  contactXSmall: "X",
  footerCopy: "Только 21+. Соблюдайте местные законы. На сайте нет медицинских заявлений.",
  backTop: "Наверх",
  imagePreviewLabel: "Просмотр изображения",
  closeImagePreviewLabel: "Закрыть просмотр изображения",
  closeButton: "Закрыть",
});

Object.assign(translations.th, {
  titleText: "Community Cannabis Pattaya | ร้านกัญชาใกล้ตลาดเทพประสิทธิ์",
  metaDescription: "Community Cannabis ในพัทยา ใกล้ตลาดเทพประสิทธิ์ ร้านกัญชาท้องถิ่นที่เป็นกันเอง มีคำแนะนำที่ชัดเจน บริการส่ง ที่นั่งด้านนอก รับสินค้าที่ร้าน และเดินทางง่ายจาก Thepprasit Soi 3 สำหรับผู้มีอายุ 21+ เท่านั้น",
  ageEyebrow: "สำหรับผู้ใหญ่เท่านั้น",
  ageTitle: "คุณอายุ 21 ปีขึ้นไปหรือไม่?",
  ageMessage: "เว็บไซต์นี้มีข้อมูลเกี่ยวกับธุรกิจกัญชาในประเทศไทย กรุณาเข้าชมเฉพาะในพื้นที่ที่ถูกกฎหมายและเหมาะสม",
  ageAccept: "ใช่ ฉันอายุ 21+",
  ageDecline: "ไม่",
  ageLeave: "ออก",
  ageDeniedMessage: "คุณต้องมีอายุ 21 ปีขึ้นไปจึงจะเข้าชมเว็บไซต์นี้ได้",
  languageMenuLabel: "ภาษา",
  langEnglish: "อังกฤษ",
  langRussian: "รัสเซีย",
  langThai: "ไทย",
  langChinese: "จีน",
  navVisit: "เยี่ยมชม",
  navAssortment: "สินค้า",
  navPhotos: "รูปภาพ",
  navUpdates: "อัปเดต",
  navReviews: "รีวิว",
  navLocation: "ที่ตั้ง",
  navContact: "ติดต่อ",
  callShort: "โทร",
  heroEyebrow: "พัทยา / ชลบุรี",
  heroCopy: "ร้านกัญชาท้องถิ่นที่เป็นกันเองใกล้ตลาดเทพประสิทธิ์ ราคาเป็นธรรม ให้คำแนะนำชัดเจน และมีบรรยากาศชุมชนที่ผ่อนคลาย",
  directions: "ดูเส้นทาง",
  callFull: "โทร +66 80 995 0256",
  factRating: "คะแนนที่เห็นบน Google และ Weed.th",
  factReviews: "รีวิว 5 ดาวบน Weed.th",
  factPlusCode: "Plus Code พัทยา",
  whyEyebrow: "ทำไมควรมา",
  whyTitle: "ท้องถิ่น ผ่อนคลาย และหาได้ง่าย",
  whyCopy: "รีวิวบอกว่า Community Cannabis เป็นจุดแวะที่เป็นกันเองในพัทยา มีทีมงานน่ารัก ราคาดี มีที่ให้นั่งแบบชิลล์ และเดินทางสะดวกจากตลาดเทพประสิทธิ์ หน้า Facebook สาธารณะยังระบุบริการส่ง ที่นั่งด้านนอก และการรับสินค้าที่ร้าน",
  featureOneTitle: "พนักงานช่วยแนะนำ",
  featureOneCopy: "ลูกค้าพูดถึงคำแนะนำที่ชัดเจน การพูดคุยที่ดี และเจ้าของที่เป็นกันเอง",
  featureTwoTitle: "คุ้มค่า",
  featureTwoCopy: "ราคาดีและความคุ้มค่าเป็นประเด็นที่พบซ้ำในรีวิวลูกค้า",
  featureThreeTitle: "ใกล้ตลาด",
  featureThreeCopy: "จุดแวะที่สะดวกใกล้ Thepprasit Soi 3 และตลาดเทพประสิทธิ์ในพัทยา",
  expectEyebrow: "สิ่งที่คาดหวังได้",
  expectTitle: "ดอกไม้ ของกินผสมกัญชา อุปกรณ์ การรับสินค้า และคำแนะนำแบบไม่กดดัน",
  expectCopy: "ข้อมูลสาธารณะและรีวิวพูดถึงดอกไม้ ของกินผสมกัญชา เช่นบราวนี่ คุกกี้ และเยลลี่ รวมถึงอุปกรณ์สูบและแก้ว Facebook ระบุบริการส่ง ที่นั่งด้านนอก และการรับสินค้าที่ร้าน ควรยืนยันสินค้ากับร้านโดยตรง",
  expectItemOne: "ดอกไม้และคำแนะนำจากทีมงาน",
  expectItemTwo: "ของกินผสมกัญชาที่ลูกค้าพูดถึง",
  expectItemThree: "อุปกรณ์ที่เห็นในร้าน",
  expectItemFour: "ที่นั่งด้านนอกและบรรยากาศท้องถิ่น",
  expectItemFive: "Facebook ระบุบริการส่งและรับสินค้าที่ร้าน",
  expectItemSix: "โพสต์ Facebook แสดงการอัปเดตดอกไม้และอุปกรณ์",
  assortmentEyebrow: "สินค้า",
  assortmentTitle: "ดอกไม้ ของกินผสมกัญชา อุปกรณ์ และสินค้า care ที่หมุนเวียน",
  assortmentCopy: "โพสต์ Facebook สาธารณะและรีวิวลูกค้าแสดงว่าเมนูเปลี่ยนตามเวลา ส่วนนี้ใช้โพสต์สินค้าเป็นตัวอย่างย้อนหลัง ไม่ใช่เมนูสด กรุณาโทรหรือส่งข้อความเพื่อเช็กสินค้าวันนี้",
  productFlowerExample: "ตัวอย่างดอกไม้",
  indicaTitle: "รายการแนว indica",
  indicaCopy: "Oreo King ปรากฏในโพสต์ Facebook สาธารณะเป็นหนึ่งในตัวอย่างการอัปเดตดอกไม้",
  sativaTitle: "รายการแนว sativa",
  sativaCopy: "Jack Herer ปรากฏในอีกโพสต์หนึ่ง แสดงว่าร้านอัปเดตสายพันธุ์ออนไลน์",
  accessoriesLabel: "อุปกรณ์",
  careTitle: "สินค้า care",
  careCopy: "Facebook ยังแสดงสินค้าเสริม เช่น น้ำยาทำความสะอาดแก้ว",
  seenOlder: "พบในโพสต์สาธารณะเก่า",
  strainOreoKing: "Oreo King",
  strainJackHerer: "Jack Herer",
  strainBlackberry: "Blackberry",
  strainBlueDream: "Blue Dream",
  strainTropicanaBanana: "Tropicana Banana",
  strainTruffelMonkey: "Truffel Monkey",
  strainMaxPunch: "Max Punch",
  strainSugarCandy: "Sugar Candy",
  strainBananaDaddy: "Banana Daddy r1",
  strainMandarinCookies: "Mandarin Cookies V2",
  strainSugarCane: "Sugar Cane",
  menuBoardCopy: "คำบรรยายเก่าบางโพสต์มีรายละเอียด THC/CBD และราคา ข้อมูลเหล่านี้เก็บไว้ในชุดวิจัยและควรให้เจ้าของยืนยันก่อนเผยแพร่เป็นเมนู",
  photoEyebrow: "เมนูรูปภาพ",
  photoTitle: "ดูร้าน สินค้า และอัปเดต Facebook แยกกัน",
  filterAll: "ทั้งหมด",
  filterShop: "ร้าน",
  filterAssortment: "สินค้า",
  filterUpdates: "อัปเดต",
  localLabel: "ท้องถิ่น",
  captionStorefront: "หน้าร้านใกล้ Thepprasit Soi 3",
  captionInterior: "พื้นที่โชว์สินค้าในร้าน",
  captionMarket: "บริบทตลาดเทพประสิทธิ์",
  captionCounter: "เคาน์เตอร์และอุปกรณ์",
  captionFlower: "ตัวอย่างโพสต์ดอกไม้",
  captionCare: "โพสต์สินค้า care",
  captionUpdates: "ประกาศปิดและเวลาเปิด",
  wallEyebrow: "หน้า Facebook",
  wallTitle: "โน้ตเมนู การปิดร้าน และอัปเดตท้องถิ่นอยู่บน Facebook",
  wallCopy: "หน้า Facebook สาธารณะมีประโยชน์สำหรับ 4 หมวด: โพสต์สินค้าที่หมุนเวียน อัปเดตอุปกรณ์ ประกาศเวลาเปิดชั่วคราว และโพสต์ชุมชน/พัทยา ควรเช็กรายละเอียดเมนูโดยตรงก่อนมา",
  openFacebookWall: "เปิดหน้า Facebook",
  wallNoteOneTitle: "สินค้าใหม่",
  wallNoteOneCopy: "คำบรรยายสาธารณะแสดงโพสต์ดอกไม้ในหมวด indica, sativa และ hybrid",
  wallNoteTwoTitle: "อุปกรณ์และ care",
  wallNoteTwoCopy: "มีสินค้าเสริมบนหน้า Facebook ดังนั้นเว็บไซต์จึงแยกออกจากดอกไม้",
  wallNoteThreeTitle: "เวลาเปิดและการปิดร้าน",
  wallNoteThreeCopy: "โพสต์เก่าพูดถึงเวลา 10:00-22:00 ทุกวัน การปิดชั่วคราว และเวลาเปิดพิเศษ",
  wallNoteFourTitle: "ชุมชนและข้อกำหนด",
  wallNoteFourCopy: "โพสต์มีการอ้างถึงตลาดเทพประสิทธิ์ วันปีใหม่ไทย/420 เพลง และโน้ต GACP/prescription",
  reviewsEyebrow: "ชื่อเสียง",
  reviewsTitle: "คนท้องถิ่นและนักเดินทางชอบ",
  reviewsSmall: "41 รีวิวบน Weed.th คะแนนที่เห็นทั้งหมดเป็น 5 ดาว",
  reviewsCopy: "รีวิวมีทั้งภาษาไทย อังกฤษ รัสเซีย เยอรมัน และอิตาลี ข้อความที่ซ้ำกันคือทีมงานเป็นกันเอง คุ้มค่า บรรยากาศชิลล์ ให้คำแนะนำดี และสะดวกใกล้ตลาดเทพประสิทธิ์",
  followersLabel: "ผู้ติดตาม Facebook",
  visitsLabel: "การเยี่ยมชม/เช็กอิน Facebook",
  viewSource: "ดูแหล่งข้อมูล",
  locationEyebrow: "ที่ตั้ง",
  locationTitle: "พบเราใกล้ตลาดเทพประสิทธิ์",
  locationCopy: "พิกัด Google Maps: 12.9076217, 100.8914428 Facebook ระบุพื้นที่บริการเป็น Pattaya, Chon Buri โทรหรือส่งข้อความก่อนมาเพื่อยืนยันเวลาเปิดวันนี้",
  openGoogleMaps: "เปิด Google Maps",
  facebookButton: "Facebook",
  plusCodeLabel: "Plus Code",
  contactEyebrow: "ติดต่อ",
  contactTitle: "โทรหรือส่งข้อความก่อนมาเพื่อยืนยันเวลาเปิดวันนี้",
  profileCopy: "หน้า Facebook สาธารณะ: ผู้ติดตาม 159 คน, เยี่ยมชม/เช็กอิน 108 ครั้ง, มี LINE, Instagram และ X",
  contactMethodsLabel: "ช่องทางติดต่อ",
  contactIconCall: "โทร",
  contactIconMail: "เมล",
  contactPhoneSmall: "เบอร์โทรยืนยันจาก Facebook และ Google Maps",
  contactEmailSmall: "อีเมลที่ระบุบน Facebook",
  contactLineSmall: "LINE ID ที่ระบุบน Facebook",
  contactFacebookSmall: "หน้า Facebook",
  contactInstagramSmall: "Instagram",
  contactXSmall: "X",
  footerCopy: "สำหรับผู้มีอายุ 21+ เท่านั้น โปรดปฏิบัติตามกฎหมายท้องถิ่น เว็บไซต์นี้ไม่มีการกล่าวอ้างทางการแพทย์",
  backTop: "กลับขึ้นบน",
  imagePreviewLabel: "ดูรูปภาพ",
  closeImagePreviewLabel: "ปิดตัวอย่างรูปภาพ",
  closeButton: "ปิด",
});

Object.assign(translations.zh, {
  titleText: "Community Cannabis Pattaya | Thepprasit 夜市附近的大麻商店",
  metaDescription: "Community Cannabis 位于芭提雅 Thepprasit 夜市附近。友好的本地大麻商店，提供清晰建议、配送、户外座位、到店自取，并可从 Thepprasit Soi 3 轻松前往。仅限 21 岁以上。",
  ageEyebrow: "仅限成人",
  ageTitle: "您是否已满 21 岁？",
  ageMessage: "本网站包含泰国大麻相关商业信息。请仅在合法且适当的情况下继续浏览。",
  ageAccept: "是，我已满 21 岁",
  ageDecline: "否",
  ageLeave: "离开",
  ageDeniedMessage: "您必须年满 21 岁才能进入本网站。",
  languageMenuLabel: "语言",
  langEnglish: "英语",
  langRussian: "俄语",
  langThai: "泰语",
  langChinese: "中文",
  navVisit: "到访",
  navAssortment: "产品",
  navPhotos: "照片",
  navUpdates: "更新",
  navReviews: "评价",
  navLocation: "位置",
  navContact: "联系",
  callShort: "电话",
  heroEyebrow: "芭提雅 / 春武里",
  heroCopy: "Thepprasit 夜市附近友好的本地大麻商店，以公平价格、清晰建议和放松的社区氛围而被提及。",
  directions: "获取路线",
  callFull: "拨打 +66 80 995 0256",
  factRating: "Google 和 Weed.th 上可见的评分",
  factReviews: "Weed.th 上的 5 星评价",
  factPlusCode: "芭提雅 Plus Code",
  whyEyebrow: "为什么到访",
  whyTitle: "本地、放松、容易找到。",
  whyCopy: "评价将 Community Cannabis 描述为芭提雅一个友好的停靠点：员工友好、价格不错、有可坐下放松的空间，并且从 Thepprasit 夜市很容易到达。公开 Facebook 页面还列出配送、户外座位和到店自取。",
  featureOneTitle: "员工乐于帮助",
  featureOneCopy: "顾客提到清晰的建议、愉快的交流和友好的店主。",
  featureTwoTitle: "价格公平",
  featureTwoCopy: "好价格和高性价比是顾客评价中反复出现的主题。",
  featureThreeTitle: "靠近夜市",
  featureThreeCopy: "靠近芭提雅 Thepprasit Soi 3 和 Thepprasit 夜市的实用停靠点。",
  expectEyebrow: "可以期待",
  expectTitle: "花、可食用产品、配件、自取和不强推的建议。",
  expectCopy: "公开列表和评价提到花、布朗尼、饼干和软糖等可食用产品，以及吸烟配件和玻璃器具。Facebook 列出配送、户外座位和到店自取；库存应直接向店铺确认。",
  expectItemOne: "花和员工建议",
  expectItemTwo: "顾客提到的可食用产品",
  expectItemThree: "店内可见的配件",
  expectItemFour: "户外座位和本地氛围",
  expectItemFive: "Facebook 上列出配送和到店自取",
  expectItemSix: "Facebook 墙贴显示花和配件的轮换更新",
  assortmentEyebrow: "产品",
  assortmentTitle: "轮换的花、可食用产品、配件和护理产品。",
  assortmentCopy: "公开 Facebook 帖子和顾客评价显示菜单会随时间变化。本部分将 Facebook 产品帖作为历史示例，而不是实时菜单；请致电或发消息确认当天实际库存。",
  productFlowerExample: "花示例",
  indicaTitle: "偏 Indica 产品",
  indicaCopy: "Oreo King 曾出现在公开 Facebook 墙贴中，是轮换花更新的示例之一。",
  sativaTitle: "偏 Sativa 产品",
  sativaCopy: "Jack Herer 出现在另一篇墙贴中，说明店铺会在线发布品种更新。",
  accessoriesLabel: "配件",
  careTitle: "护理产品",
  careCopy: "Facebook 还显示配件支持产品，包括玻璃器具清洁用品。",
  seenOlder: "旧公开帖子中出现过",
  strainOreoKing: "Oreo King",
  strainJackHerer: "Jack Herer",
  strainBlackberry: "Blackberry",
  strainBlueDream: "Blue Dream",
  strainTropicanaBanana: "Tropicana Banana",
  strainTruffelMonkey: "Truffel Monkey",
  strainMaxPunch: "Max Punch",
  strainSugarCandy: "Sugar Candy",
  strainBananaDaddy: "Banana Daddy r1",
  strainMandarinCookies: "Mandarin Cookies V2",
  strainSugarCane: "Sugar Cane",
  menuBoardCopy: "旧说明中还包含 THC/CBD 细节和价格。这些信息保留在研究包中，作为菜单发布前应由店主确认。",
  photoEyebrow: "照片菜单",
  photoTitle: "分开浏览店铺、产品和 Facebook 更新。",
  filterAll: "全部",
  filterShop: "店铺",
  filterAssortment: "产品",
  filterUpdates: "更新",
  localLabel: "本地",
  captionStorefront: "Thepprasit Soi 3 附近的店面",
  captionInterior: "店内展示",
  captionMarket: "Thepprasit 夜市环境",
  captionCounter: "柜台和配件",
  captionFlower: "花帖示例",
  captionCare: "护理产品帖",
  captionUpdates: "关店和营业时间通知",
  wallEyebrow: "Facebook 墙",
  wallTitle: "菜单备注、关店通知和本地更新发布在 Facebook。",
  wallCopy: "公开墙贴适合查看四类信息：轮换产品帖、配件更新、临时营业时间通知，以及芭提雅/社区帖子。到访前应直接确认准确菜单。",
  openFacebookWall: "打开 Facebook 墙",
  wallNoteOneTitle: "产品上新",
  wallNoteOneCopy: "公开说明显示 indica、sativa 和 hybrid 类别的花帖。",
  wallNoteTwoTitle: "配件和护理",
  wallNoteTwoCopy: "墙贴中出现配件支持产品，因此网站将它们与花分开展示。",
  wallNoteThreeTitle: "营业时间和关店",
  wallNoteThreeCopy: "旧帖子提到每日 10:00-22:00、临时关闭和特殊开放时间。",
  wallNoteFourTitle: "社区和合规",
  wallNoteFourCopy: "帖子包含 Thepprasit 夜市、泰国新年/420、音乐以及 GACP/prescription notes。",
  reviewsEyebrow: "口碑",
  reviewsTitle: "受到本地人和旅行者喜爱。",
  reviewsSmall: "Weed.th 上 41 条评价，所有可见评分均为 5 星。",
  reviewsCopy: "评价语言包括泰语、英语、俄语、德语和意大利语。反复出现的信息是：员工友好、性价比好、氛围轻松、产品建议有帮助，并且靠近 Thepprasit 夜市很方便。",
  followersLabel: "Facebook 关注者",
  visitsLabel: "Facebook 访问/打卡",
  viewSource: "查看来源列表",
  locationEyebrow: "位置",
  locationTitle: "在 Thepprasit 夜市附近找到我们。",
  locationCopy: "Google Maps 坐标：12.9076217, 100.8914428。Facebook 将服务区域列为 Pattaya, Chon Buri。到访前请致电或发消息确认当天营业时间。",
  openGoogleMaps: "打开 Google Maps",
  facebookButton: "Facebook",
  plusCodeLabel: "Plus Code",
  contactEyebrow: "联系",
  contactTitle: "到访前请致电或发消息确认当天营业时间。",
  profileCopy: "公开 Facebook 页面：159 位关注者，108 次访问/打卡，并列出 LINE、Instagram 和 X。",
  contactMethodsLabel: "联系方式",
  contactIconCall: "电话",
  contactIconMail: "邮件",
  contactPhoneSmall: "电话已由 Facebook 和 Google Maps 确认",
  contactEmailSmall: "Facebook 上列出的邮箱",
  contactLineSmall: "Facebook 上列出的 LINE ID",
  contactFacebookSmall: "Facebook 页面",
  contactInstagramSmall: "Instagram",
  contactXSmall: "X",
  footerCopy: "仅限 21 岁以上。请遵守当地法律。本网站不作医疗声明。",
  backTop: "返回顶部",
  imagePreviewLabel: "图片预览",
  closeImagePreviewLabel: "关闭图片预览",
  closeButton: "关闭",
});

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
  currentLanguage = translations[language] ? language : "en";

  document.documentElement.lang = currentLanguage;
  if (dictionary.titleText) document.title = dictionary.titleText;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && dictionary.metaDescription) {
    metaDescription.setAttribute("content", dictionary.metaDescription);
  }
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.textContent = dictionary[key];
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (dictionary[key]) element.setAttribute("aria-label", dictionary[key]);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt;
    if (dictionary[key]) element.setAttribute("alt", dictionary[key]);
  });

  if (languageCurrentFlag) {
    languageCurrentFlag.className = `flag-icon ${meta.flagClass}`;
  }
  if (languageCurrentCode) languageCurrentCode.textContent = meta.code;
  languageOptions.forEach((option) => {
    option.setAttribute("aria-selected", String(option.dataset.languageOption === language));
  });

  window.localStorage.setItem("communityCannabisLanguage", currentLanguage);
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
      ageMessage.textContent =
        translations[currentLanguage]?.ageDeniedMessage || translations.en.ageDeniedMessage;
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
      const horizontal = Math.min(scrollY * 0.36, 220) * side;
      const vertical = scrollY * speed;
      layer.style.transform = `translate3d(${horizontal}px, ${vertical}px, 0)`;
      layer.style.opacity = String(Math.max(0, 0.72 - scrollY / 620));
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
