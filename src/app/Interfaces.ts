export interface  post {
    id:number , 
    title:string,
    body:string
}

export interface comment {
    id:number ,
    name:string,
    email:string,
    body:string

}
export interface params {params:{postId:string }}

export interface PostDetailsHookResponse {
    post: post;
    comments: comment[];
  }