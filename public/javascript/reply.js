async function replyFormHandler(event) {
    event.preventDefault();

    const reply_text = document.querySelector('textarea[name="reply"]').value.trim();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (reply_text) {
        const response = await fetch('/api/reply', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                reply_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();

        } else {
            alert(response.statusText);
            document.querySelector('#reply-form').style.display = "block";
        }
    }
}

document.querySelector('#reply-form').addEventListener('submit', replyFormHandler);