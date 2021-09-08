import { iconSearch } from "../../../src/01_entity/models/vector_icons";

describe("src/01_entity/models/vector_icons", () => {
  describe("iconSearch", () => {
    it(`family を指定してアイコンを取り出す`, () => {
      const familyName = "Octicons";
      const icons = iconSearch(familyName, "");
      expect(icons.length).toEqual(184);
    });
    it(`name を指定してアイコンを絞り込む`, () => {
      const familyName = "Octicons";
      const iconName = "star";
      const icons = iconSearch(familyName, iconName);
      expect(icons).toEqual(["star"]);
    });
  });
});
