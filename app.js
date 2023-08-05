function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
  }

  // Define the language reload anchors
  var language = {
    eng: {
      welcome: " GRIT sizning ishonchli texnik hamkoringizdir:"+
     "Ishingizning texnik tomoni haqida gap ketganda, GRIT yordam berish uchun shu yerda.  Bizning maqsadimiz sizga SMM, veb-sayt dizayni va yaratish sohasida sifatli va ishonchli yechimlarni taqdim etishdir.  Bugun hamkorlikni boshlash va kompaniyangizni yaxshilash uchun biz bilan bog'laning!",
  mavzu:"Biz haqimizda"

    },
    es: {
      welcome: "GRIT - ваш надежный технический партнер:"+
"Когда дело доходит до технической части вашего бизнеса, компания GRIT готова вам помочь. Наша цель"+
 "- предоставить вам качественные и надежные решения в области SMM, дизайна и создания веб-сайтов. "+
 "Не стесняйтесь обращаться к нам, чтобы начать сотрудничество и улучшить вашу компанию уже сегодня!",
 mavzu:"О нас "
  }
}

  if (window.location.hash) {
    if (window.location.hash == "#es") {
        bizhaqimizdatext.textContent =
        language.es.welcome;
        bizhaqimizda.textContent=
        language.es.mavzu

    }
    else if (window.location.hash == "#eng") {
        bizhaqimizdatext.textContent =
        language.eng.welcome;
        bizhaqimizda.textContent=
        language.eng.mavzu
    }
  }