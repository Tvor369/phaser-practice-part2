import { Game, Scene } from 'phaser';  

// Color pallet for sliders
const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;

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
        this.add.image(512, 384, 'bg');

        this.load.audio('testSFX', 'testSFX.ogg');//placeholder SFX

        this.load.setPath('assets/ui');
        this.load.image('checkedBox', 'checkedBox.png');
        this.load.image('uncheckedBox', 'uncheckedBox.png');


    }

    create ()
    {
    //  Menu title (Settings)
        this.add.text(500, 100, 'Settings', {// Title of the settings menu
            fontFamily: 'Inknut Antiqua', fontSize: 60, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        const closeOut = this.add.text(50, 50, 'X', {// temp X button to close the settings menu
            fontFamily: 'Inknut Antiqua', fontSize: 40, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'right'
        }).setInteractive().setOrigin(0.5);

    //  Load the SFX
        const testSFX = this.sound.add('testSFX');

    //  SFX volume slider label
        const sfxLabel = this.add.text(500, 260, 'SFX Volume', {
            fontFamily: 'Inknut Antiqua', fontSize: 30, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

    //  Add a slider for the SFX volume
        const numberBarSFX = this.rexUI.add.numberBar({
            x: 500,
            y: 300,
            width: 300, // Fixed width

            background: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_DARK),

            //icon: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_LIGHT),//change to a speaker icon

            

            slider: {
                // width: 120, // Fixed width
                track: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_PRIMARY),
                indicator: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_LIGHT),
                input: 'click',
            },

            text: this.add.text(0, 0, '').setFixedSize(35, 0),

            space: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10,

                icon: 10,
                slider: 10,
            },

            value : 0.75,//default volume

            valuechangeCallback: function (value, oldValue, numberBar) {
                numberBar.text = Math.round(Phaser.Math.Linear(0, 100, value));
                //  Change the volume of the SFX
                //testSFX.volume = value;
                
                Game.volume = value;
                //testSFX.volume = value;
                //testSFX.play({loop: false, volume: Game.volume});
            },
        })
        .layout();

        numberBarSFX.setValue(75, 0, 100);

        if(true)//have a check for is muted or not
        {
            this.add.image(500, 500, 'checkedBox').setOrigin(0.5);
        }
        else
        {
            this.add.image(500, 500, 'uncheckedBox').setOrigin(0.5);
        }

        // play button for SFX
        const playSFX = this.add.text(500, 350, 'Play SFX', {
            fontFamily: 'Inknut Antiqua', fontSize: 30, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setInteractive().setOrigin(0.5);

        playSFX.on('pointerover', () => {
            playSFX.setColor('#ff0');
        })
        playSFX.on('pointerout', () => {
            playSFX.setColor('#fff');
        })
        playSFX.on('pointerdown', () => {
            testSFX.play({loop: false, volume: Game.volume});
        });


    //  Add a hover effect to the closeOut button
        closeOut.on('pointerover', () => {
            closeOut.setColor('#ff0');
        })
        closeOut.on('pointerout', () => {
            closeOut.setColor('#fff');
        })
        closeOut.on('pointerdown', () => {//Return to main menu
            this.scene.start('MainMenu');
        });

        
        

        



        
    }

    update ()
    {
        //  Update logic here
        
    }
}
