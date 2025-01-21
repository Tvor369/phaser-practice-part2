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

        this.optionsTitle = this.add.text(-50, -160, 'Options', { fontSize: '24px', fill: '#fff' });

        this.closeButton = this.makeCloseButton(120,-180).setInteractive();


        container.add(this.optionsBg);
        container.add(this.optionsTitle);
        container.add(this.closeButton);


        this.closeButton.on('pointerdown', () => {
            this.optionsModal.setVisible(false);
        });

        return container;
    }

    makeCloseButton(x,y){
        var closeButton = this.add.container(x, y);
        this.buttonBg = this.rexUI.add.roundRectangle(0, 0, 70, 38, 10, 0x3B2823);
        this.buttonBg.setStrokeStyle(3, 0x674F49);
        this.buttonText = this.add.text(-20, -5, 'Close', { fontSize: '14px', fill: '#fff' });

        closeButton.add(this.buttonBg);
        closeButton.add(this.buttonText);



        return closeButton;
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
