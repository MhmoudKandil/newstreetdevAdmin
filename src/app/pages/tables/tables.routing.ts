import { Routes, RouterModule }  from '@angular/router';

import { Tables } from './tables.component';
import { BasicTables } from './components/basicTables/basicTables.component';
import { QADashboard} from './components/basicTables/qaDashboard.component';
import { NewComponent} from './components/basicTables/videodetails.component';
//import { SmartTables } from './components/smartTables/smartTables.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Tables,
    children: [
      { path: 'admindashboard', component: BasicTables },
      { path: 'qaadmindashboard', component: QADashboard},
	    { path: 'videodetails/:id', component: NewComponent}
     // { path: 'smarttables', component: SmartTables }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
