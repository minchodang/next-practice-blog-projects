import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { AllPosts } from '../../components/posts/all-posts';
import { getAllPosts, getFeaturedPosts } from '../../lib/post-util';

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
