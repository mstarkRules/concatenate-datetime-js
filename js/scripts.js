function handleFormData() {
  const form = document.getElementById("datetime-form");
  const formElements = form.elements;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const date = formElements["date"].valueAsDate;
    const time = formElements["time"].valueAsDate;

    // chama função, passando os objetos de datas como parâmetros
    const datetime = concatenateDatetime(date, time);

    const resultArea = document.getElementById("result");

    resultArea.innerHTML = datetime;
  });
}

// Standart format
// const fixedDate = "05/07/2023 20:50";
// const fixedTime = "05/07/2023 14:00";

// ISO format
// const isoDatetime = '2023-05-20:50:00.000Z'

function concatenateDatetime(date, time) {
  let dateString = new Date(date).toDateString();
  let timeString = new Date(time).toTimeString();

  let formattedDatetime = new Date(`${dateString} ${timeString}`);

  return formattedDatetime.toISOString();
}

handleFormData();
