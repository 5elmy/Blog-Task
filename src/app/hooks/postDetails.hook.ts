

import { BASEURL } from '../Constants/BASEURL';

export default async function PostDetailsHook({postId}:{postId:string | number}) {




  
     let [postsResponse, commentsResponse] = await Promise.all([
       fetch(`${BASEURL}/posts/${postId}`),
       fetch(`${BASEURL}/comments?postId=${postId}`),
     ]);
     let [post, comments] = await Promise.all([
       postsResponse.json(),
       commentsResponse.json(),
     ]);
 
   
 
 
    
    return {post , comments }

}

