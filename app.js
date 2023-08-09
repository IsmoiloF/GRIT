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
  header_5:"Biz bilan bog'lanish" 
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
 header_5:"Cвязаться с нами"
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
    }
  }




  