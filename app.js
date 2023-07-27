// !--slider-------------------
const swiperWrap = document.querySelector(".swiper-wrapper");
const pagin = document.querySelector(".pagin");
let contents = [
  {
    id: 1,
    title: "GRIT",
    info: "kompaniyalarning texnik qismi uchun ishonchli hamkoringiz",
    img: "./images/5.png",
  },
  {
    id: 2,
    title: "",
    info: "",
    img: "./images/4.png",
  },
  {
    id: 3,
    title: "",
    info: "",
    img: "./images/1.png",
  },
  {
    id: 4,
    title: "",
    info: "",
    img: "./images/2.png",
  },
];

const createElement = (tagName, className, content) => {
  const element = document.createElement(tagName);
  if (className) element.setAttribute("class", className);
  if (content) element.innerHTML = content;
  return element;
};

contents.forEach((val) => {
  const element = createElement(
    "div",
    "swiper-slide w-full h-[500px] bg-cover bg-no-repeat bg-center rounded-2xl duration-300",
    `
  
  <div class="bg_linear w-full h-full pt-[60px] text-center">
  <h1
    class="font-semibold text-[36px] leading-[44px] text-center text-white"
  >
    ${val.title}
  </h1>
  <p
    class="font-normal w-[416px] text-[16px] leading-[20px] text-center text-white mx-auto mt-[10px]"
  >
   ${val.info}
  </p>
</div>
  `
  );
  const paginElem = createElement("div", "swiper-pagination", "");
  element.style.backgroundImage = `url('${val.img}')`;
  swiperWrap.append(element);
  pagin.append(paginElem);
});


let translationSwitcher = function() {
  return {
      selected: 0,
      translations: {
          en: "Last Friday I saw a spotted striped blue worm shake hands with a legless lizard.",
          es: "El viernes pasado vi un gusano azul a rayas manchado estrecharle la mano con un lagarto sin patas.",
          de: "Letzten Freitag sah ich einen gefleckten gestreiften blauen Wurm, der einer beinlosen Eidechse die Hand schüttelte.",
          fr: "Vendredi dernier, j'ai vu un ver bleu rayé tacheté serrer la main d'un lézard sans pattes.",
          it: "Venerdì scorso ho visto un verme blu striato macchiato stringere la mano a una lucertola senza gambe.",
          jp: "先週の金曜日、縞模様の青いワームが脚のないトカゲと握手するのを見ました。",
          cn: "上周五，我看到一只斑点的蓝色蠕虫与一只无腿的蜥蜴握手。"
      },
      countries: [
          {
              label: 'English',
              lang: 'en',
              flag: 'gb',
          },
          {
              label: 'Spanish',
              lang: 'es',
              flag: 'es',
          },
          {
              label: 'German',
              lang: 'de',
              flag: 'de',
          },
          {
              label: 'French',
              lang: 'fr',
              flag: 'fr',
          },
          {
              label: 'Italian',
              lang: 'it',
              flag: 'it',
          },
          {
              label: 'Japanese',
              lang: 'jp',
              flag: 'jp',
          },
          {
              label: 'Chinese',
              lang: 'cn',
              flag: 'cn',
          },
      ],
      menuToggle: false,
  }
}