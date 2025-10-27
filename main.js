const adviceId = document.getElementById("adviceId");
const advice = document.getElementById("advice");

async function getAdvice() {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const date = await res.json();
    adviceId.textContent = `advice #${date.slip.id}`;
    advice.textContent = `“${date.slip.advice}”`;
  } catch (error) {
    console.log("Error fetching advice:", error);
  }
}
getAdvice();
