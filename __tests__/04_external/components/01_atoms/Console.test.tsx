import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Console } from "../../../../src/04_external/components/01_atoms/Console";

describe("Console", () => {
  const mockConsoleText = "test console";
  it(`Consoleを描写`, () => {
    const component = render(<Console consoleText={mockConsoleText} />);

    const output = component.getByDisplayValue(mockConsoleText);
    expect(output).toBeTruthy();

    expect(component.toJSON()).toMatchSnapshot();
  });
  it(`button をタップしたとき、consoleが閉じる`, async () => {
    const component = render(<Console consoleText={mockConsoleText} />);

    const output = component.getByDisplayValue(mockConsoleText);
    expect(output).toBeTruthy();

    const closeButton = component.getByText("close");
    fireEvent.press(closeButton);

    const noOutput = component.queryByDisplayValue(mockConsoleText);
    expect(noOutput).toBeNull();

    const openButton = component.getByText("open output text");
    expect(openButton).toBeTruthy();

    expect(component.toJSON()).toMatchSnapshot();
  });
});
