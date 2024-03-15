import { getAllPosts } from "../lib/postsActions";
import { Post, PostView, Posts } from "../lib/definitions";
import PostComponent from "../ui/PostComponent";
import styles from "./styles.module.scss";

export default async function Home() {
  const posts: Posts = await getAllPosts();

  return (
    <main className={styles.posts}>

      {
        posts.posts.map((post: PostView) => {
          return (<PostComponent 
            key={post.post.id.toString()} 
            post={post.post}  
            community={post.community}
            creator={post.creator}
            counts={post.counts}
            />)
        })
      }
    </main>
  );
}
