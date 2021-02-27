class Color {
  constructor(name = "colorName", hex = "#ff00ff", id) {
    this.name = name;
    this.hex = hex;
    this.id = id || Math.floor(Math.random() * 10000);
  }
}

export const colors = [
  new Color("Test1"),
  new Color("Test2"),
  new Color("Test3"),
  new Color("Test4"),
  new Color("Test5"),
  new Color("Test6"),
];

export const testPaletteColors = [colors[0], colors[1], colors[2]];
