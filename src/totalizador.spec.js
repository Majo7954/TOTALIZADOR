import calcularprecio from "./totalizador.js";

describe("Totalizador", () => {
  it("Devolver cantidad ingresada", () => {
    expect(calcularprecio(2)).toEqual(2);
  });
});