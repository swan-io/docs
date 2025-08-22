import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import BlogPostItems from '@theme/BlogPostItems';
import ComingUp from '../../../changelog/coming-up.mdx';
import MDXContent from '@theme/MDXContent';
import { usePluginData } from '@docusaurus/useGlobalData';

const PreviewBadge = ({ status = 'preview' }) => {
  const config = {
    'preview': { label: 'PREVIEW', class: 'preview' },
    'beta': { label: 'BETA', class: 'beta' }
  }[status] || { label: 'PREVIEW', class: 'preview' };
  
  return <span className={`preview-badge ${config.class}`}>{config.label}</span>;
};

const ChangelogTabs = ({ items, metadata }) => {
  const [activeTab, setActiveTab] = useState('latest');
  
  // Get preview features by requiring them directly at build time
  const previewFeatures = (() => {
    try {
      const previewContext = require.context('../../../docs/preview', false, /\.mdx$/);
      
      return previewContext.keys()
        .filter(key => !key.includes('index.mdx') && !key.includes('/partials/'))
        .map(key => {
          const { frontMatter = {} } = previewContext(key);
          const filename = key.replace('./', '').replace('.mdx', '');
          
          return {
            title: frontMatter.title,
            status: frontMatter.status || 'preview',
            timeline: frontMatter.timeline,
            description: frontMatter.description,
            link: `/preview/${filename}`
          };
        })
        .filter(feature => feature.title);
    } catch {
      return [];
    }
  })();
  
  // Remove preview articles from regular changelog items
  const regularItems = items.filter(item => 
    item.content?.frontMatter?.type !== 'preview'
  );
  
  return (
    <div className="changelog-container">
      <div className="changelog-tabs">
        <button
          className={`changelog-tab ${activeTab === 'latest' ? 'active' : ''}`}
          onClick={() => setActiveTab('latest')}
        >
          📋 Changelog
        </button>
        <button
          className={`changelog-tab ${activeTab === 'preview' ? 'active' : ''}`}
          onClick={() => setActiveTab('preview')}
        >
          📃 Feature Preview
        </button>
      </div>

      <div className="changelog-content">
        {activeTab === 'latest' ? (
          <div className="latest-updates">
            <MDXContent><ComingUp /></MDXContent>
            <BlogPostItems items={regularItems} />
            
            {metadata?.totalPages > 1 && (
              <div className="changelog-view-all">
                <Link to="/changelog/page/2" className="btn-view-all">
                  View all releases
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="preview-features">
            <div className="preview-features-list">
              {previewFeatures.length > 0 ? (
                previewFeatures.map((feature, index) => (
                  <article 
                    key={index} 
                    className="preview-entry"
                    onClick={() => window.location.href = feature.link}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="preview-header">
                      <h3>
                        <Link to={feature.link} className="preview-title">
                          {feature.title}
                        </Link>
                        <PreviewBadge status={feature.status} />
                      </h3>
                      <div className="preview-meta">
                        <strong>ETA: </strong>{feature.timeline}
                      </div>
                    </div>
                    <div className="preview-content">
                      <p>{feature.description}</p>
                      <Link to={feature.link} className="preview-read-more">
                        Read full specification →
                      </Link>
                    </div>
                  </article>
                ))
              ) : (
                <div className="preview-placeholder">
                  <p>No preview features available at the moment.<br/>Check back soon!</p>
                  <Link to="https://swanio.notion.site/Swan-Public-Roadmap-385e4b2e91b3409786a6c8e885654a22" className="btn-secondary">
                    View full roadmap
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChangelogTabs;