import { test } from "@playwright/test";

test("test", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await page.getByPlaceholder(/collectivité ou code insee/i).click();
    await page
        .getByPlaceholder(/collectivité ou code insee/i)
        .fill("Montreuil");

    await page.getByRole("link", { name: "Montreuil (93048) 93100" }).click();
});
