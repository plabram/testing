import { describe, test, expect } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import App from "./App"

/**
 * @vitest-environment jsdom
 */

describe("App", () => {
  test("should render the correct elements", () => {
    render(<App />)
    expect(screen.getByText("hello")).toBeInTheDocument()
  })

  test("should render the correct alt image", () => {
    render(<App />)
    expect(screen.getByRole("img")).toHaveAttribute("alt", "giphy")
  })

  test("should render the correct name when user completed", () => {
    render(<App />)

    const inputElement = screen.getByPlaceholderText("Type your name")

    expect(screen.getByText("hello")).toBeInTheDocument()

    userEvent.type(inputElement, "Alberto")

    waitFor(() => expect(screen.queryByText("hello P")).toBeInTheDocument())
  })
})