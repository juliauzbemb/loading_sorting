export default function generateRow(id, title, year, imdb) {
  let newRow = document.createElement("tr");
  newRow.dataset.id = id;
  newRow.dataset.title = title;
  newRow.dataset.year = year;
  newRow.dataset.imdb = imdb;
  newRow.innerHTML = `<tr data-id=${id} data-title=${title} data-year=${year} data-imdb=${imdb}>
    <td>${id}</td>
    <td>${title}</td>
    <td>(${year})</td>
    <td>imdb: ${Number(imdb).toFixed(2)}</td>
  </tr>`;
  return newRow;
}

export function findTargetHeader(property, headers, classname) {
  deactivateArrow(headers);
  let target = headers.find((item) => item.textContent === property);
  target.classList.add(classname);
}

export function updateDomTable(parent, child) {
  for (let item of child) {
    parent.append(item);
  }
}

function deactivateArrow(headers) {
  headers.forEach((item) =>
    item.classList.remove("active_sort_up", "active_sort_down")
  );
}
