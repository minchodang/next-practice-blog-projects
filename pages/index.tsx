import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Hero from '../components/home-page/hero';
import { FeaturedPosts } from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../lib/post-util';
import { InferGetStaticPropsType } from 'next';

export type DUMMY_POSTS = {
    title: string;
    image: string;
    excerpt: string;
    date: string;
    slug: string;
};
function HomePage(props: any) {
    const posts = props.posts;
    return (
        <>
            <Hero />
            <FeaturedPosts posts={posts} />
        </>
    );
}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();
    return {
        props: {
            posts: featuredPosts,
        },
    };
}

export default HomePage;
