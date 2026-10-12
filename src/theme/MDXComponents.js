import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { 
  Req, 
  Opt, 
  Cnd, 
  NA, 
  Supported, 
  Unsupported, 
  Yes, 
  No, 
  FieldRequirementsLegend, 
  SupportStatusLegend 
} from '@site/src/components/FieldRequirements';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Swan custom components
  Req,
  Opt,
  Cnd,
  NA,
  Supported,
  Unsupported,
  Yes,
  No,
  FieldRequirementsLegend,
  SupportStatusLegend,
  Tabs,
  TabItem,
};