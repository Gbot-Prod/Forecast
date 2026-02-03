let isRunning = false;
let timeRemaining = 1500; // 25 minutes in seconds

const timerDisplay = document.getElementById('timerDisplay');


startButton.addEventListener('click', () => {
  if (!isRunning) {
    isRunning = true;
    startButton.textContent = 'Pause';
    
    timerInterval = setInterval(() => {
      if (timeRemaining > 0) {
        timeRemaining--;
        updateTimerDisplay(timeRemaining);
      } else {
        clearInterval(timerInterval);
        isRunning = false;
        startButton.textContent = 'Start';
        alert('Time is up! Take a break.');
      }
    }, 1000);
  } else {
    // Pause the timer
    clearInterval(timerInterval);
    isRunning = false;
    startButton.textContent = 'Start';
  }
});

resetButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  isRunning = false;
  timeRemaining = 1500; // Reset to 25 minutes
  updateTimerDisplay(timeRemaining);
  startButton.textContent = 'Start';
});

function updateTimerDisplay(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}


