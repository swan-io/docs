import React from 'react';
import SidebarAutoScroll from '../components/SidebarAutoScroll';

export default function Root({ children }) {
  return (
    <>
      {children}
      <SidebarAutoScroll />
    </>
  );
}