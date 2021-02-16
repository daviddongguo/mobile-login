import React from 'react';

interface Props {
  name: string;
  color: string;
}

// Written as a function declaration
export default function Heading({ name, color }: Props): React.ReactNode {
  return <h1>My Website Heading</h1>;
}
