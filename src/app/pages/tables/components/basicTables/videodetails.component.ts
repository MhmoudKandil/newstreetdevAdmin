import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs';

import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { BasicTablesService, videostate, video } from './basicTables.service';
import { BaImageLoaderService, BaThemePreloader, BaThemeSpinner } from '../../../../theme/services';
//import { BaImageLoaderService, BaThemePreloader, BaThemeSpinner } from '../../../../theme/services';
import { TooltipModule } from 'ng2-tooltip'


@Component({
  selector: 'new',
  encapsulation: ViewEncapsulation.None,
  template: require('./videodetails.html'),
  providers: [BasicTablesService]
})
export class NewComponent implements OnInit {
  @ViewChild('lgModal') lgModal;
  @ViewChild('analysisModal') analysisModal;
  @ViewChild('qareviewModal') qareviewModal


  videoID: string;
  title: string;
  selectedvideo: video;
  requestComment: string;
  videoneedAttention: boolean;
  
  qareviewComment: string;
  videometadata: string;


  private subscription: Subscription;

  constructor(
    private service: BasicTablesService,
    private route: ActivatedRoute,
    private location: Location,
    private _spinner: BaThemeSpinner) {
    this.requestComment = "";
    this.qareviewComment = "";
    this.videoneedAttention = false;
  }
  ngOnInit() {
    // subscribe to router event
    //    this
    this.subscription = this.route.params.subscribe(
      (param: any) => {
        this.videoID = param['id'];
        this.service.getVideo(this.videoID).then(retvideo => this.selectedvideo = retvideo);
        //this.service.orderInDepthOrder(this.videoID, "HelloWorld").then(retvideo=> this.selectedvideo = retvideo);
      });

  }
  OrderInDepthAnalysis() {
    this._spinner.show();
    this.service.orderInDepthOrder(this.selectedvideo,this.requestComment).then(retvideo =>{ 
      this.selectedvideo = retvideo; 
      this.requestComment = ""; 
      this._spinner.hide();
    });

    this.analysisModal.hide();
  }

  reviewVideo(){
    this._spinner.show();
    this.service.reviewVideo(this.selectedvideo, this.qareviewComment, this.videoneedAttention).then(retvideo => {
      this.selectedvideo = retvideo; 
      this.qareviewComment = "";
      this._spinner.hide();
    });
    this.qareviewModal.hide();
  }


  showDialog() {

    this.videometadata = this.selectedvideo.videoMetaData;
    this.lgModal.show();
  }

  showOrderInDepthAnalysisDialog() {
    this.analysisModal.show();
  }

  showQAReviewDialog() {
    this.qareviewModal.show()
  }






}