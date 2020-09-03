import React from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';

const Test = () => {
  const router = useRouter();

  const onCLickDownload = () => {
    router.push('test.xlsx');
    // axios.get('test.xlsx');
    // axios.get('/api/test')
    //   .then(response => { console.log(response); } ) // SUCCESS
    //   .catch(response => { console.log(response); } ); // ERROR
  }

  return (
    <div>
    Hello, Test <br />
    <button onClick={onCLickDownload}>Test</button>
    </div>
  )
}

export default Test;
