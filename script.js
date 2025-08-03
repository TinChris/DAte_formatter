const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

// Hilfsfunktion: Zahlen < 10 bekommen eine führende Null
const padZero = (num) => (num < 10 ? `0${num}` : num);

// Funktion, um das Datum abhängig vom Format zu formatieren
const formatDate = (format) => {
  switch (format) {
    case "yyyy-mm-dd":
      return `${year}-${padZero(month)}-${padZero(day)}`;
    case "mm-dd-yyyy-h-mm":
      return `${padZero(month)}-${padZero(day)}-${year} ${padZero(hours)} Hours ${padZero(minutes)} Minutes`;
    case "dd-mm-yyyy":
    default:
      return `${padZero(day)}-${padZero(month)}-${year}`;
  }
};

// Initiale Anzeige passend zum aktuell ausgewählten Format
currentDateParagraph.textContent = formatDate(dateOptionsSelectElement.value);

// Event Listener für Dropdown-Änderungen
dateOptionsSelectElement.addEventListener("change", () => {
  currentDateParagraph.textContent = formatDate(dateOptionsSelectElement.value);
});
