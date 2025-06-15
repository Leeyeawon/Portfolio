const sections = document.querySelectorAll("section");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const title = document.querySelector(".illustration2-title");
const text = document.getElementById("clock-text");

let isFirstOnTop = true;
let isScrolling = false;
let currentScreen = 0;

document.addEventListener("wheel", (event) => {
  if (isScrolling) return; // 스크롤 중이면 return

  isScrolling = true;

  const clientHeight = window.innerHeight;

  // 아래로 스크롤
  if (event.deltaY > 0) {
    if (currentScreen < sections.length - 1) {
      currentScreen++;
      scrollTo({
        top: clientHeight * currentScreen,
        behavior: "smooth",
      });
    }
  }
  // 위로 스크롤
  else if (event.deltaY < 0) {
    if (currentScreen > 0) {
      currentScreen--;
      scrollTo({
        top: clientHeight * currentScreen,
        behavior: "smooth",
      });
    }
  }

  // 스크롤 완료 후 플래그 해제
  setTimeout(() => {
    isScrolling = false;
  }, 400);
});

img2.addEventListener("click", () => {
  img1.classList.remove("top");
  img1.classList.add("bottom");
  img2.classList.remove("bottom");
  img2.classList.add("top");

  title.innerHTML = "Smartphone";

  text.innerHTML = `
      <div>
        ‘스마트폰에 지배당한 현대인’을 주제로,<br>
        스마트폰 중심의 디지털 생태계가 <br>
        우리의 일상과 연결되어 있다는 점을 표현했습니다.
      </div>
      <br>
      <div>
      • 스마트폰을 교체하면 워치, 무선 이어폰, 태블릿 등 <br>
       연동된 다양한 전자기기들도 함께 바뀌어야 하는 <br>
       현대인의 디지털 종속성을 상징적으로 보여줍니다.
      <br>
      • 화면과 배경은 사이버펑크를 연상시키는 <br>
        강렬하고 인공적인 색감으로 구성하여, <br>
        기술 문명 속 인간의 정체성과 경계가 모호해지는 <br>
        현대 사회를 비판적으로 시각화하였습니다.
      </div>
    `;
});

img1.addEventListener("click", () => {
  img1.classList.remove("bottom");
  img1.classList.add("top");
  img2.classList.remove("top");
  img2.classList.add("bottom");

  title.innerHTML = "Clock";

  text.innerHTML = `
      <div>
        ‘이상한 나라의 앨리스’ 속 시계토끼의 휴식을 주제로, <br>
        시간을 중시하는 캐릭터의 성격에 맞춰 괘종시계와 <br>
        회중시계를 배치해 주제를 명확히 표현했습니다.
      </div>
      <br>
      <div>
        • 전체 작업은 옛날 동화책의 느낌을 살리기 위해 선화로만 그려, <br>
          색감을 배제하고 섬세한 선으로 디테일을 강조하였습니다.
        <br>
        • 고전적인 삽화 스타일을 사용하여, 동화책 속 세계관을 표현하고 <br>
          시계토끼의 캐릭터와 환경을 동화적이고 따뜻한 분위기로 풀어내었습니다.
      </div>
    `;
});
