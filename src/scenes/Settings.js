import { Scene } from 'phaser';  

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

        this.load.audio('sound', 'test.ogg');

        this.add.image(512, 384, 'bg');
    }

    create ()
    {
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

        const testAudioLevel = this.add.text(500, 200, 'Test Audio', {// change this to an icon er somethin later
            fontFamily: 'Inknut Antiqua', fontSize: 40, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setInteractive().setOrigin(0.5);

        let sound = this.sound.add('sound');
        sound.play({loop: false });

        let slider = this.rexUI.add.slider({
            x: 500,
            y: 250,
            width: 300,
            height: 30,
            orientation: 'x',

            track: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_DARK),
            indicator: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_PRIMARY),
            thumb: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_PRIMARY),

            input: 'click', // 'drag'|'click'
            easeValue: { duration: 150 },

            value: 1, // Default value

            valuechangeCallback: function(value){
                sound.volume = value; // set volume between 0 - 1
                testAudio.volume = value;
            },

        }).layout();

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
        
        testAudioLevel.on('pointerdown', () => {
            testAudio.play();
        });




        
    }

    update ()
    {
        //  Update logic here
        
    }
}
