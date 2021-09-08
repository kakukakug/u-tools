import {
  createStyle,
  styleTextFormat,
} from "../../../src/01_entity/models/flex_style";

describe("src/01_entity/models/flex_style", () => {
  describe("createStyle", () => {
    const mockStylesProp = {
      flex: "1",
      flexGrow: "1",
      flexShrink: "1",
      flexBasis: "1",
      text: "test",
      justifyContents: "center",
    };
    it(`style が生成される`, () => {
      const style = createStyle(mockStylesProp);
      expect(style).toEqual({
        flex: 1,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 1,
        text: "test",
        justifyContents: "center",
      });
    });
  });
  describe("styleTextFormat", () => {
    const mockStylesProp = {
      flex: "1",
      justifyContents: "center",
    };
    it(`style を出力用に整形する`, () => {
      const style = createStyle(mockStylesProp);
      const styleText = styleTextFormat(style);

      expect(styleText).toEqual(`    flex: 1,
    justifyContents: "center",
`);
    });
  });
});
