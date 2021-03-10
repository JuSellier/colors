class Palette {
  constructor(name, colors, description, tags) {
    this.name = name;
    this.colors = colors;
    this.description = description;
    this.tags = tags || "handpicked";
  }
}

export const testPaletteList = [
  new Palette("Orange Night", [
    { hex: "#FF8E2C" },
    { hex: "#0D075F" },
    { hex: "#1F2020" },
  ]),
  new Palette("Imperial Passion", [{ hex: "#EB3939" }, { hex: "#530B0E" }]),
  new Palette("Tropical Sea", [{ hex: "#1FE0C3" }, { hex: "#027DF7" }]),
  new Palette("Aloha", [
    { hex: "#0078FF" },
    { hex: "#00C6FF" },
    { hex: "#FBAD50" },
    { hex: "#DE5246" },
  ]),
  new Palette("Bittersweet", [
    { hex: "#FF6464" },
    { hex: "#2C1654" },
    { hex: "#FDBF50" },
  ]),
  new Palette("Vintage Brownie", [
    { hex: "#FDA769" },
    { hex: "#FEC868" },
    { hex: "#463C33" },
  ]),
  new Palette("Fruity Coral", [
    { hex: "#CF5797" },
    { hex: "#FF8364" },
    { hex: "#FFB677" },
  ]),
  new Palette("Purple Gold", [{ hex: "#572e6c" }, { hex: "#fdf862" }]),
  new Palette("Authentic Green", [
    { hex: "#24695c" },
    { hex: "#c18e60" },
    { hex: "#e1c5c1" },
  ]),
  new Palette("Colorful Bunch", [
    { hex: "#17D778" },
    { hex: "#FF3263" },
    { hex: "#59DADB" },
    { hex: "#F79E1B" },
    { hex: "#8B5EC7" },
  ]),
];
