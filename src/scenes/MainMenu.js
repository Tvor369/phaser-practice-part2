import { Scene } from 'phaser';
//data = { username: 'GravyTrain369' };  

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


        this.add.text(750, 100, 'GravyTrain369', {
            fontFamily: 'Inknut Antiqua', fontSize: 40, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'right'
        }).setOrigin(0.5);


        this.add.text(400, 330, 'New Game', {
            fontFamily: 'Inknut Antiqua', fontSize: 40, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'left'
        }).setOrigin(0.5);

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

        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });
    }
}
