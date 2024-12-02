import Image from "next/image";

import styles from "./index.module.css";

type News = {
    id: string;
    title: string;
    category: {
        name: string;
    };
    publishedAt: string;
    createdAt: string;
};

type Props = {
    nwes: News[];
};

export default function NewsList({ news }: Props) {
    if (news.length === 0) {
        return <div>記事がありません</div>;
    }
    return(
        <ul>
            {news.map(article) => (
                <li key={article.id} className={styles.list}>
                    <div className={styles.link}>
                        <Image
                            className={styles.image}
                            src="/no-image.png"
                            alt="No Image"
                            width={1200}
                            height={630}
                        />
                        <dl className={styles.content}>
                            <dt className={styles.title}>{article.title}</dt>
                            <dd className={styles.meta}>
                                <span className={styles.tag}>{article.category.name}</span>
                                <span className={styles.date}>
                                    <Image
                                        src="/clock.svg"
                                        alt=""
                                        width={16}
                                        height={16}
                                        priority
                                    />
                                    {article.publishedAt}
                                </span>
                            </dd>
                        </dl>
                    </div>
                </li>
            ))}
        </ul>
    );
}