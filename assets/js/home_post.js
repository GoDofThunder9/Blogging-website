{
    let createPost = async function()
    {
        let newPostForm = $('#new-post-form');
       await newPostForm.submit(function(e)
        {
          e.preventDefault();
          $.ajax(
            {
                type: 'post',
                url: '/posts/create',
                data: newPostForm.serialize(),
                success:  function(data) 
                { 
                   let  newPost = newPostDom(data.data.post);
                   $(`#post-list-container>ul`).prepend(newPost);
                   deletePost($(`.delete-post-button`, newPost));
                }, error: function(error)
                {
                    console.log(error.responseText);
                }
            }
          );
        }
      );
    }
    let newPostDom = function(post)
    {
      return $(
        `
        <li id="post-${post._id}" style="list-style-type: none;" >
        <div id="post-whole-container" class="post-card"> 
        <div class="post-container">
        <small><a class="delete-post-button" href="/posts/destroy/${post._id}"><i class="fa-solid fa-rectangle-xmark"></i></a></small>
              <img src="${post.uuser.avatar}" alt="not loaded">
              <div class="post-content" >"${post.content}"</div>
              <a id="Read-More" href="/posts/page/${post._id}"> READ-MORE</a>
            </div>
            <small id="like-comment">
                <a class="toggle-like-button" data-likes="${post.likes.length}" href="/likes/toggle/?id=${post._id}&type=Post"> ${post.likes.length} <i class="fa-solid fa-heart" style="color: red;"></i></a>
                  <i class="fa-regular fa-comment toggle-comment" id="toggle-comment-${post._id}" data-post-id="${post._id}" style="margin-left: 4px;"></i>
                </small>
                <small class="post-user">:-${post.uuser.name}</small>
              </p>
  </div>
  </li>
<script src="js/toogle_like.js"></script>
<script>
$('.toggle-like-button').each(function(){
       let self = this;
       let toggleLike = new ToggleLike(self);
   });
 </script>
  `)}
     
    let deletePost = function(deletelink)
    {
      $(deletelink).click(function(e)
      {
       e.preventDefault();

        $.ajax(
          {
           type:'get',
           url: $(deletelink).prop('href'),
           success: function(data)
           {
            console.log(data.data.post_id);
            $(`#post-${data.data.post_id}`).remove();
           }, error: function(error)
           {
             console.log('error');
           }
          }
        );
      }
      );
    }
    createPost();
}

