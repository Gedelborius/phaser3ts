console.log('Hello from index.ts');
import 'phaser'; // именно так

const config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: {
        create: create,
    }
};

let text;
const game = new Phaser.Game(config);

function create()
{
    //  Implicit values
    const config1 = {
        x: 100,
        y: 100,
        text: 'Text\nGame Object\nCreated from config',
        style: {
            fontSize: '64px',
            fontFamily: 'Arial',
            color: '#ffffff',
            align: 'center',
            backgroundColor: '#ff00ff',
            shadow: {
                color: '#000000',
                fill: true,
                offsetX: 2,
                offsetY: 2,
                blur: 8
            }
        }
    };

    this.make.text(config1);
}
