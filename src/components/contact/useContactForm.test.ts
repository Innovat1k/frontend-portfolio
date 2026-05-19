import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useContactForm } from "./useContactForm";

global.fetch = vi.fn(
  () =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ message: "Success" }),
    }) as any,
);

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
      } as any);
    });

    expect(result.current.formData.name).toBe("Jean");
  });

  it("handles successful submission", async () => {
    const { result } = renderHook(() => useContactForm());

    act(() => {
      result.current.handleChange({
        target: { name: "name", value: "Jean" },
      } as any);
      result.current.handleChange({
        target: { name: "email", value: "jean@test.com" },
      } as any);
      result.current.handleChange({
        target: { name: "message", value: "Hello world test message" },
      } as any);
    });

    await act(async () => {
      await result.current.handleSubmit({ preventDefault: () => {} } as any);
    });

    expect(result.current.status).toBe("success");
    expect(global.fetch).toHaveBeenCalled();
  });
});
