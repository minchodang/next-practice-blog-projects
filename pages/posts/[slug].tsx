import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../lib/post-util';
import Head from 'next/head';

export default function PostDetailPage(props: any) {
    return (
        <>
            <Head>
                <title>{props.post.title}</title>
                <meta name={'description'} content={props.post.excerpt} />
            </Head>
            <PostContent post={props.post} />
        </>
    );
}

export function getStaticProps(context: { params: any }) {
    const { params } = context;
    const { slug } = params;
    const postData = getPostData(slug);
    return {
        props: {
            post: postData,
        },
        revalidate: 600,
    };
}

export function getStaticPaths() {
    const postFileNames = getPostsFiles();
    const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ''));
    return {
        paths: slugs.map((slug) => ({ params: { slug: slug } })),
        fallback: false,
    };
}
