# Pendra Document Directory Web App

A Google Apps Script Web App that connects directly to a Google Sheet and displays its contents as an interactive, searchable table, using Pendra corporate brand colors and typography.

## Features
- **Dynamic Connection:** Connects dynamically to the specified Google Sheet via the Google Apps Script `SpreadsheetApp` service (no static caching of row data).
- **Interactive Directory:** Responsive web directory with live filtering search by document Name (case-insensitive, partial matching).
- **Responsive Design:** Elegant desktop and mobile layouts using modern flexbox, CSS Grid, and custom-styled scrolling wrappers.
- **Loading & Error Handling:** Clean feedback with customized CSS animations and detailed error panels.
- **Brand Identity Integration:**
  - **Colors:** Deep Navy Header (`#031B33`), Soft Grey Body (`#ECECF0`), Midnight Navy (`#1B2A4A`), and Royal Blue Accent (`#103680`).
  - **Typography:** Bodoni Moda (Logo), Barlow Condensed (Titles), Inter (Body & Accent).

## Target Data Source
The default target Google Sheet is:
- **URL:** [Pendra Documents Sheet](https://docs.google.com/spreadsheets/d/1YX_1o0YCzuWf0wYB3uc12Cl3XOVjRELjBVj3IfIQg5o/edit?usp=sharing)
- **ID:** `1YX_1o0YCzuWf0wYB3uc12Cl3XOVjRELjBVj3IfIQg5o`

## File Structure
- `Code.gs` — Server-side Apps Script code serving the template and reading the Google Sheet data.
- `Index.html` — Client-side HTML, CSS, and interactive JavaScript.
- `package.json` — Node manifest file containing project metadata and CLI tool dependencies (clasp).
- `README.md` — This documentation.

---

## Local Development and Mock Testing

For visual testing and interface verification without having to upload to Google Servers every single time, a local test runner is provided.

To run locally:
1. Create a simple server script (e.g. `test-server.js` or using python's `http.server`) to serve `Index.html`.
2. Open `Index.html` directly in a browser or through the local server. A built-in JavaScript mock system automatically serves fallback data when `google.script.run` is unavailable.

---

## How to Deploy to Google Apps Script

You can deploy this project either through the online Apps Script Editor or locally using Google's `clasp` tool.

### Option A: Deploying via the Apps Script Online Editor
1. Create a new Google Apps Script project at [script.google.com](https://script.google.com).
2. Copy the contents of `Code.gs` into the editor's default `Code.gs` file.
3. Create a new HTML file in the editor named `Index.html` and copy the contents of our `Index.html` into it.
4. Click on **Deploy > New deployment**.
5. Select **Web app** as the type.
6. Configure the deployment:
   - **Execute as:** `Me` (or the accessing user depending on access needs).
   - **Who has access:** `Anyone` (or restricted to your workspace).
7. Click **Deploy**, authorize permissions, and copy the provided **Web App URL**.

### Option B: Deploying via CLASP (Command Line Apps Script Projects)
If you have `clasp` installed globally and configured:
1. Log in to your Google Account:
   ```bash
   clasp login
   ```
2. Initialize or clone a script project:
   ```bash
   clasp create --title "Pendra Directory" --type webapp
   ```
   *(Or clone an existing one using `clasp clone <scriptId>`)*
3. Push files to Apps Script:
   ```bash
   clasp push
   ```
4. Deploy the web app:
   ```bash
   clasp deploy --description "Initial release of Pendra Portal"
   ```

---

## Customizing Settings
To change the source Spreadsheet or point to a specific tab/sheet name, open `Code.gs` and update the constants at the top:

```javascript
// Global configuration constants
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE';
const SHEET_NAME = 'OptionalTabName'; // Keep empty for the first tab
```
