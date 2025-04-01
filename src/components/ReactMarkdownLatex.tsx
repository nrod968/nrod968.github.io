import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

interface MarkdownViewerProps {
    content: string;
}

const MarkdownViewer = ({ content }: MarkdownViewerProps) => {
    return (
        <div className="prose max-w-full">
            <ReactMarkdown
                children={content}
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
            />
        </div>
    );
};

export default MarkdownViewer;
