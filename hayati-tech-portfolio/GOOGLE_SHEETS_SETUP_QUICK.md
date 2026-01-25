# Google Sheets Integration - Quick Setup Guide

## The Easiest Solution: Use Formspree (Recommended) ⭐

**No coding needed - takes 2 minutes!**

### Step 1: Go to Formspree
Visit [formspree.io](https://formspree.io) and sign up (free)

### Step 2: Create a New Form
- Click "Create New Form"
- Copy the form endpoint URL (looks like: `https://formspree.io/f/XXXXXXXXX`)

### Step 3: Update Your HTML Form
Open `index.html` and change the form element from:
```html
<form class="contact-form" id="contactForm">
```

To:
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Replace `YOUR_FORM_ID` with your actual ID from Formspree.

### Step 4: Test It!
Fill out the form on your website and submit. Responses will go to your email automatically! ✅

---

## Alternative: Google Sheets Integration (Advanced)

If you prefer Google Sheets:

### Step 1: Create a Google Sheet
1. Go to [sheets.google.com](https://sheets.google.com)
2. Create new spreadsheet named "Hayati Tech Contacts"
3. Add headers in row 1:
   - A1: `name`
   - B1: `email`
   - C1: `subject`
   - D1: `message`
   - E1: `timestamp`

### Step 2: Create Google Apps Script
1. Go to [script.google.com](https://script.google.com)
2. Click "Create New Project"
3. Paste this code:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.name,
      data.email,
      data.subject,
      data.message,
      data.timestamp
    ]);
    
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

### Step 3: Deploy
1. Click "Deploy" → "New deployment"
2. Type: **Web app**
3. Execute as: Your Google account
4. Access: **Anyone**
5. Click Deploy and copy the URL

### Step 4: Update Your Website
Open `assets/js/script.js` and replace:
```javascript
const GOOGLE_APPS_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_ID';
```

With your deployment URL from Step 3.

### Step 5: Test It!
Fill out the form and check your Google Sheet - data should appear automatically! ✅

---

## Troubleshooting

**Formspree not working?**
- Check spam folder for test emails
- Verify form action URL is correct
- Make sure method="POST"

**Google Sheets not receiving data?**
- Open browser console (F12) and check for errors
- Verify script is deployed as "Web app" with "Anyone" access
- Check column headers match exactly

---

**Questions?** Both methods now work with your portfolio! 🎉
