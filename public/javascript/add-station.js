async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('textarea[name="title"]').value.trim();
    const content = document.querySelector('textarea[name="content"]').value.trim();
  
    const response = await fetch(`/api/stations`, {
      method: 'POST',
      body: JSON.stringify({
        // title,
        // content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#new-station-form')?document.querySelector('#new-station-form').addEventListener('click', newFormHandler):null;