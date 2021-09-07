import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import { FontFamilyItem } from "../../../../src/04_external/components/01_atoms/FontFamilyItem";
import { Colors } from "../../../../src/04_external/styles/Colors";

describe("FontFamilyItem", () => {
  const mockOnPress = jest.fn();
  const mockName = "IonIcons";
  it(`FontFamilyItemを描写 activeの場合`, () => {
    const component = render(
      <FontFamilyItem
        name={mockName}
        onPress={mockOnPress}
        selectFamily={"IonIcons"}
      />
    );

    const touchable = component.getByTestId("fontFamilyItem");
    expect(touchable).toHaveStyle({ backgroundColor: Colors.primary });

    const name = component.getByText(mockName);
    expect(name).toBeTruthy();
    fireEvent.press(name);

    expect(mockOnPress).toBeCalled();
    expect(component.toJSON()).toMatchSnapshot();
  });
  it(`FontFamilyItemを描写 active ではない場合`, () => {
    const component = render(
      <FontFamilyItem
        name={mockName}
        onPress={mockOnPress}
        selectFamily={"test"}
      />
    );

    const touchable = component.getByTestId("fontFamilyItem");
    expect(touchable).toHaveStyle({ backgroundColor: Colors.surface });

    expect(component.toJSON()).toMatchSnapshot();
  });
});
