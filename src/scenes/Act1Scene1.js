import { Scene } from 'phaser';
import { Game } from './Game';

export class Act1Scene1 extends Game
{
    constructor ()
    {
        super('Act1Scene1');
    }

    init ()
    {

    }

    create ()
    {
        this.text = this.add.text(100, 100, 'Act 1 Scene 1', { fontSize: 40 });
        
        this.initializeOptions();
    }

    update ()
    {

    }

}