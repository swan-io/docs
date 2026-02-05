import React from 'react';
import SidebarAutoScroll from '../components/SidebarAutoScroll';
import MermaidAnchorFix from '../components/MermaidAnchorFix';

export default function Root({ children }) {
  return (
    <>
      {children}
      <SidebarAutoScroll />
      <MermaidAnchorFix />
    </>
  );
}