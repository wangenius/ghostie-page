import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Container from '@theme/CodeBlock/Container';
import type {Props} from '@theme/CodeBlock/Content/Element';


// <pre> tags in markdown map to CodeBlocks. They may contain JSX children. When
// the children is not a simple string, we just return a styled block without
// actually highlighting.
export default function CodeBlockJSX({children, className}: Props): ReactNode {
  return (
    <Container
      as="pre"
      tabIndex={0}
      className={clsx('thin-scrollbar', className)}>
      <code>{children}</code>
    </Container>
  );
}
