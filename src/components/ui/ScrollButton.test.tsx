import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ScrollButton from "./ScrollButton";

// Mock de window.scrollTo
Object.defineProperty(window, "scrollTo", {
  writable: true,
  configurable: true,
  value: vi.fn(),
});

// Mock de scrollHeight
Object.defineProperty(document.documentElement, "scrollHeight", {
  writable: true,
  configurable: true,
  value: 2000,
});

describe("ScrollButton Component", () => {
  beforeEach(() => {
    window.scrollY = 0;
  });

  it("does not to be visible initially (scrollY = 0)", () => {
    render(<ScrollButton />);
    
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("shows button after scrolling more than 300px", () => {
    render(<ScrollButton />);

    Object.defineProperty(window, "scrollY", {
      writable: true,
      configurable: true,
      value: 400,
    });

    fireEvent.scroll(window);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("hides button again when scrolling back up", async () => {
    render(<ScrollButton />);

    window.scrollY = 400;
    fireEvent.scroll(window);

    expect(screen.getByRole("button")).toBeInTheDocument();

    window.scrollY = 100;
    fireEvent.scroll(window);

    await waitFor(() => {
      expect(screen.queryByRole("button")).not.toBeInTheDocument();
    });
  });
});
