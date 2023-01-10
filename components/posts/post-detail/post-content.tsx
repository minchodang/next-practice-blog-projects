import { PostHeader } from './post-header';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';

const Content = styled.article`
    width: 95%;
    max-width: 60rem;
    margin: var(--size-8) auto;
    font-size: var(--size-5);
    line-height: var(--size-8);
    background-color: var(--color-grey-100);
    border-radius: 6px;
    padding: var(--size-4);
    p {
        color: var(--color-grey-800);
    }
    image {
        margin: var(--size-4) auto;
        width: 100%;
        max-width: 600px;
    }
    @media (min-width: 768px) {
        padding: var(--size-8);
    }
`;

export const PostContent = ({ post }: any) => {
    const imagePath = `/images/posts/${post.slug}/${post.image}`;
    return (
        <Content>
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkdown>{post.content}</ReactMarkdown>
        </Content>
    );
};
