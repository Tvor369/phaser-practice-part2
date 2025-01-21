import { Scene } from 'phaser';

var optionsActive = false;

export class Game extends Phaser.Scene
{
    constructor (key)
    {
        //super('Game');
        super(key);
    }

    init ()
    {
        
    }

    create ()
    {
        
    }

    initializeOptions(){
        this.makeOptionsButton();
        this.optionsModal = this.makeOptionsModal();
        this.optionsModal.setVisible(false);
    }

    // Makes a button for opening the options menu modal in the corner of the screen
    makeOptionsButton(){
        optionsActive = false;
        

        this.optionsButton = this.add.image(1000, 24, 'optionsButton').setInteractive();
        this.escapeKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);

        //this.input.keyboard.on('keydown_W', this.yourFunction, this);
        this.optionsButton.on('pointerdown', () => {
            //optionsActive = !optionsActive;
            this.optionsModal.setVisible(true);
        });
        this.optionsButton.on('pointerover', () => {
            this.optionsButton.setScale(1.1);
        });
        this.optionsButton.on('pointerout', () => {
            this.optionsButton.setScale(1);
        });
    }

    makeOptionsModal(){
        //var rect = scene.add.rexRoundRectangle(x, y, width, height, radius, fillColor, fillAlpha);

        var container = this.add.container(512, 400);
        this.optionsBg = this.rexUI.add.roundRectangle(0, 0, 340, 440, 20, 0x4E342E);
        this.optionsBg.setStrokeStyle(3, 0x674F49);

        this.optionsTitle = this.add.text(0, -180, 'Options', { fontSize: '24px', fill: '#fff' });



        container.add(this.optionsBg);

        return container;
    }



    update ()
    {
        // //  Update logic here
        // if (Phaser.Input.Keyboard.JustDown(this.escapeKey) || optionsActive === true) {
        //     this.optionsActive = !this.optionsActive;
        //     this.scene.start('MainMenu');

        //     //pause game
        // }
        
    }
}
