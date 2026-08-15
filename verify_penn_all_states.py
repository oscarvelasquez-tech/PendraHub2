from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1280, "height": 800})
        page.goto("http://localhost:8080")

        # 1. Hello state
        page.screenshot(path="/home/jules/verification/penn_state_1_hello.png")

        # Wait for hello to finish -> Default state
        time.sleep(3)
        page.screenshot(path="/home/jules/verification/penn_state_2_default.png")

        # 2. Searching state
        search_input = page.locator("#searchInput")
        search_input.focus()
        search_input.type("a", delay=100)
        page.screenshot(path="/home/jules/verification/penn_state_3_searching.png")

        # Wait for search debounce and completion -> Found state
        time.sleep(1)
        page.screenshot(path="/home/jules/verification/penn_state_4_found.png")

        # 3. No Results state
        search_input.fill("nonexistentquery12345")
        time.sleep(1)
        page.screenshot(path="/home/jules/verification/penn_state_5_no_results.png")

        browser.close()

if __name__ == "__main__":
    run()
