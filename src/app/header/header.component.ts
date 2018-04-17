import { Component, OnInit } from '@angular/core';

import { Howl } from 'howler'

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: [
        './header.component.css'
    ]
})

export class HeaderComponent implements OnInit {
    player: Howl;

    constructor() { }

    ngOnInit() { 
        
    }
}