import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/interfaces';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Article;
  @Input() indice: number;

  constructor( private iab: InAppBrowser,
               private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  abrirNoticia() {

    console.log('Noticia', this.noticia.url);
    const browser = this.iab.create(this.noticia.url, '_system');

  }

}
