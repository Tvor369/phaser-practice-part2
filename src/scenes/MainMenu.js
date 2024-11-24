import { Scene } from 'phaser';
const data = { username: 'GravyTrain369' };  

export class MainMenu extends Scene
{
    constructor ()
    {
        super('MainMenu');
    }

    init ()
    {
        //  We loaded this image in our Boot Scene, so we can continue to display it here
        this.add.image(512, 384, 'bg');
    }

    create ()
    {
        this.add.image(350, 230, 'Macbeth');

        this.add.image(770, 320, 'crown');

        const dagger = this.add.image(170, 1000, 'dagger').setOrigin(0.5);// Active but off screen


    // Grab the username from the data object to displayed in top right corner
        const username = data.username;

        this.add.text(750, 100, username, {
            fontFamily: 'Inknut Antiqua', fontSize: 40, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'right'
        }).setOrigin(0.5);


    // The selectable menu objects
        const newGame = this.add.text(400, 330, 'New Game', {
            fontFamily: 'Inknut Antiqua', fontSize: 40, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'left'
        }).setInteractive().setOrigin(0.5);

        const loadGame = this.add.text(402, 390, 'Load Game', {
            fontFamily: 'Inknut Antiqua', fontSize: 40, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'left'
        }).setInteractive().setOrigin(0.5);

        const settings = this.add.text(373, 450, 'Settings', {
            fontFamily: 'Inknut Antiqua', fontSize: 40, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'left'
        }).setInteractive().setOrigin(0.5);

        const credits = this.add.text(900, 730, 'Credits', {
            fontFamily: 'Inknut Antiqua', fontSize: 20, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'right'
        }).setInteractive().setOrigin(0.5);


    // menu interactions
        newGame.on('pointerover', () => {
            newGame.setColor('#ff0');
            dagger.x = newGame.x - 170;
            dagger.y = newGame.y;
        })
        newGame.on('pointerout', () => {
            newGame.setColor('#fff');
            dagger.y = 1000;//get that shit off screen
        })
        newGame.on('pointerdown', () => {
            alert('newGame clicked');
        })

        loadGame.on('pointerover', () => {
            loadGame.setColor('#ff0');
            dagger.x = loadGame.x - 170;
            dagger.y = loadGame.y;
        })
        loadGame.on('pointerout', () => {
            loadGame.setColor('#fff');
            dagger.y = 1000;
        })
        loadGame.on('pointerdown', () => {
            alert('loadGame clicked');
        })

        settings.on('pointerover', () => {
            settings.setColor('#ff0');
            dagger.x = newGame.x - 170;//line up better this way some reason
            dagger.y = settings.y;
        })
        settings.on('pointerout', () => {
            settings.setColor('#fff');
            dagger.y = 1000;
        })
        settings.on('pointerdown', () => {
            this.scene.start('Settings')
        })

        credits.on('pointerover', () => {
            credits.setColor('#ff0');
        })
        credits.on('pointerout', () => {
            credits.setColor('#fff');
        })
        credits.on('pointerdown', () => {
            alert('credis clicked');
        })

        // this.input.once('pointerdown', () => {

        //     this.scene.start('Game');

        // });
    }
}
