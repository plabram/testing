/**
 * @vitest-environment jsdom
 */

import { describe, test, expect } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import Footer, { socialLogos } from "./Footer"

describe("Footer", () => {
  test("Should render correct elements", () => {
    render(<Footer />)
    expect(screen.getByText("Created with love by Blah blah blah")).toBeInTheDocument
  })

  test("all spcial logos render", () => {
    render(<Footer />)
    waitFor(
      () => socialLogos.forEach(
        (logo) => {
          expect(screen.getAllByAltText(logo.alt)).toBeVisible()
        }
      ))

  })
})