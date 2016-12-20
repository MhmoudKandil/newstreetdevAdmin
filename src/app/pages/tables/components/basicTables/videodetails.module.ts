import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { NewComponent } from './videodetails.component';
import { routing } from './new.routing';
import { video,videostate, BasicTablesService} from '../tables/components/basicTables/basicTables.service'

@NgModule({
  imports: [
    CommonModule,
    routing,
    video
  ],
  declarations: [
    NewComponent
  ],
  providers: [
    BasicTablesService
  ]
  
})
export default class NewModule {}