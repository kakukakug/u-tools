import React from "react";
import { render } from "@testing-library/react-native";

import { PageTitle } from "../../../../src/04_external/components/01_atoms/PageTitle";

describe("src/04_external/components/01_atoms/PageTitle", () => {
  it(`IconItemを描写`, () => {
    const mockTitle = "test";
    const component = render(<PageTitle title={mockTitle} />);

    const title = component.getByText(mockTitle);
    expect(title).toBeTruthy();

    expect(component.toJSON()).toMatchSnapshot();
  });
});
