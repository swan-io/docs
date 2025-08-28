import React from 'react';
import Layout from '@theme-original/Layout';
import { useLocation } from '@docusaurus/router';

export default function LayoutWrapper(props) {
  const location = useLocation();
  const isPreviewSection = location.pathname.includes('/preview/');

  return (
    <Layout {...props}>
      {isPreviewSection && (
        <div style={{
          backgroundColor: '#E0D9F0',
          border: '1px solid #c0b3e1',
          borderRadius: '6px',
          padding: '16px 20px',
          margin: '0 var(--ifm-spacing-horizontal)',
          marginBottom: '1.5rem',
          textAlign: 'center',
          fontSize: '14px',
          lineHeight: '1.5',
          color: '#4e3391',
          zIndex: 1
        }}>
          You are viewing early implementations that may change before release. Use them to prepare and provide feedback to our team. Check out <a href="https://swanio.notion.site/Swan-Public-Roadmap-385e4b2e91b3409786a6c8e885654a22" target="_blank" rel="noopener noreferrer" style={{color: '#1971c2', textDecoration: 'underline'}}>Swan's public roadmap</a> to see what else is in the works.
        </div>
      )}
      {props.children}
    </Layout>
  );
}