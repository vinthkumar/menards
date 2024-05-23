import React from 'react';

const AccordionItem = ({ title, children, isActive, onClick }) => {
  return (
    <div>
      <button className={`accordion ${isActive ? 'active' : ''}`} onClick={onClick}>
        {title}
      </button>
      <div className="panel" style={{ maxHeight: isActive ? '200px' : '0' }}>
        {children}
      </div>
    </div>
  );
};

export default AccordionItem;
