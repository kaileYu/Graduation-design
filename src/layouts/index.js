
import React from 'react';
import Head from '../components/head'
import Foot from '../components/foot'
function BasicLayout(props) {
  return (
    <div>
      <Head></Head>
      {props.children}
      <Foot/>
    </div>
  );
}

export default BasicLayout;
