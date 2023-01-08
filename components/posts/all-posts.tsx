import styled from '@emotion/styled';
import { PostsGrid } from './posts-grid';
import { DUMMY_POSTS, getStaticProps } from '../../pages';
import { InferGetStaticPropsType } from 'next';

interface AllPostsProps {
    posts: DUMMY_POSTS[];
}

const Posts = styled.section`
    width: 90%;
    max-width: 60rem;
    margin: var(--size-8) auto;
    h1 {
        font-size: var(--size-8);
        color: var(--color-grey-800);
        text-align: center;
        @media (min-width: 768px) {
            font-size: var(--size-16);
        }
    }
`;

export const AllPosts = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <Posts>
            <h1>All Posts</h1>
            <PostsGrid posts={posts} />
        </Posts>
    );
};
