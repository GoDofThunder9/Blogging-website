document.addEventListener("DOMContentLoaded", function() {
    const chatImage = document.getElementById('chatImage');
    const chatbox = document.getElementById('user-chat-box');
    
    // Ensure the chatbox is hidden initially
    chatbox.classList.add('hidden');
  
    chatImage.addEventListener('click', function(event) {
      event.stopPropagation(); // Prevent event from bubbling up to document
      chatbox.classList.toggle('hidden');
    });
  
    document.addEventListener('click', function() {
      chatbox.classList.add('hidden');
    });
  
    chatbox.addEventListener('click', function(event) {
      event.stopPropagation(); // Prevent event from bubbling up to document
    });
  });
  
document.addEventListener("DOMContentLoaded", function() {
    const chatImage = document.getElementById('friendIcon');
    const chatbox = document.getElementById('user-friends');
    
    // Ensure the chatbox is hidden initially
    chatbox.classList.add('hidden');
  
    chatImage.addEventListener('click', function(event) {
      event.stopPropagation(); // Prevent event from bubbling up to document
      chatbox.classList.toggle('hidden');
    });
  
    document.addEventListener('click', function() {
      chatbox.classList.add('hidden');
    });
  
    chatbox.addEventListener('click', function(event) {
      event.stopPropagation(); // Prevent event from bubbling up to document
    });
  });
  