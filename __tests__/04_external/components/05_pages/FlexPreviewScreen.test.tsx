import React from "react";
import { render } from "@testing-library/react-native";

import { PreviewComponent } from "../../../../src/04_external/components/05_pages/FlexPreviewScreen/PreviewComponent";
import { SettingComponent } from "../../../../src/04_external/components/05_pages/FlexPreviewScreen/SettingComponent";

describe("PreviewComponent", () => {
  it(`PreviewComponentを描写`, () => {
    const component = render(
      <PreviewComponent
        flexDirection={"test"}
        justifyContent={"test"}
        alignItems={"test"}
        flexWrap={"test"}
        alignContent={"test"}
        flex={"test"}
        flexGrow={"test"}
        flexShrink={"test"}
        flexBasis={"test"}
        alignSelf={"test"}
        text={"test"}
      />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
describe("SettingComponent", () => {
  it(`SettingComponentを描写`, () => {
    const mockSetState = jest.fn;
    const component = render(
      <SettingComponent
        flexDirection={"test"}
        justifyContent={"test"}
        alignItems={"test"}
        flexWrap={"test"}
        alignContent={"test"}
        flex={"test"}
        flexGrow={"test"}
        flexShrink={"test"}
        flexBasis={"test"}
        alignSelf={"test"}
        text={"test"}
        setFlexDirection={mockSetState}
        setJustifyContent={mockSetState}
        setAlignItems={mockSetState}
        setFlexWrap={mockSetState}
        setAlignContent={mockSetState}
        setFlex={mockSetState}
        setFlexGrow={mockSetState}
        setFlexShrink={mockSetState}
        setFlexBasis={mockSetState}
        setAlignSelf={mockSetState}
        setText={mockSetState}
      />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
