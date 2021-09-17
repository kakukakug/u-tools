import React from "react";
import { render } from "@testing-library/react-native";

import { ShadowStyleScreen } from "../../../../src/04_external/components/05_pages/ShadowStyleScreen";

describe("ShadowStyleScreen", () => {
  it(`ShadowStyleScreenを描写`, () => {
    const component = render(<ShadowStyleScreen />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
