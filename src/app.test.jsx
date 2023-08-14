import { describe, test, expect } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import App from "./App"

describe("App", () => {
  test("should render the correct elements", () => {
    render(<App />)

    expect(screen.getByAltText("hello")).toBeInTheDocument()
  })
})