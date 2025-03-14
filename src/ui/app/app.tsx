import React, {createElement} from 'react';
import {createRoot} from 'react-dom/client';

import * as style from './app.module.scss';

const MainApp = () => <div className={style.container}>Test</div>;

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(createElement(MainApp));