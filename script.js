/* COUNTDOWN */
const newYearDate = new Date("January 1, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = newYearDate - now;

  document.getElementById("days").innerText =
    Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("hours").innerText =
    Math.floor((diff / (1000 * 60 * 60)) % 24);
  document.getElementById("minutes").innerText =
    Math.floor((diff / (1000 * 60)) % 60);
  document.getElementById("seconds").innerText =
    Math.floor((diff / 1000) % 60);
}, 1000);

/* PROMISES */
const promises = [
  "🌸 January –  I promise to start this year with honesty and maturity. I know I made mistakes, but I’m choosing to be better—for you and for us",
  "❤️ February – Month of love,I promise to love you patiently. I won’t rush your healing or your trust. I’ll wait and prove myself",
  "🌼 March – I promise to stand by you in your toughest days. Even when life feels heavy, you won’t face it alone.",
  "🌷 April – I promise to listen more, understand deeper, and react less. I’ll choose calm over conflict,to act with care, and to protect what we mean to each other",
  "☀️ May – This month is extra special , I’m so grateful for you, for your smile, your heart, and the love you give me. On your birthday and every day after, I promise to celebrate you, support you, and stand by you. You are my blessing, and loving you is my favorite thing",
  "🌊 June –  I promise loyalty not just in words, but in every action, every choice, every day,I promise honesty",
  "🌈 July –  I promise to support your dreams and your struggles equally. Your growth matters to me.",
  "🍃 August –  I promise to focus on my growth and career, so I can become stronger and more responsible for myself and for us",
  "🍂 September – I promise to be consistent. No confusion, no mixed actions just sincerity",
  "🎃 October – I promise to protect your heart, not hurt it. I’ll think before I speak and care before I act",
  "❄️ November – I promise to never make you regret choosing me. I’ll show you love that feels safe.",
  "🎄 December – By the end of this year, I promise to earn your trust again through my actions. I love you deeply, and I’m not giving up on us.I love you, I choose you, and I look forward to every tomorrow with you."
];

function showPromise(index) {
  document.getElementById("promiseBox").innerText = promises[index];
}

/* POPUP */
function openLove() {
  document.getElementById("lovePopup").style.display = "flex";
}

function closeLove() {
  document.getElementById("lovePopup").style.display = "none";
}
