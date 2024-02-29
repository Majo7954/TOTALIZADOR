import calcularprecio from "./totalizador.js";

describe("Totalizador", () => {
  it("Devolver cantidad ingresada", () => {
    expect(calcularprecio(2,1)).toEqual(2);
  });

  it("Devolver precio ingresado", () => {
    expect(calcularprecio(1,2)).toEqual(2);
  });

  it("Devolver precio neto", () => {
    expect(calcularprecio(2,5)).toEqual(10);
  });
  it("Si el estado es CA si aplica un impuesto de 8.25%", () => {
    expect(calcularprecio(20,3,"CA")).toEqual(64.95);
  });
});