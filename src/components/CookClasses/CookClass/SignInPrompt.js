import React from 'react';
import {Link} from 'react-router';

export default function SignInPrompt(props) {
  const signIn = (
    <Link style={{color: props.linkColor}} to="/sign-in">
      sign in
    </Link>
  );
  return <div>Please {signIn} first</div>;
};
