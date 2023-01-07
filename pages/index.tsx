import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Hero from '../components/home-page/hero';
import { FeaturedPosts } from '../components/home-page/featured-posts';

export type DUMMY_POSTS = {
    title: string;
    image: string;
    excerpt: string;
    date: string;
    slug: string;
};

export default function HomePage() {
    const DUMMY_POSTS = [
        {
            title: 'Getting Started with NextJS',
            image: 'getting-started-nextjs.png',
            excerpt:
                'NextJS is the React framework for production - it makes building for production - it makes building fullstack React app sites and breeze and ships with built-in SSR.',
            date: '2022-12-28',
            slug: 'getting-started-with-nextjs',
        },
        {
            title: 'Getting Started with NextJS',
            image: 'getting-started-nextjs.png',
            excerpt:
                'NextJS is the React framework for production - it makes building for production - it makes building fullstack React app sites and breeze and ships with built-in SSR.',
            date: '2022-12-28',
            slug: 'getting-started-with-nextjs2',
        },
        {
            title: 'Getting Started with NextJS',
            image: 'getting-started-nextjs.png',
            excerpt:
                'NextJS is the React framework for production - it makes building for production - it makes building fullstack React app sites and breeze and ships with built-in SSR.',
            date: '2022-12-28',
            slug: 'getting-started-with-nextjs3',
        },
        {
            title: 'Getting Started with NextJS',
            image: 'getting-started-nextjs.png',
            excerpt:
                'NextJS is the React framework for production - it makes building for production - it makes building fullstack React app sites and breeze and ships with built-in SSR.',
            date: '2022-12-28',
            slug: 'getting-started-with-nextjs4',
        },
    ];

    return (
        <>
            <Hero />
            <FeaturedPosts posts={DUMMY_POSTS} />
        </>
    );
}
