import React from 'react';

export default function Sidebar({ filteredCategory, handleProduct }) {
  return (
    <aside className='sidebar'>
      {filteredCategory.map((category) => (
        <button
          onClick={() => handleProduct(category.id)}
          key={category.id}
          className={'sidebar__button'}>
          {category.name}
        </button>
      ))}
    </aside>
  );
}
