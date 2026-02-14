function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var name = e.parameter.name;
    var phone = e.parameter.phone;
    var service = e.parameter.service;
    
    // 1. Phone number ke last 3 digits nikalna
    var lastThreeDigits = phone.toString().slice(-3);
    
    // 2. Sirf Date format banana (DD-MM-YYYY)
    var today = new Date();
    var formattedDate = Utilities.formatDate(today, "GMT+5", "dd-MM-yyyy");

    // Sahi sheet ko select karna
    var sheet = ss.getSheetByName(service);
    
    if (sheet) {
      // Row mein data add karna: [Last 3 Digits, Name, Phone, Service, Date]
      sheet.appendRow([
        "'" + lastThreeDigits, // Pehla column: Last 3 Digits
        name, 
        "'" + phone, 
        service, 
        formattedDate // Aakhri column: Sirf Date
      ]);
      
      return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
    } else {
      return ContentService.createTextOutput("Error: Sheet Name Match Nahi Hua!").setMimeType(ContentService.MimeType.TEXT);
    }
  } catch (err) {
    return ContentService.createTextOutput("Error: " + err.toString()).setMimeType(ContentService.MimeType.TEXT);
  }
}