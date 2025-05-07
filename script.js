
document.addEventListener('DOMContentLoaded', function () {
  const calendarElement = document.getElementById('calendar');
  const today = new Date();
  let month = today.getMonth();
  let year = today.getFullYear();

  const yearSelect = document.createElement('select');
  for (let i = 2020; i <= 2030; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    if (i === year) option.selected = true;
    yearSelect.appendChild(option);
  }

  yearSelect.addEventListener('change', function() {
    year = parseInt(yearSelect.value);
    updateCalendar();
  });

  const calendarHeader = document.createElement('div');
  calendarHeader.appendChild(yearSelect);
  calendarElement.appendChild(calendarHeader);

  function updateCalendar() {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    let calendarHTML = '<table>';
    calendarHTML += '<thead><tr>';
    for (let i = 0; i < 7; i++) {
        calendarHTML += `<th>${['D', 'L', 'M', 'M', 'J', 'V', 'S'][i]}</th>`;
    }
    calendarHTML += '</tr></thead><tbody><tr>';

    for (let i = 0; i < firstDay; i++) {
        calendarHTML += '<td class="disabled"></td>';
    }

    for (let day = 1; day <= daysInMonth; day++) {
        if ((firstDay + day - 1) % 7 === 0 && day !== 1) {
            calendarHTML += '</tr><tr>';
        }
        calendarHTML += `<td onclick="selectDate(${day})">${day}</td>`;
    }

    calendarHTML += '</tr></tbody></table>';
    calendarElement.innerHTML = calendarHTML;
  }

  updateCalendar();
});

function selectDate(day) {
  const inputField = document.getElementById('calendarInput');
  const currentDate = new Date();
  const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);

  const formattedDate = selectedDate.toLocaleDateString('ro-RO', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
  });

  inputField.value = formattedDate;
  document.getElementById('calendar').style.display = 'none';
}

function toggleCalendar() {
  const calendarPopup = document.getElementById('calendar');
  calendarPopup.style.display = calendarPopup.style.display === 'none' ? 'block' : 'none';
}

document.getElementById('checkBtn').addEventListener('click', function() {
  const checkBox = document.getElementById('checkAnswer');
  const correctAnswer = document.getElementById('correctAnswer');

  if (checkBox.checked && correctAnswer.checked) {
      alert('✅ Răspunsul este corect!');
  } else {
      alert('❌ Încearcă din nou!');
  }
});
