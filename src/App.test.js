import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AddTaskButton from "./Components/AddTaskButton";

describe("AddTaskButton", () => {
    it("calls onClick prop when clicked", () => {
        const onClick = jest.fn();
        const { getByText } = render(<AddTaskButton onClick={onClick} />);
        const button = getByText("Agregar Tarea");
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalled();
    });
});
