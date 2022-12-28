import styled from '@emotion/styled';
import { PostItem } from './post-item';

interface PostsGridProps {
    posts: [];
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
                <PostItem />
            ))}
        </Grid>
    );
};
