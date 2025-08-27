import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import BlogPostItems from '@theme/BlogPostItems';
import ComingUp from '../../../changelog/coming-up.mdx';
import PreviewInfo from '../../../docs/preview/partials/_preview-info.mdx';
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
  const [etaSort, setEtaSort] = useState('ascending');
  const [typeFilter, setTypeFilter] = useState('any');
  
  // Helper function to parse dd-mm-yyyy date format
  const parseDate = (dateString) => {
    if (!dateString) return null;
    const [day, month, year] = dateString.split('-');
    return new Date(year, month - 1, day);
  };

  // Helper function to check if date is in the future
  const isFutureDate = (dateString) => {
    const date = parseDate(dateString);
    if (!date) return true; // Show items without dates
    return date >= new Date();
  };
  
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
            chronology: frontMatter.chronology,
            description: frontMatter.description,
            link: `/preview/${filename}`
          };
        })
        .filter(feature => feature.title && isFutureDate(feature.chronology));
    } catch {
      return [];
    }
  })();

  // Filter and sort preview features
  const filteredAndSortedFeatures = (() => {
    let filtered = previewFeatures;

    // Apply type filter
    if (typeFilter !== 'any') {
      filtered = filtered.filter(feature => feature.status === typeFilter);
    }

    // Sort by chronology
    filtered.sort((a, b) => {
      const dateA = parseDate(a.chronology);
      const dateB = parseDate(b.chronology);
      
      // Handle items without dates (put them at the end)
      if (!dateA && !dateB) return 0;
      if (!dateA) return 1;
      if (!dateB) return -1;
      
      const comparison = dateA - dateB;
      return etaSort === 'ascending' ? comparison : -comparison;
    });

    return filtered;
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
            <MDXContent><PreviewInfo /></MDXContent>
            
            {/* Filter Controls */}
            <div className="preview-filters">
              <div className="filter-group">
                <label htmlFor="eta-sort" className="filter-label">ETA:</label>
                <select
                  id="eta-sort"
                  value={etaSort}
                  onChange={(e) => setEtaSort(e.target.value)}
                  className="filter-select"
                >
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
              
              <div className="filter-group">
                <label htmlFor="type-filter" className="filter-label">Type:</label>
                <select
                  id="type-filter"
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="filter-select"
                >
                  <option value="any">Any</option>
                  <option value="preview">Preview</option>
                  <option value="beta">Beta</option>
                </select>
              </div>
            </div>
            
            <div className="preview-features-list">
              {filteredAndSortedFeatures.length > 0 ? (
                filteredAndSortedFeatures.map((feature, index) => (
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
                  <p>No items match your current search parameters.<br/>Try adjusting the filters above.</p>
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