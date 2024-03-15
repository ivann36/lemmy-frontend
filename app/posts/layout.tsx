import Link from "next/link";
import { IoIosLogIn } from "react-icons/io";
import styles from "./layout.module.scss";

export default function PostsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="">
            <div className={styles.navbar}>
                <span>Glass Onion</span>
                <div>
                    <Link className={styles.link} href="/posts">Posts</Link>
                </div>
                <IoIosLogIn className="col-start-10 col-span-1 size-10 text-teal-600 m-auto" />
            </div>
            <div className="mt-2">{children}</div>
        </div>
    )
}