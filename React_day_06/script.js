import {createRoot} from 'react-dom/client'
import App  from '../app.js'
import AppCounter from '../components/AppCounter.js';

const root = createRoot(document.querySelector('#root'));

root.render(<AppCounter root={root} />)