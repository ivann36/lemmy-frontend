import { Community, Counts, Creator, Post } from "../lib/definitions";
import Image from 'next/image'
import Collapse from "./Collapse";
import { GoMoveToTop } from "react-icons/go";
import { MdArrowOutward, MdArrowUpward, MdArrowDownward } from "react-icons/md";
import styles from "./PostComponent.module.scss"
import Link from "next/link";

export default function PostComponent(
    { post, community, creator, counts }:
        { post: Post, community: Community, creator: Creator, counts: Counts }) {
    const themeTest = "border-teal-500"
    const post_style = post.thumbnail_url ? styles.post : styles.post_noimage;
    return (
        <article className={post_style}>
            {
                post.thumbnail_url &&
                <div className={styles.imageWrapper}>
                    <Image width={200} height={100}
                        className={styles.image}
                        src={post.thumbnail_url} alt='thumbnail' />
                </div>
            }
            <div className={styles.content}>
                {
                    <h2 className="text-2xl">{post.name}</h2>
                }
                {
                    post.body &&
                    <Collapse text={post.body} collapsedLength={1000} interactable={true} />
                }
            </div>

            <div className={styles.actions}>
                <Link className={styles.source} href={post.ap_id} target="_blank">
                    <MdArrowOutward />
                </Link>
                <MdArrowUpward className={styles.vote} />
                <span>{counts.upvotes}</span>
                <MdArrowDownward className={styles.vote} />
            </div>
        </article>
    );
}