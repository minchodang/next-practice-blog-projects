import { PostHeader } from './post-header';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';

const DUMMY_POST = {
    title: 'Getting Started with NextJS',
    image: 'getting-started-with-nextjs.png',
    date: '2022-12-28',
    slug: 'getting-started-with-nextjs',
    content: '# This is a first post.',
};

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

export const PostContent = () => {
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
    return (
        <Content>
            <PostHeader title={DUMMY_POST.title} image={imagePath} />
            <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
        </Content>
    );
};
