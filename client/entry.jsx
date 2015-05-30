'use strict';

import React from 'react';
import Index from './pages/Index';
import jss from 'jss';
import JSSVendorPrefixer from 'jss-vendor-prefixer';
import JSSPx from 'jss-px';
import JSSNested from 'jss-nested';
import JSSCamelCase from 'jss-camel-case';

jss.use(JSSVendorPrefixer);
jss.use(JSSPx);
jss.use(JSSNested);
jss.use(JSSCamelCase);

React.render(<Index />, document.body);
