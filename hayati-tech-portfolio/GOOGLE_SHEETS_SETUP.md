# Google Sheets Integration Setup Guide

## Step-by-Step Instructions

### Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Click "Create New Spreadsheet"
3. Name it "Hayati Tech Contacts"
4. Add column headers in the first row:
   - A1: `name`
   - B1: `email`
   - C1: `subject`
   - D1: `message`
   - E1: `timestamp`

### Step 2: Create Google Apps Script
1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Copy and paste the following code:

```javascript
function doPost(e) {
  try {
    // Get the sheet
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Get form data
    const data = JSON.parse(e.postData.contents);
    
    // Append new row with data
    sheet.appendRow([
      data.name,
      data.email,
      data.subject,
      data.message,
      data.timestamp
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: "Data saved successfully"
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Step 3: Deploy the Script
1. Click "Deploy" → "New deployment"
2. Choose type: "Web app"
3. Execute as: Select your Google account
4. Who has access: "Anyone"
5. Click "Deploy"
6. Copy the deployment URL (looks like: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/usercontent`)

### Step 4: Update Your Portfolio Website
1. Open `assets/js/script.js`
2. Find the `sendToGoogleSheets` function
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_ID'` with your actual deployment URL

Example:
```javascript
const response = await fetch('https://script.google.com/macros/s/AKfycbw...../usercontent', {
```

### Step 5: Test It Out
1. Open your portfolio website
2. Fill out the contact form
3. Click "Send Message"
4. Check your Google Sheet - the data should appear automatically!

## Troubleshooting

**Data not appearing?**
- Check browser console (F12) for errors
- Verify the script URL is correct
- Make sure the Apps Script is deployed as "Anyone"
- Check that column headers match exactly

**CORS Error?**
- Make sure deployment type is "Web app" (not "API executable")
- Set "Execute as" to your account
- Set "Who has access" to "Anyone"

**Want to make the sheet private?**
- After first deployment, go back and redeploy
- Change "Who has access" to "Only myself"
- Share the sheet with specific email addresses

## Alternative: Use Formspree (Even Easier)

If you want an even simpler solution without coding:
1. Go to [formspree.io](https://formspree.io)
2. Sign up for free
3. Get your form endpoint
4. Update the form action to point to Formspree
5. Done! Submissions go to your email

---

Your portfolio is now connected to Google Sheets! 🎉
