
const newCommentHandler = async (event) => {
    event.preventDefault();
  
    const commentContent = document.querySelector('#commentText').value.trim();

    const id = document.querySelector('#postCard').getAttribute('data-id');
    debugger;
    if (commentContent) {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'POST',
        body: JSON.stringify({ content: commentContent}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        document.location.replace(`/posts/${id}`);
      } else {
        alert('Failed to post comment');
      }
    }
  };



if(document.querySelector('#commentForm')){

document
  .querySelector('#commentForm')
  .addEventListener('submit', newCommentHandler);
}