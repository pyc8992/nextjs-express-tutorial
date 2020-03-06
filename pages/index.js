import React from 'react'
import Link from 'next/link';

export default () => (
  <div>
    Hello, from Next.js!
    <li
    style={{
      marginRight: '10px',
      color: '#ddd',
      padding: '5px'
    }}
    >
      <Link href={'/test'}><a>{'test'}</a></Link>
    </li>
  </div>
);
