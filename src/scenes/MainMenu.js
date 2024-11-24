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


        // Grab the username from the data object to displayed in top right corner
        const username = data.username;

        this.add.text(750, 100, username, {
            fontFamily: 'Inknut Antiqua', fontSize: 40, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'right'
        }).setOrigin(0.5);


        const newGame = this.add.text(400, 330, 'New Game', {
            fontFamily: 'Inknut Antiqua', fontSize: 40, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'left'
        }).setInteractive().setOrigin(0.5);
        newGame.on('pointerover', () => {
            newGame.setColor('#ff0');
        })
        newGame.on('pointerout', () => {
            newGame.setColor('#fff');
        })
        newGame.on('pointerdown', () => {
            alert('playButton clicked');
        })

        this.add.text(402, 390, 'Load Game', {
            fontFamily: 'Inknut Antiqua', fontSize: 40, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'left'
        }).setOrigin(0.5);

        this.add.text(373, 450, 'Settings', {
            fontFamily: 'Inknut Antiqua', fontSize: 40, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'left'
        }).setOrigin(0.5);

        // this.input.once('pointerdown', () => {

        //     this.scene.start('Game');

        // });
    }
}
