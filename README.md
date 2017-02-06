# Sheet to object array for Google Apps Script
スプレッドシートの表を JavaScript の配列に変換するライブラリ

## 使い方
Google Apps Script のスクリプトエディタでライブラリとして読み込みます。

**Project key**: MBEpZpcdlEjynNfYIZdE3emnDDfO4Z3Qz

|No |氏名     |メールアドレス    |
|:--|:-------|:--------------|
|1  |山田花子 |hanako@hoge.com|
|2  |佐藤一郎 |ichiro@sato.com|
|1  |加藤公平 |kohei@kato.com |
上記のようなテーブルを Spreadsheet で作成します。
スプレッドシートの ID が "##########"、シート名が "リスト" の場合
```javascript
var list = SheetToObjectArray.exec('##########', 'リスト', true);
```
とすると、変数 list の中には下記のような配列が格納されます。
```javascript
[
  {
    No: 1,
    '氏名': '山田花子',
    'メールアドレス': 'hanako@hoge.com'
  },
  {
    No: 2,
    '氏名': '佐藤一郎',
    'メールアドレス': 'ichiro@sato.com'
  },
  {
    No: 3,
    '氏名': '加藤公平',
    'メールアドレス': 'kohei@kato.com'
  }
]
```
exec メソッドの第三引数は、シートから値を取るときにセルに表示されている値を取得するか、計算結果を取得するかの違いになります。

true にすると、日付や数値などが表示形式で設定したとおりに取得できます。デフォルトは false になっています。
## お約束
このライブラリを使用したことで起こったいかなる損害に対しても制作者は責任を負いませんのでご了承下さい。
