import { Scene } from 'phaser';  

export class Settings extends Scene
{
    constructor ()
    {
        super('Settings');
    }

    preload ()
    {
        //  Load the assets for the game - Replace with your own assets
        this.load.setPath('assets');

        this.load.image('bg', 'background.png');
    }

    init ()
    {
        //  We loaded this image in our Boot Scene, so we can continue to display it here
        this.add.image(512, 384, 'bg');
    }

    create ()
    {
        this.add.text(500, 500, 'Settings', {
            fontFamily: 'Inknut Antiqua', fontSize: 60, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        const closeOut = this.add.text(50, 50, 'X', {// X button to close the settings menu
            fontFamily: 'Inknut Antiqua', fontSize: 40, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'right'
        }).setInteractive().setOrigin(0.5);

        closeOut.on('pointerdown', () => {
            this.scene.start('MainMenu');
        });
        

        this.input.once('pointerdown', () => {

        this.scene.start('Game');

        });
    }
}
