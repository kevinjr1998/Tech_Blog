const newFormHandler = async (event) => {
    event.preventDefault();
  
    const postTitle = document.querySelector('#post-title').value.trim();
    const postContent = document.querySelector('#post-content').value.trim();
   
    if ( postTitle && postContent) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ title: postTitle, content: postContent}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const updateFormHandler = async (event) => {
    event.preventDefault();
    
    const postTitle = document.querySelector('#updatedTitle').value.trim();
    const postContent = document.querySelector('#updatedContent').value.trim();

    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
    
    if ( postTitle && postContent) {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title: postTitle, content: postContent}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update post');
      }
    }
  }
  };


  const delButtonHandler = async (event) => {

    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete post');
      }
    }
  };

if (document.querySelector('#new-post-form')){
  document
  .querySelector('#new-post-form')
  .addEventListener('submit', newFormHandler);
}


if(document
  .querySelector('#postDelete')){

  document
  .querySelector('#postDelete')
  .addEventListener('click', delButtonHandler);

  }


  if (document.querySelector('#postUpdate')){
    document
  .querySelector('#postUpdate')
  .addEventListener('click', updateFormHandler);

  }





