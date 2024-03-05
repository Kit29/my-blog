import React, { ReactNode } from 'react';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <header>
        <h1>My Blog</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
