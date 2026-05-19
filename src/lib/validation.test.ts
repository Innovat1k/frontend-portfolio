import { describe, it, expect } from "vitest";
import { validateForm } from "./validation";

describe("Validation Logic", () => {
  it("returns valid for correct data", () => {
    const data = new FormData();
    data.append("name", "Jean");
    data.append("email", "jean@test.com");
    data.append("message", "Bonjour, ceci est un message valide.");

    const result = validateForm({
      name: "Jean",
      email: "jean@test.com",
      message: "Message valide",
    });
    expect(result.valid).toBe(true);
  });

  it("fails if email is invalid", () => {
    const result = validateForm({
      name: "Jean",
      email: "invalid-email",
      message: "Test",
    });
    expect(result.valid).toBe(false);
    expect(result.errors.email).toBeDefined();
  });

  it("fails if message is too short / less than 10 characters", () => {
    const result = validateForm({
      name: "Jean",
      email: "jean@test.com",
      message: "Court",
    });
    expect(result.valid).toBe(false);
    expect(result.errors.message).toContain("Minimum");
  });
});
