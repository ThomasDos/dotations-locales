import { expect, test } from "@playwright/test";

test("should get search input, type and click on result, then navigate to the correct url", async ({
    page,
}) => {
    await page.goto("http://localhost:3000/");
    await page
        .getByPlaceholder(/collectivité ou code insee/i)
        .fill("Montreuil");

    await page
        .getByRole("link", { name: "Montreuil (93048) 93100" })
        .click({ force: true });
    await page.waitForNavigation();

    expect(page.url()).toBe("http://localhost:3000/93048?libelle=Montreuil");
});
