import styled from '@emotion/styled';
import { PostItem } from './post-item';
import { DUMMY_POSTS } from '../../pages';

export interface PostsGridProps {
    posts: DUMMY_POSTS[];
}

const Grid = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    gap: 1.5rem;
    align-content: center;
`;

export const PostsGrid = ({ posts }: PostsGridProps) => {
    return (
        <Grid>
            {posts.map((post) => (
                <PostItem
                    image={post.image}
                    date={post.date}
                    title={post.title}
                    excerpt={post.excerpt}
                    slug={post.slug}
                    key={post.slug}
                />
            ))}
        </Grid>
    );
};
