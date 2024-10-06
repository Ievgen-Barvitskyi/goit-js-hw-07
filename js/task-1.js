const navEl = document.querySelector("#categories");

console.log(`Number of categories: ${navEl.children.length}`);

const items = navEl.querySelectorAll(".item");

items.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const itemEl = item.querySelectorAll("ul li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemEl}`);
});
