import React from 'react';

const renderHighlightedText = (text, isHeader) => {
  const Tag = isHeader ? 'h2' : 'span';
  const className = isHeader ? 'highlighted-header' : 'highlighted-span';

  const parts = text.split(/({.*?})/).map((part, index) => {
    if (part.startsWith('{')) {
      const highlightedPart = part.substring(1, part.length - 1);
      return <span key={index} className={className}>{highlightedPart}</span>;
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });

  return <Tag>{parts}</Tag>;
};

export default renderHighlightedText;