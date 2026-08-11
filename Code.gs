/**
 * Google Apps Script Server-Side Code for Pendra Web App.
 * Connects directly to Google Sheets to read data dynamically.
 */

// Global configuration constants
const SPREADSHEET_ID = '1YX_1o0YCzuWf0wYB3uc12Cl3XOVjRELjBVj3IfIQg5o';
const SHEET_NAME = ''; // Keep empty to read the first sheet/tab by default, or specify name if needed.

/**
 * Serves the web app.
 * @param {Object} e - Event parameter.
 * @return {HtmlOutput} The rendered HTML page.
 */
function doGet(e) {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('PENDRA - Document Directory')
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/**
 * Fetches data from the Google Sheet and returns it as a 2D array of rows.
 * @return {Array<Array<string|number>>} Array of rows.
 */
function getSheetData() {
  try {
    if (!SPREADSHEET_ID) {
      throw new Error('Spreadsheet ID is not configured.');
    }

    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet;

    if (SHEET_NAME) {
      sheet = ss.getSheetByName(SHEET_NAME);
    } else {
      sheet = ss.getSheets()[0];
    }

    if (!sheet) {
      throw new Error('The target sheet could not be found.');
    }

    const range = sheet.getDataRange();
    const values = range.getValues();

    // Validate if the sheet is empty
    if (values.length === 0) {
      return [];
    }

    // We expect headers on row 1: e.g. ["#", "Name", "Description"]
    // Let's return everything, but clients can handle header removal if needed or we can pass structured data.
    // To keep it simple and robust, let's return it as an array of objects representing the rows,
    // or simply the array of rows including or excluding headers. Let's return raw rows.
    return values;
  } catch (error) {
    Logger.log('Error in getSheetData: ' + error.toString());
    throw new Error('Failed to retrieve sheet data: ' + error.message);
  }
}
