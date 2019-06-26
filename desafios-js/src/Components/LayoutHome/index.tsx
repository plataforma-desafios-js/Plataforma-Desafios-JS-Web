import React from 'react';

const LayoutHome: React.FC = ({children}) => {
  return (
    <div className="divider-view">
        <header className="sidebar">

        </header>
        <main className="view">
            {children}
        </main>
    </div>
  );
}

export default LayoutHome;
