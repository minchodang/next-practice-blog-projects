import styled from '@emotion/styled';
import { DUMMY_POSTS, getStaticProps } from '../../pages';
import { PostsGrid, PostsGridProps } from '../posts/posts-grid';
import { InferGetStaticPropsType } from 'next';

const Latest = styled.section`
    width: 90%;
    max-width: 80rem;
    margin: var(--size-8) auto;

    h2 {
        font-size: var(--size-8);
        color: var(--color-grey-800);
        text-align: center;
        @media (min-width: 768px) {
            font-size: var(--size-16);
        }
    }
`;

export const FeaturedPosts = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <Latest>
            <h2>Featured Posts</h2>
            <PostsGrid posts={props.posts} />
        </Latest>
    );
};
