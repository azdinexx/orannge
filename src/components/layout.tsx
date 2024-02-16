import React from 'react';

function Layout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={'max-w-7xl mx-auto w-full ' + className}>{children}</div>
  );
}

export default Layout;
