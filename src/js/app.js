import data from "./data.json";

import generateRow, {
  findTargetHeader,
  updateDomTable,
} from "./table_handling";

import { sortBy } from "./sorting";

document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector("tbody");

  for (let item of data) {
    tableBody.append(
      generateRow(item["id"], item["title"], item["year"], item["imdb"])
    );
  }

  const tableRows = [...document.querySelectorAll("tr")].slice(1);

  const headers = [...document.querySelectorAll("th")];

  const sortingOrder = [
    "id",
    "id_reverse",
    "title",
    "title_reverse",
    "year",
    "year_reverse",
    "imdb",
    "imdb_reverse",
  ];

  let index = 0;

  setInterval(() => {
    let maxIndex = 7;
    if (index <= maxIndex && index % 2 === 0) {
      sortBy(tableRows, sortingOrder[index]);
      let className = "active_sort_down";
      findTargetHeader(sortingOrder[index], headers, className);
      updateDomTable(tableBody, tableRows);
    }
    if (index <= maxIndex && index % 2 !== 0) {
      tableRows.reverse();
      let className = "active_sort_up";
      findTargetHeader(sortingOrder[index - 1], headers, className);
      updateDomTable(tableBody, tableRows);
    }
    index += 1;
    if (index == 8) {
      index = 0;
    }
  }, 2000);
});
