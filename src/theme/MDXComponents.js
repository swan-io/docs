import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { 
  Req, 
  Opt, 
  Cnd, 
  Supported, 
  Unsupported, 
  Yes, 
  No, 
  FieldRequirementsLegend,
  SupportStatusLegend
} from '@site/src/components/FieldRequirements';
import FlowMap from '@site/src/components/FlowMap';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Swan custom components
  Req,
  Opt,
  Cnd,
  Supported,
  Unsupported,
  Yes,
  No,
  FieldRequirementsLegend,
  SupportStatusLegend,
  Tabs,
  TabItem,
  FlowMap,
};