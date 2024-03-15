'use client'
import { useState } from "react";
import styles from "./Collapse.module.scss";

export default function Collapse(
    { text, collapsedLength, interactable }:
        { text: string, collapsedLength: number, interactable: boolean }
) {
    const [showFullDescription, setFullDescription] = useState(false);
    const showFullDescriptionHandler = () => {
        setFullDescription(!showFullDescription);
    };

    const description = showFullDescription
        ? text
        : text.slice(0, collapsedLength);

    return (
        <div>
            <p>{description}{text.length > collapsedLength && !showFullDescription && <span>...</span>}</p>
            {
                text.length > collapsedLength &&
                interactable &&
                <button className={styles.button} onClick={showFullDescriptionHandler}>
                    Read {showFullDescription ? "Less" : "More"}
                </button>
            }
        </div>
    )
}