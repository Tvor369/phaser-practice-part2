import { Game, Scene } from 'phaser';  

// Color pallet for sliders
const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;

export class Settings extends Phaser.Scene
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




    }

    create ()
    {

        //music
        this.audioController = this.sys.game.globals.audioController;


        this.musicButton = this.add.image(200, 200, 'checkedBox');
        this.musicText = this.add.text(250, 190, 'Music Enabled', { fontSize: 24 });
    
        this.soundButton = this.add.image(200, 300, 'checkedBox');
        this.soundText = this.add.text(250, 290, 'Sound Enabled', { fontSize: 24 });
    
        this.musicButton.setInteractive();
        this.soundButton.setInteractive();

        this.musicButton.on('pointerdown', function () {
            this.audioController.musicOn = !this.audioController.musicOn;
            this.updateAudio();
          }.bind(this));
      
          this.soundButton.on('pointerdown', function () {
            this.audioController.soundOn = !this.audioController.soundOn;
            this.updateAudio();
          }.bind(this));


        this.backButton = this.add.image(50, 50, 'backButton').setInteractive();
        this.backButton.on('pointerover', () => {
            this.backButton.setScale(1.1);
        });
        this.backButton.on('pointerout', () => {
            this.backButton.setScale(1);
        });
        this.backButton.on('pointerdown', () => {
            this.scene.start('MainMenu');
        });




    //  Menu title (Settings)
        this.add.text(500, 100, 'Settings', {// Title of the settings menu
            fontFamily: 'Inknut Antiqua', fontSize: 60, color: '#ffffff',
            stroke: '#000000', strokeThickness: 2,
            align: 'center'
        }).setOrigin(0.5);

        // const closeOut = this.add.text(50, 50, 'X', {// temp X button to close the settings menu
        //     fontFamily: 'Inknut Antiqua', fontSize: 40, color: '#ffffff',
        //     stroke: '#000000', strokeThickness: 8,
        //     align: 'right'
        // }).setInteractive().setOrigin(0.5);


            //  Add a slider for the SFX volume
            const numberBarMusic = this.rexUI.add.numberBar({
                x: 700,
                y: 200,
                width: 300, // Fixed width
                background: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_DARK),
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
    
                //value: this.audioController.bgVolume*100,//default volume
    
                valuechangeCallback: function (value, oldValue, numberBarMusic) {
                    numberBarMusic.text = Math.round(Phaser.Math.Linear(0, 100, value));
                },
            })
            .layout();

            numberBarMusic.setValue(this.audioController.bgVolume*100, 0, 100);//need to convert volume to a percentage

            numberBarMusic.on('valuechange', function () {
                this.updateVolume(numberBarMusic.getValue())
            }.bind(this));
            
           


    //  Load the SFX
        const testSFX = this.sound.add('testSFX');


    //  Add a slider for the SFX volume
        const numberBarSFX = this.rexUI.add.numberBar({
            x: 700,
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

            //value : 0.75,//default volume

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

        numberBarSFX.on('valuechange', function () {
            this.updateVol(numberBarSFX.getValue())
        }.bind(this));

        // test SFX
        this.sound.add('swoosh');
        this.playButton = this.add.image(500, 400, 'playButton').setInteractive();
        this.playButtonText = this.add.text(200, 400, 'Play Audio Sample', { fontSize: 18 });
        this.playButton.on('pointerdown', () => {
            testSFX.play({loop: false, volume: Game.volume});
            this.playButton.setScale(.9);
        });
        this.playButton.on('pointerover', () => {
            this.playButton.setScale(1.1);
        });
        this.playButton.on('pointerout', () => {
            this.playButton.setScale(1);
        });
        this.playButton.on('pointerup', () => {
            this.playButton.setScale(1.1);
        });

        // play button for SFX
        // const playSFX = this.add.text(500, 350, 'Play SFX', {
        //     fontFamily: 'Inknut Antiqua', fontSize: 30, color: '#ffffff',
        //     stroke: '#000000', strokeThickness: 8,
        //     align: 'center'
        // }).setInteractive().setOrigin(0.5);

        // playSFX.on('pointerover', () => {
        //     playSFX.setColor('#ff0');
        // })
        // playSFX.on('pointerout', () => {
        //     playSFX.setColor('#fff');
        // })
        // playSFX.on('pointerdown', () => {
        //     testSFX.play({loop: false, volume: Game.volume});
        // });


    // Ensure that the check boxes are updated when the settings menu is opened
        this.updateAudio();
    }

    updateVol() {
        
    }


    updateVolume(value) {  
        this.audioController.bgVolume = value;
        this.sys.game.globals.bgMusic.setVolume(this.audioController.bgVolume);
    }


    updateAudio() {
        if (this.audioController.musicOn === false) {
          this.musicButton.setTexture('uncheckedBox');
        //   this.sys.game.globals.bgMusic.stop();
        this.sys.game.globals.bgMusic.pause();
          this.audioController.bgMusicPlaying = false;
          console.log(this.audioController.bgMusicPlaying);
        } else {
          this.musicButton.setTexture('checkedBox');
          if (this.audioController.bgMusicPlaying === false) {
            //this.sys.game.globals.bgMusic.play();
            this.sys.game.globals.bgMusic.resume();
            this.audioController.bgMusicPlaying = true;
            console.log(this.audioController.bgMusicPlaying);
          }
        }
    
        if (this.audioController.soundOn === false) {
          this.soundButton.setTexture('uncheckedBox');
        } else {
          this.soundButton.setTexture('checkedBox');
        }
      }

    update ()
    {

    }
}
