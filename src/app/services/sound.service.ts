import { Howl } from 'howler';
import { Injectable } from '@angular/core';

@Injectable()
export class SoundService {

    constructor() { }

    public playSelect(): void{
        new Howl({
            src: ['assets/sounds/select.wav'],
            loop: false,
            volume: 1
        }).play();
    }
}