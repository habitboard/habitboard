grid = document.getElementById("grid");

urlParams = new URLSearchParams(window.location.search);
document.getElementById("title").innerHTML = urlParams.get('title');

total_items = urlParams.get('days')
total_columns = 7

total_rows = Math.ceil(total_items / total_columns);

console.log(total_rows);
count = 0;

current_date = new Date(urlParams.get('startdate'));

for (r = 0; r < total_rows; r++) {

    for (c = 0; c < total_columns; c++) {

        if (count == total_items) {
            break;
        }

        cell = document.createElement("div")
        cell.innerHTML = new Intl.DateTimeFormat('en', { month: "short", day: "numeric" })
            .format(current_date);
        cell.className = "cell";

        grid.appendChild(cell);
        count++
        current_date.setDate(current_date.getDate() + 1);
    }

    br = document.createElement("br")
    grid.appendChild(br);
}