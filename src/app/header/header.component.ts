import { SoundService } from './../services/sound.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: [
        './header.component.css'
    ]
})

export class HeaderComponent implements OnInit {

    private isPlaying: boolean = false;

    constructor(private soundService: SoundService) { }

    ngOnInit() {
    }

    playTheme(): void {
        this.soundService.playTheme();
        this.isPlaying = !this.isPlaying;
    }
}