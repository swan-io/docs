import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import BlogPostItems from '@theme/BlogPostItems';
import ComingUp from '../../../changelog/coming-up.mdx';
import MDXContent from '@theme/MDXContent';

const PreviewBadge = ({ status = 'preview' }) => {
  const badgeConfig = {
    'preview': { label: 'PREVIEW', class: 'preview' },
    'coming-soon': { label: 'COMING SOON', class: 'coming-soon' },
    'early-access': { label: 'EARLY ACCESS', class: 'early-access' }
  };
  
  const config = badgeConfig[status] || badgeConfig['preview'];
  
  return (
    <span className={`preview-badge ${config.class}`}>
      {config.label}
    </span>
  );
};

const ChangelogTabs = ({ items, metadata }) => {
  const [activeTab, setActiveTab] = useState('latest');
  
  // Remove preview blog data - we'll link to docs instead
  const regularItems = items.filter(item => 
    item.content?.frontMatter?.type !== 'preview'
  );
  
  // Hardcoded preview features that link to docs/preview/
  const previewFeatures = [
    {
      title: 'Verification of Payee',
      status: 'preview',
      timeline: 'October 8, 2025',
      category: 'Compliance',
      description: 'Checking beneficiary details against account holder information before initiating SEPA Credit Transfers and Instant SEPA Credit Transfers.',
      link: '/preview/verification-of-payee'
    }
    // Add more preview features here as needed
  ];
  
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
            <MDXContent>
              <ComingUp />
            </MDXContent>
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
                        {feature.timeline} • {feature.category}
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