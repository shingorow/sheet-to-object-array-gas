function exec(ssId, sheetName, getDisplayValues) {
  var ss, sheet, range, values, row = [], value, keys = [], key, tmp, obj = {}, arr = [];
  
  this.getDisplayValues = true && getDisplayValues;
  
  ss = SpreadsheetApp.openById(ssId);
  sheet = ss.getSheetByName(sheetName);
  range = sheet.getDataRange();
  
  if (this.getDisplayValues) {
    values = range.getDisplayValues();
  } else {
    values = range.getValues();
  }
  
  keys = values.shift();
  
  for (var i = 0; i < values.length; i++) {
    row = values[i];
    for (var j = 0; j < keys.length; j++) {
      key = keys[j];
      value = row[j];
      obj[key] = value;
    }
    
    arr.push(obj);
    obj = {};
  }
  
  return arr;
}
