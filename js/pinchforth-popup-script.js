// Get the modal
let modal = document.getElementById('pinchforth-modal');

// Get the <span> element that closes the modal
let span = document.getElementsByClassName('close')[0];

// When the page finishes loading
window.onload = function () {
  // Open the modal after 2 seconds
  setTimeout(function () {
    modal.style.display = 'flex';
  }, 2000);
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};


// Fetch POST to HubSpot endpoint
document
  .getElementById('pinchforth-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    const HUBSPOT_PORTAL_ID = '45135010';
    const HUBSPOT_FORM_ID = '72ed0c82-a287-4097-bf3c-49a5797e02a2';

    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;

    const data = {
      fields: [
        {
          name: 'email',
          value: formProps.email
        }
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title
      }
    };

    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        modal.style.display = 'none';
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
