import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useContactForm } from "./useContactForm";

global.fetch = vi.fn(() =>
  Promise.resolve(
    new Response(JSON.stringify({ message: "Success" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }),
  ),
);

type OnChange = React.ChangeEvent<HTMLInputElement>;

describe("useContactForm Hook", () => {
  it("initializes with empty fields and idle status", () => {
    const { result } = renderHook(() => useContactForm());

    expect(result.current.formData.name).toBe("");
    expect(result.current.status).toBe("idle");
  });

  it("updates field value on change", () => {
    const { result } = renderHook(() => useContactForm());

    act(() => {
      result.current.handleChange({
        target: { name: "name", value: "Jean" },
      } as OnChange);
    });

    expect(result.current.formData.name).toBe("Jean");
  });

  it("handles successful submission", async () => {
    const { result } = renderHook(() => useContactForm());

    act(() => {
      result.current.handleChange({
        target: { name: "name", value: "Jean" },
      } as OnChange);
      result.current.handleChange({
        target: { name: "email", value: "jean@test.com" },
      } as OnChange);
      result.current.handleChange({
        target: { name: "message", value: "Hello world test message" },
      } as OnChange);
    });

    await act(async () => {
      await result.current.handleSubmit({ preventDefault: () => {} } as OnChange);
    });

    expect(result.current.status).toBe("success");
    expect(global.fetch).toHaveBeenCalled();
  });
});
