# Blogger Auto Poster – Google Sheets to Blogger (Urdu Novels & More!) 

Hey there! 👋  
Tired of posting one Urdu novel after another manually on your Blogger site?  
I’ve been there — it’s super time-consuming and honestly a bit boring.  

That’s why I built this simple Google Apps Script: to turn your Google Sheet into an **automatic, smart, hands-free content machine** that posts beautiful, SEO-ready novels for you — while you relax, read, or spend time with family.

Perfect for bloggers who share **Urdu novels**, Islamic books, romantic stories, or any kind of PDF library. This tool will save you hours every day!

---

##  What This Script Does

- Automatically creates and publishes posts (set it once and forget it!)  
- Creates gorgeous “Novel Card” posts with **Read Online** + **Download PDF** buttons  
- Writes SEO-friendly descriptions that Google loves  
- Adds labels like “Urdu Novel” and “Urdu Novel PDFs”  
- Marks rows as “Done” in your sheet — no duplicate posts ever  
- Posts slowly (10 per hour) to stay safe from Google’s rate limits  
- 100% free — no subscriptions, no hidden costs  

---

##  What You Need to Get Started

- Your own Blogger blog  
- A Google Sheet with your novel titles & links  
- About 15–20 minutes for one-time setup (it’s easier than it sounds!)  

---

## Step-by-Step Setup (Super Easy!)

### 1. Set Up Your Google Sheet

| A (Title)             | B (Link)                        | C (Status) |
|-----------------------|---------------------------------|------------|
| Jannat Key Patte      | https://drive.google.com/...    | (leave empty) |
| Dil e Muztar          | https://drive.google.com/...    | (leave empty) |

Just three columns — write headings in the first row, add your data below.

### 2. Add the Script Code

1. Open your Google Sheet  
2. Go to **Extensions → Apps Script**  
3. Delete any existing code  
4. Copy-paste the `code.gs` from this repository  

### 3. Add the Manifest File (appsscript.json)

1. In Apps Script → click **Project Settings** (gear icon on left)  
2. Check the box: **Show "appsscript.json" manifest file in editor**  
3. Back in Editor → you’ll see appsscript.json  
4. Paste the `appsscript.json` code from this repo (replace everything)  

### 4. Connect to Blogger API (One-time only!)

1. Go to [https://console.cloud.google.com/](https://console.cloud.google.com/)  
2. Create a new project (name it anything, e.g., “Novel Poster”)  
3. Search for **Blogger API v3** → Enable it  
4. Set up OAuth consent screen:  
   - Choose **External**  
   - Add your Gmail as a **Test user**  
   - Save & Continue (skip everything else)  
5. Go to Dashboard → copy the **Project Number** (long number)  
6. Back in Apps Script → Project Settings → **Google Cloud Project** → Change Project → paste the number  

### 6. Test It for the First Time

1. In Apps Script, select **createBloggerPosts** from the dropdown menu  
2. Click **Run**  
3. Google will ask for permission → click **Advanced** → **Go to (unsafe)** → **Allow**  
4. Check your sheet — where the post was successful, Column C will show “Done” 

### 7. Make It Run Automatically (The Real Fun Starts Here!)

1. In Apps Script, click **Triggers** (clock icon on the left)  
2. Click **+ Add Trigger**  
3. Set it like this:  
   - Function: `createBloggerPosts`  
   - Event: **Time-driven** → **Hour timer** → **Every hour**  
4. Click **Save** → Done!  

Now it will automatically post 10 novels every hour — without you lifting a finger! 

---

## ⚠️ Important Safety Tips

- Google allows roughly 100–150 posts per day. If you exceed this, you might see error 429 — the script will automatically stop and try again the next hour, so don’t worry!  
- When starting, keep `postLimit` at 5 or 10  
- Never share your real `blogId` or `spreadsheetId` publicly  

---

##  Made with Love

I built this script for myself first, then thought — why not share it with everyone for free?  
Now you have more time to enjoy chai, read novels, and grow your blog.

If you like this tool, please give this repo a ⭐ on GitHub — it would make me super happy!  
And if you get stuck anywhere, just drop me a message — I’ll reply as quickly as I can.

Happy blogging, my friend! ✍️  
May your blog become super popular and readers line up for more! 

Take care & keep smiling! 😊
###  Update Your Details (Only 3 Lines!)

In `code.gs`, change these three lines at the top:

```javascript
var blogId        = '12345678901255559';       // Your Blogger blog ID (from URL)
var spreadsheetId = '1aBcDeFgHiaammlowsqwTuVwXyZ'; // Your Google Sheet ID (from URL)
var postLimit     = 10;                            // 10 is safe, don’t change much
