import { getLink } from "./cookieActions";
import { PostView, Posts } from "./definitions";

export async function getAllPosts() {
  "use server";
  try {
    const url = getLink();
    let posts: Posts;
    const response = await fetch(url + "post/list");
    posts = await response.json();
    console.log(posts);
    return posts;
  } catch (error: any) {
    console.log(error);
  }
}
