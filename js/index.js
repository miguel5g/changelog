document.addEventListener("DOMContentLoaded", onReady);

const months = Array.from({ length: 12 }, (_, i) =>
  new Date(0, i)
    .toLocaleDateString("pt-BR", { month: "long" })
    .split("")
    .map((char, charI) => (charI === 0 ? char.toUpperCase() : char))
    .join("")
);
/* const logs = [
  {
    date: "16-06-2021",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam nam animi neque laborum perferendis aliquid, labore a ratione voluptatibus ut modi nesciunt ea totam. Quisquam voluptatibus at mollitia nisi amet!",
  },
  {
    date: "15-06-2021",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam nam animi neque laborum perferendis aliquid, labore a ratione voluptatibus ut modi nesciunt ea totam. Quisquam voluptatibus at mollitia nisi amet!",
  },
  {
    date: "14-06-2021",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam nam animi neque laborum perferendis aliquid, labore a ratione voluptatibus ut modi nesciunt ea totam. Quisquam voluptatibus at mollitia nisi amet!",
  },
  {
    date: "13-06-2021",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam nam animi neque laborum perferendis aliquid, labore a ratione voluptatibus ut modi nesciunt ea totam. Quisquam voluptatibus at mollitia nisi amet!",
  },
]; */

async function onReady() {
  const mainElem = document.querySelector("body main");
  const logs = await fetch(
    "https://miguel5g.github.io/changelog/data.json"
  ).then((res) => res.json());

  logs.forEach((log) => {
    const date = log.date.split("-").map((str) => +str);
    const logElem = createElement(
      `${date[0]} de ${months[date[1]]} de ${date[2]}`,
      log.content
    );

    mainElem.innerHTML = mainElem.innerHTML + logElem;
  });
}

/**
 * @param {string} date
 * @param {string} content
 * @returns
 */
function createElement(date, content) {
  return `
  <section class="elevation-1">
    <strong class="title-heavy">${date}</strong>
    <p class="body-light">${content.replaceAll("\n", "<br />")}</p>
  </section>
  `;
}
