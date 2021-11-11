// == Import npm
import React, { useEffect } from 'react';

// == Import
import './Error404.scss';

const Error404 = () => {
  useEffect(() => {
    document.title = 'Page not found';
  }, []);

  return (
    <div className="error404">
      404
      <main>
        <div className="info">
          Page not found
        </div>
      </main>
    </div>
  );
};

// == Export
export default Error404;
