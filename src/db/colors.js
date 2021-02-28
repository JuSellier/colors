class Color {
  constructor(hex = "#ff00ff", id) {
    this.hex = hex;
    this.id = id || Math.floor(Math.random() * 10000);
  }
}

export const colors = [
  new Color("#f130fa"),
  new Color("#f130fa"),
  new Color("#f130fa"),
];

export const testPaletteColors = [colors[0], colors[1], colors[2]];
