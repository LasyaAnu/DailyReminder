document.addEventListener('DOMContentLoaded', function() {
    const daySelect = document.getElementById('day');
    const timeInput = document.getElementById('time');
    const activitySelect = document.getElementById('activity');
    const setReminderButton = document.getElementById('set-reminder');
    const reminderMessageDiv = document.getElementById('reminder-message');
  
    setReminderButton.addEventListener('click', setReminder);
  
    function setReminder() {
      const day = daySelect.value;
      const time = timeInput.value;
      const activity = activitySelect.value;
  
      // Split time into hours and minutes
      const [hours, minutes] = time.split(':');
  
      // Create reminder time for today
      const reminderTime = new Date();
      reminderTime.setHours(parseInt(hours, 10));
      reminderTime.setMinutes(parseInt(minutes, 10));
      reminderTime.setSeconds(0);
  
      // Check if the selected time is earlier than the current time today
      const currentTime = new Date();
      if (currentTime > reminderTime) {
        reminderTime.setDate(reminderTime.getDate() + 1); // Set reminder for tomorrow
      }
  
      // Calculate the timeout
      const timeout = reminderTime - currentTime;
  
      // Schedule reminder
      setTimeout(() => {
        playSound();
        reminderMessageDiv.textContent = `Reminder: ${activity} on ${day} at ${time}`;
      }, timeout);
    }
  
    function playSound() {
      const audio = new Audio('sound.mp3');
      audio.play();
    }
  });
  