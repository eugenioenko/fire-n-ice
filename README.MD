# Fire'n Ice (Solomon's Key 2)

> Fire'n Ice is a remake of the classic NES game, bringing nostalgia to modern browsers while introducing updated features and gameplay mechanics.

## [Online Demo Here](https://eugenioenko.github.io/fire-n-ice/)

[![Screenshot](https://eugenioenko.github.io/fire-n-ice/images/thumbnail.png)](https://eugenioenko.github.io/fire-n-ice/)

## Table of Contents

- [Objective](#objective)
- [Game Rules](#game-rules)
- [Controls](#controls)
- [Getting Started](#getting-started)
- [Technologies](#technologies)
- [Level Editor](#level-editor)
- [Contributions](#contributions)
- [Credits](#credits)
- [License](#license)

## Objective

Your goal is to destroy all the fires on each level by colliding them with blocks of ice. Strategically navigate through obstacles and use your ice blocks to extinguish the flames!

## Game Rules

- The player can create blocks of ice only one level below their current position.
- The player can push only a single block of ice at a time.
- The player can climb only one level above their current position.
- The player can fall down without taking damage.
- The player cannot touch a fire.
- The player cannot create an ice block inside a fire.
- The player cannot move while pushing a block of ice.

## Controls

- **Left Arrow**: Move left
- **Right Arrow**: Move right
- **Down Arrow**: Create or destroy a block of ice
- **Enter**: Reload the current level

### [Play It Now Here](https://eugenioenko.github.io/fire-n-ice/)

## Getting Started

To run the game locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/eugenioenko/fire-n-ice.git
    cd fire-n-ice
    ```

2. Open the `index.html` file in your web browser to start playing.

## Technologies

Fire'n Ice is built using the following technologies:

- **HTML5**: For structuring the game interface.
- **CSS3**: For styling the game and ensuring a responsive design.
- **JavaScript**: For game logic and interactions.
- **Canvas API**: For rendering graphics and animations.

## Level Editor

A level editor is available for designing custom levels: [Level Editor](https://eugenioenko.github.io/fire-n-ice/editor.html). 

Once you’ve designed a level, you can add it to the game by updating the `/src/levels.js` file.

## Contributions

Contributions are welcome! If you want to help improve the game, please follow these steps:

1. Fork the repository.
2. Create a new feature branch: `git checkout -b feature/YourFeature`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to your branch: `git push origin feature/YourFeature`.
5. Submit a pull request explaining your changes.

Feel free to contribute by adding new levels, improving gameplay mechanics, or fixing bugs!

## Credits

- **Game Development**: Eugene Yakhnenko
- **Music Composition**: Margaret Nelson

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

