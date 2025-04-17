import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import type {Props} from '@theme/CodeBlock/Line';

export default function CodeBlockLine({
  line,
  classNames,
  showLineNumbers,
  getLineProps,
  getTokenProps,
  lineNumber,
}: Props & { lineNumber?: number }): ReactNode {
  if (line.length === 1 && line[0]!.content === '\n') {
    line[0]!.content = '';
  }

  const lineProps = getLineProps({
    line,
    className: clsx(
      classNames, 
      showLineNumbers && 'table-row relative'
    ),
  });

  const lineTokens = line.map((token, key) => (
    <span key={key} {...getTokenProps({token})} />
  ));

  return (
    <span {...lineProps}>
      {showLineNumbers ? (
        <>
          <span className="table-cell text-right w-[1%] sticky left-0 pr-4 pl-2 text-gray-500 select-none opacity-60 hover:opacity-100">
            {lineNumber}
          </span>
          <span className="table-cell pr-4">{lineTokens}</span>
        </>
      ) : (
        lineTokens
      )}
      <br />
    </span>
  );
}
