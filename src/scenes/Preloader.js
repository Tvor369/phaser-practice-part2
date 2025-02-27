import { Scene } from 'phaser';

export class Preloader extends Scene
{
    constructor ()
    {
        super('Preloader');
    }

    init ()
    {
        //  We loaded this image in our Boot Scene, so we can display it here
        this.add.image(512, 384, 'bg');

        //  A simple progress bar. This is the outline of the bar.
        this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);

        //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
        const bar = this.add.rectangle(512-230, 384, 4, 28, 0xffffff);

        //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
        this.load.on('progress', (progress) => {

            //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
            bar.width = 4 + (460 * progress);

        });
    }

    preload ()
    {
        //  Load the assets for the game - Replace with your own assets
        this.load.setPath('assets');
        this.load.image('bg', 'background.png');
        this.load.image('Macbeth', 'macbethTitle.png');
        this.load.image('crown', 'crown.png');
        this.load.image('dagger', 'daggerSelector.png');
        //this.load.audio('testMusic', 'skeleton16.mp3');//placeholder music

        this.load.setPath('assets/audio');
        this.load.audio('testMusic', 'TownTheme.mp3');//placeholder bg music
        this.load.audio('skeleton', 'skeleton16.mp3');//placeholder music
        this.load.audio('swoosh', 'Swoosh.mp3');//placeholder music

        //ui assets
        this.load.setPath('assets/ui');
        this.load.image('backButton', 'backButton.png');
        this.load.image('checkedBox', 'checkedBox.png');
        this.load.image('optionsButton', 'optionsButton.png');
        this.load.image('playButton', 'playButton.png');
        this.load.image('uncheckedBox', 'uncheckedBox.png');
        
    }

    create ()
    {
        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, you can define global animations here, so we can use them in other scenes.

        // const testMusic = this.sound.add('testMusic');
        // testMusic.play({loop: true, volume: 1});
        // console.log(testMusic.isPlaying);

        //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
        this.scene.start('MainMenu');
    }

    testMethod()
    {
        console.log('test');
    }
}
