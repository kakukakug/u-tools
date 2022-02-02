import React from "react";
import { render } from "test-utils";

import { ShadowStyleScreen } from "../../../../src/04_external/components/05_pages/ShadowStyleScreen";

describe("ShadowStyleScreen", () => {
  it(`ShadowStyleScreenを描写`, () => {
    const component = render(<ShadowStyleScreen />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
