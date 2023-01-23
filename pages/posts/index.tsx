import { AllPosts } from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/post-util';

export default function AllPostPage(props: any) {
    return <AllPosts posts={props.posts} />;
}
export function getStaticProps() {
    const allPosts = getAllPosts();
    return {
        props: {
            posts: allPosts,
        },
    };
}
