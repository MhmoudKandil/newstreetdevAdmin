import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { DropdownModule, ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Modals } from '../ui/components/modals/modals.component';


import { routing }       from './tables.routing';
import { Tables } from './tables.component';


import { BasicTables } from './components/basicTables/basicTables.component';
import { SmartTables } from './components/smartTables/smartTables.component';
import { NewComponent} from './components/basicTables/videodetails.component';
import { QADashboard } from './components/basicTables/qaDashboard.component';

import { Ng2SmartTableModule } from 'ng2-smart-table'; 	
import { BasicTablesService } from './components/basicTables/basicTables.service';
import { ResponsiveTable } from './components/basicTables/components/responsiveTable';
import { StripedTable } from './components/basicTables/components/stripedTable';
import { BorderedTable } from './components/basicTables/components/borderedTable';
import { HoverTable } from './components/basicTables/components/hoverTable';
import { CondensedTable } from './components/basicTables/components/condensedTable';
import { ContextualTable } from './components/basicTables/components/contextualTable';

//import { RaisedButtons} from "../ui/components/buttons/components/raisedButtons";
//import { Modals } from '../ui/components/modals/modals.component';

import { SmartTablesService } from './components/smartTables/smartTables.service';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule,
    routing,
	ModalModule
  ],
  declarations: [
    Tables,
    BasicTables,
	QADashboard,
    SmartTables,
    HoverTable,
    BorderedTable,
    CondensedTable,
    StripedTable,
    ContextualTable,
    ResponsiveTable,
	//RaisedButtons,
	Modals,
	NewComponent,
	QADashboard
  ],
  providers: [
    BasicTablesService,
    SmartTablesService
  ]
})
export default class TablesModule {}
