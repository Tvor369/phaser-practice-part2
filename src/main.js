// import config from './Config/config';
// import { Boot } from './scenes/Boot';
// //import { Game } from './scenes/Game';
// import { GameOver } from './scenes/GameOver';
// import { MainMenu } from './scenes/MainMenu';
// import { Preloader } from './scenes/Preloader';
// import { Leaderboard } from './scenes/Leaderboard';
// import { Settings } from './scenes/Settings';
// import AudioController from './AudioController';

// //import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';//add ui plugin

// class Game extends Phaser.Game {
//     constructor () {
//       super(config);
//       const audioController = new AudioController();
//       this.globals = { audioController, bgMusic: null };
//         this.scene.add('Boot', Boot);
//         this.scene.add('Game', Game);
//         this.scene.add('GameOver', GameOver);
//         this.scene.add('MainMenu', MainMenu);
//         this.scene.add('Preloader', Preloader);
//         this.scene.add('Leaderboard', Leaderboard);
//         this.scene.add('Settings', Settings);
//         this.scene.start('Boot');
      
//     }
// }

// //  Find out more information about the Game Config at:
// //  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig




// //export default new Phaser.Game(config);




// window.game = new Game();




/* ^ demo way, below our way*/






import { Boot } from './scenes/Boot';
//import { Game } from './scenes/Game';
import { GameOver } from './scenes/GameOver';
import { MainMenu } from './scenes/MainMenu';
import { Preloader } from './scenes/Preloader';
import { Leaderboard } from './scenes/Leaderboard';
import { Settings } from './scenes/Settings';
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';
import AudioController from './AudioController';

// // Call completeLogin when the page loads to handle email-based login
// window.onload = () => {
//     completeLogin();
// };
const audioController = new AudioController();

// Phaser Game Configuration
const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    plugins: {
        scene: [
            {
                key: 'rexUI',
                plugin: RexUIPlugin,
                mapping: 'rexUI'
            }
        ]
    },
    scene: [
        Boot,
        Preloader,
        MainMenu,
        //Game,
        GameOver,
        Leaderboard,
        Settings
    ],
    // globals: [{
    //     audioController : AudioController,
    //     bgMusic: null
    // }
    // ]
};

 



class Project extends Phaser.Game {
  constructor () {
    super(config);
    const audioController = new AudioController();
    this.globals = { audioController, bgMusic: null };
  }
}


export default new Project();


//export default new Phaser.Game(config);
