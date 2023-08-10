function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
  }
 

  var language = {
    eng: {
      welcome: " GRIT sizning ishonchli texnik hamkoringizdir:"+
     "Ishingizning texnik tomoni haqida gap ketganda, GRIT yordam berish uchun shu yerda.  Bizning maqsadimiz sizga SMM, veb-sayt dizayni va yaratish sohasida sifatli va ishonchli yechimlarni taqdim etishdir.  Bugun hamkorlikni boshlash va kompaniyangizni yaxshilash uchun biz bilan bog'laning!",
  mavzu:"Biz haqimizda",
  logo:"GRIT",
  header_1:"Asosiy",
  header_2:"Biz haqimizda",
  header_3:"Xizmatlarimiz",
  header_4:"Tariflarimiz",
  header_5:"Biz bilan bog'lanish",
  hizmat_t_1:"Aniq SMM yechimlari:",
  hizmat_text_1:" SMM (ijtimoiy media marketingi) kompaniyangizning muvaffaqiyatli onlayn mavjudligining muhim qismidir.  GRIT maqsadli auditoriyangiz e'tiborini jalb qilish va ushlab turishingizga yordam beradigan aniq va innovatsion ijtimoiy media strategiyalarini taklif etadi.  Biz jozibali kontent yaratish va ijtimoiy tarmoqlardagi mavjudligingizni optimallashtirish uchun siz bilan birga ishlaydigan shaxsiy SMM rejasini ishlab chiqamiz.",
  hizmat_t_2:" Professional dizayn:",
  hizmat_text_2:" Birinchi taassurot juda muhim.  GRIT kompaniyangizga raqobatchilardan ajralib turishiga yordam beradigan professional dizayn xizmatlarini taklif etadi.  Bizning iqtidorli dizaynerlar jamoasi sizning brendingiz va maqsadlaringizga mos keladigan noyob va jozibali vizuallarni yaratadi.",
  hizmat_t_3:"Veb-sayt yaratish:",
  hizmat_text_3:" Veb-sayt kompaniyangizning onlayn dunyoda qo'ng'iroq kartasidir.  GRIT sizning o'ziga xosligingizni aks ettiradigan va biznesingizni samarali taqdim etadigan veb-saytlarni to'liq yaratish va optimallashtirishni taklif qiladi.  Biz nafaqat e'tiborni tortadigan, balki raqobatchilardan ajralib turadigan veb-sayt yaratish uchun sizning ehtiyojlaringiz va maqsadlaringizni inobatga olami",
  tairf_t_1:"'SMM+Dizayn' tarifi 299$ turadi. ",
  tairf_t_2:"'Veb-sayt' rejasi 199 dollar turadi. ",
  tairf_t_3:"'SMM+Dizayn+Veb-sayt' tarifi 399$ turadi.",
  tarif_text_1:" U ijtimoiy media (SMM) va dizayn xizmatlarini o'z ichiga oladi.",
  tarif_text_2:"U veb-sayt yaratish va rivojlantirish xizmatlarini o'z ichiga oladi.",
  tarif_text_3:"U ijtimoiy media, veb-sayt dizayni va ishlab chiqish xizmatlarini o'z ichiga oladi.",
    },
    es: {
      welcome: "GRIT - ваш надежный технический партнер:"+
"Когда дело доходит до технической части вашего бизнеса, компания GRIT готова вам помочь. Наша цель"+
 "- предоставить вам качественные и надежные решения в области SMM, дизайна и создания веб-сайтов. "+
 "Не стесняйтесь обращаться к нам, чтобы начать сотрудничество и улучшить вашу компанию уже сегодня!",
 mavzu:"О нас ",
 logo:"ГРИТ",
 header_1:"Основной",
 header_2:"О нас",
 header_3:"Наши сервисы",
 header_4:"Наши цены",
 header_5:"Cвязаться с нами",
 hizmat_t_1:"Точные решения SMM:",
 hizmat_text_1:"SMM (социальные медиа-маркетинг) является важной составляющей успешного онлайн-присутствия вашей компании. GRIT предлагает точные и инновационные стратегии SMM, которые помогут вам привлечь и удержать внимание вашей целевой аудитории. Мы разработаем персонализированный план SMM, работая с вами над созданием привлекательного контента и оптимизацией вашего присутствия в социальных сетях.",
 hizmat_t_2:"Профессиональный дизайн:",
 hizmat_text_2:"Первое впечатление имеет огромное значение. GRIT предлагает профессиональные услуги дизайна, которые помогут вашей компании выделиться на фоне конкурентов. Наша команда талантливых дизайнеров создаст уникальные и привлекательные визуальные решения, которые будут соответствовать вашему бренду и целям.",
 hizmat_t_3:"Создание веб-сайтов:",
 hizmat_text_3:"Веб-сайт является визитной карточкой вашей компании в онлайн-мире. GRIT предлагает полное создание и оптимизацию веб-сайтов, которые отразят вашу уникальность и эффективно представят ваш бизнес. Мы учтем ваши потребности и цели, чтобы создать веб-сайт, который не только привлечет внимание, но и будет выделяться среди конкурентов.",
 tairf_t_1:"Тариф 'SMM+Design' стоит $299.",
 tairf_t_2:"Тариф 'Website' стоит $199.",
 tairf_t_3:"Тариф 'SMM+Design+Website' стоит $399. ",
 tarif_text_1:"Он включает услуги по социальным медиа (SMM) и дизайну.",
 tarif_text_2:"Он включает услуги по созданию и разработке веб-сайта.",
 tarif_text_3:"Он включает услуги по социальным медиа, дизайну и созданию веб-сайта.",
  }
}

  if (window.location.hash) {
    if (window.location.hash == "#es") {
        bizhaqimizdatext.textContent =
        language.es.welcome;
        bizhaqimizda.textContent=
        language.es.mavzu;
        logo.textContent=language.es.logo;
        header_1.textContent= language.es.header_1;
        header_2.textContent= language.es.header_2;
        header_3.textContent= language.es.header_3;
        header_4.textContent= language.es.header_4;
        header_5.textContent= language.es.header_5;
        hizmat_t_1.textContent=language.es.hizmat_t_1;
        hizmat_t_2.textContent=language.es.hizmat_t_2;
        hizmat_t_3.textContent=language.es.hizmat_t_3;
        hizmat_text_1.textContent=language.es.hizmat_text_1;
        hizmat_text_2.textContent=language.es.hizmat_text_2;
        hizmat_text_3.textContent=language.es.hizmat_text_3;
        tairf_t_1.textContent=language.es.tairf_t_1;
        tairf_t_1.textContent=language.es.tairf_t_2;
        tairf_t_1.textContent=language.es.tairf_t_3;
        tarif_text_1.textContent=language.es.tarif_text_1;
        tarif_text_2.textContent=language.es.tarif_text_2;
        tarif_text_3.textContent=language.es.tarif_text_3;
    }
    else if (window.location.hash == "#eng") {
        bizhaqimizdatext.textContent =
        language.eng.welcome;
        bizhaqimizda.textContent=
        language.eng.mavzu;
        logo.textContent=language.eng.logo;
        header_1.textContent= language.eng.header_1;
        header_2.textContent= language.eng.header_2;
        header_3.textContent= language.eng.header_3;
        header_4.textContent= language.eng.header_4;
        header_5.textContent= language.eng.header_5;
        hizmat_t_1.textContent=language.eng.hizmat_t_1;
        hizmat_t_2.textContent=language.eng.hizmat_t_2;
        hizmat_t_3.textContent=language.eng.hizmat_t_3;
        hizmat_text_1.textContent=language.eng.hizmat_text_1;
        hizmat_text_2.textContent=language.eng.hizmat_text_2;
        hizmat_text_3.textContent=language.eng.hizmat_text_3;
        tairf_t_1.textContent=language.eng.tairf_t_1;
        tairf_t_2.textContent=language.eng.tairf_t_2;
        tairf_t_3.textContent=language.eng.tairf_t_3;
        tarif_text_1.textContent=language.eng.tarif_text_1;
        tarif_text_2.textContent=language.eng.tarif_text_2;
        tarif_text_3.textContent=language.eng.tarif_text_3;
    }
  }




const btn1=window.document.getElementsByClassName("bt-menu-open")
const btn2=window.document.getElementsByClassName("bt-menu-close")


