import { testPaletteColors } from "./colors";

class Palette {
  constructor(name, colors, description, tags) {
    this.name = name;
    this.colors = colors;
    this.description = description || "Description";
    this.tags = tags || "handpicked";
  }
}

export const testPaletteList = [new Palette("Test", testPaletteColors)];
