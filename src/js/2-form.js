document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.feedback-form');
  form.addEventListener('input', function(event) {
      if (event.target.tagName.toLowerCase() === 'input' || event.target.tagName.toLowerCase() === 'textarea') {
          const emailValue = form.email.value.trim();
          const messageValue = form.message.value.trim();
          if (emailValue === '' || messageValue === '') {
              alert('Both email and message are required.');
              return;
          }
          localStorage.setItem('feedback-form-state', JSON.stringify({ email: emailValue, message: messageValue }));
      }
  });
  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
      const parsedData = JSON.parse(storedData);
      form.email.value = parsedData.email;
      form.message.value = parsedData.message;
  }
  form.addEventListener('submit', function(event) {
      event.preventDefault();

      const emailValue = form.email.value.trim();
      const messageValue = form.message.value.trim();

      if (emailValue !== '' && messageValue !== '') {
          console.log({ email: emailValue, message: messageValue });
          localStorage.removeItem('feedback-form-state');
          form.reset();
      } else {
          alert('Both email and message are required.');
      }
  });
});