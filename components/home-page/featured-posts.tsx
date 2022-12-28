import styled from '@emotion/styled';

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

export const FeaturedPosts = () => {
    return (
        <Latest>
            <h2>Featured Posts</h2>
        </Latest>
    );
};
