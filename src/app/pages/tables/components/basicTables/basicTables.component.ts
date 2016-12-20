import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { TooltipModule } from 'ng2-tooltip'

import { BasicTablesService, videostate, video } from './basicTables.service';
import { BaImageLoaderService, BaThemePreloader, BaThemeSpinner } from '../../../../theme/services';
import { TruncatePipe } from './truncate';



@Component({
  selector: 'basic-tables',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./basicTables.scss')],
  template: require('./basicTables.html'),
  providers: [BasicTablesService]
})
export class BasicTables {
  @ViewChild('lgModal') lgModal;


  busy: Promise<any>;
  videolist: Array<video>;
  videometadata: string;

  showDialog(msg) {
    this.videometadata = msg;
    this.lgModal.show();
  }

  calculateScore(item) {
    item.score = this._service.calculateScore(10)
  }

  calculateScoreforSelectedEntries() {
    this._spinner.show();
    for (let entry of this.videolist.filter(book => (book.selected == true))) {
      this.calculateScore(entry)
    }
    this._loadData();
    setTimeout(() => { this._spinner.hide() }, 4000);
  }

  analyzeVideoforSelectedEntries() {

    this._spinner.show();
    for (let entry of this.videolist.filter(book => (book.selected == true))) {
      this.calculateScore(entry)
      entry.state = { stateID: 1, stateName: "Analysis In Progress" };
    }
    setTimeout(() => { this._spinner.hide() }, 4000);

  }


  getVideos() {
    //this.busy = this._service.getVideos().then(videos=>this.videolist = videos);	  
    //this.busy = this._service.getVideos();
    this._spinner.show();
    this.busy.then(videos => { this.videolist = videos; this._spinner.hide(); });
  }
  truncate(metadata) {
    return metadata.substring(0, 35) + "..."
  }


  private _loadData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 10000);
    });
  }

  constructor(private _service: BasicTablesService,
    private _spinner: BaThemeSpinner) {
    this.videometadata = "";
    this.busy = this._service.getVideos();
    BaThemePreloader.registerLoader(this.busy)
    BaThemePreloader.load().then((values) => {
      this._spinner.hide();
    });
    this.getVideos();
  }
}
