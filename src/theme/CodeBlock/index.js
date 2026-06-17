import React from 'react';
import CodeBlock from '@theme-original/CodeBlock';
import FlowMap from '@site/src/components/FlowMap';

// Route ```flowmap fenced blocks to the FlowMap module (like ```mermaid → Mermaid).
// Everything else falls through to the original CodeBlock.
function languageOf(props) {
  if (props.language) return props.language;
  const match = /language-([\w-]+)/.exec(props.className || '');
  return match ? match[1] : undefined;
}

export default function CodeBlockWrapper(props) {
  if (languageOf(props) === 'flowmap') {
    const spec = typeof props.children === 'string' ? props.children : '';
    return <FlowMap spec={spec} />;
  }
  return <CodeBlock {...props} />;
}
