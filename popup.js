const quotes = [
  "Hard work beats talent when talent doesn't work hard.",
  "Don't wish for it, work for it.",
  "Success is no accident. It is hard work, perseverance, and learning.",
  "Passive income is freedom in disguise.",
  "Work hard now so you can relax later.",
  "Build assets that make money while you sleep.",
  "Hard work compounds — just like passive income.",
  "Discipline turns dreams into passive income.",
  "Focus on building, not just earning.",
  "Let your hustle build your freedom."
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function updateQuote() {
  document.getElementById('quote').textContent = getRandomQuote();
}

document.addEventListener('DOMContentLoaded', updateQuote);
document.getElementById('new-quote').addEventListener('click', updateQuote);
