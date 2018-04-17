import { Howl } from 'howler';
import { Injectable } from '@angular/core';

@Injectable()
export class SoundService {

    private themePlayer: Howl;

    constructor() { }

    public playSelect(): void{
        new Howl({
            src: ['assets/sounds/select.wav'],
            loop: false,
            volume: 0.2
        }).play();
    }

    /**
     * 
     * 
     * @returns {boolean} is playing
     * @memberof SoundService
     */
    public playTheme():boolean{
        if(!this.themePlayer){
            this.themePlayer = new Howl({
                src: ['assets/sounds/theme.wav'],
                loop: true,
                volume: 0.5,
                html5: true
            });
        }

        if(this.themePlayer.playing()){
            this.themePlayer.pause();
        }else{
            this.themePlayer.play();
        }

        return this.themePlayer.playing();
    }
}