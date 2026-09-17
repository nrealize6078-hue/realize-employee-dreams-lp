# LP「社長の夢を支える社員の夢を、誰が支えるのか。」編集用コピー

元サイト: https://realize-employee-dreams.uminchu-t0422.chatgpt.site/
（ChatGPTのサイト公開機能でホスティングされているページ。2026年9月17日時点の内容を取得）

## ファイル構成

| ファイル | 中身 |
|---|---|
| `index.html` | 本文（ヘッダー＋全8セクション＋フッター）。整形済みで直接編集できる |
| `styles.css` | デザイン。1行1,500文字まで圧縮されていたものを1,384行に整形（内容は1文字も変えていない） |
| `main.js` | 画面上端の読了プログレスバー＋固定ボトムバーの出し入れ |
| `assets/family-hero.webp` | ファーストビューの写真（161KB） |
| `assets/realize-sans-400.woff` | 本文用Webフォント（164KB） |
| `assets/realize-sans-700.woff` | 見出し用Webフォント（167KB） |

ビルド不要。フォルダごとサーバーに置けば動く静的サイト。

## セクションの順番（index.html の上から）

| 行 | セクション | 見出し |
|---|---|---|
| 26 | `header#top` | ページ内ナビ（本文へ／人生を継承／人生を継承する LIFE JOURNEY） |
| 40 | `.hero` | 社長の夢を支える社員の夢を、誰が支えるのか。 |
| 52 | `#question` | 会社の成長に、社員の希望はついてきているか。 |
| 68 | `.people` | その社員にも、初めて社会に出た日がある。 |
| 87 | `.blindspot` | 会社の未来は聞いている。でも、自分の未来は見えない。 |
| 104 | `#support` | 給料を上げる努力に、人生を支える仕組みを。 |
| 128 | `#journey` | 用意しただけでは、暮らしには届かない。 |
| 158 | `.future` | その先には、子どもたちがいる。 |
| 172 | `.closing` | 社長。あなたの夢を毎日支えてくれている人は、… |
| 184 | `footer` | フッター |

## LINE友だち追加（2026年9月17日 追加）

LINE公式アカウント: `https://lin.ee/8jf4Da7`
**3か所**に置いてある。URLを変えるときは3つとも直すこと。

| 場所 | ボタン | 中身 |
|---|---|---|
| `.hero-actions`（ファーストビュー） | **白**（`.btn-white`） | 「LINEで相談する」。スマホでは横幅いっぱい |
| `.line-card`（締めセクション） | LINE公式の緑バッジ画像 | 「LINEでご相談いただけます」のカード |
| `.cta-bar`（画面下の固定バー） | **金**（`.btn-gold`） | 「友だち追加」 |

ボタンの色は CSS 末尾の `.btn-white` / `.btn-gold` で定義。金は
`--gold-light` から `--gold` へのグラデーション、文字はネイビー。
LINEマークは画像ではなく `.btn-line-mark` の文字で組んである（白ボタン＝緑地、金ボタン＝紺地）。

固定バーの挙動:

- ファーストビュー（`.hero`）を過ぎると下からせり上がる。`main.js` 末尾の処理
- 幅820px以下で文言が短い版（`.bar-short`）に切り替わる
- バーの高さは CSS 変数 `--bar-h`（PC 76px / スマホ 68px）。
  締めセクションとフッターの下余白がこの変数を足して計算されているので、
  **高さを変えるときは `--bar-h` だけ直せばよい**
- CSS末尾に `[hidden]{display:none!important}` を入れてある。
  後からバー内に出し分けの要素を足しても `hidden` が効くようにするため

## 文節ごとの改行（2026年9月17日 追加）

スマホで「経営の誇り / に。」のように**末尾2文字だけが次の行に落ちる**のを防ぐため、
見出しや短い文を文節ごとに `<w-b>` で囲んである。CSS末尾の

```css
@media(max-width:900px){ w-b{display:inline-block} }
```

で、901px以上（PC）では `inline` のまま＝**PCの見た目は一切変わらない**。

**注意点**

- `.concerns p` `.eyebrow` `.hero-link` `.closing-link` は `display:flex` のため、
  `<w-b>` を直接置くと flex item になって文節改行が効かない。
  これらは連続する `<w-b>` を `<w-g>` でまとめて1つの flex item にしてある
- 本文を書き換えるときは、文節の区切りで `<w-b>` を入れ直すこと。入れなくても壊れないが、
  その箇所だけ改行位置がそろわなくなる
- `.prose` の長い本文段落には入れていない。長文は通常の折り返しのほうが読みやすいため

## 元サイトから変えたところ

- Cloudflareが自動挿入していたbot判定スクリプト（`__CF$cv$params` の塊、938バイト）を削除
- 1行に圧縮されていた `styles.css` を整形。整形前後で空白を除いた文字列が17,408文字で完全一致することを確認済み
- `index.html` / `main.js` / 画像・フォントは**元サイトと同一**（MD5一致で確認）

## プレビュー

`.claude/launch.json` に `lp-employee-dreams`（ポート8975）として登録済み。
手動で見る場合:

```bash
python -m http.server 8975 --directory "C:/Users/realize5/Documents/Claude/realize-employee-dreams-lp"
```

## 公開先（2026年9月17日 公開済み）

```
https://nrealize6078-hue.github.io/realize-employee-dreams-lp/
```

| | |
|---|---|
| リポジトリ | [nrealize6078-hue/realize-employee-dreams-lp](https://github.com/nrealize6078-hue/realize-employee-dreams-lp)（public） |
| 公開方法 | GitHub Pages（main / ルート） |
| 検索エンジン | **掲載する**（noindexは入れていない） |

`index.html` の canonical と og:url も、この公開URLに書き換え済み。

### 直したあとの反映

```bash
cd "C:/Users/realize5/Documents/Claude/realize-employee-dreams-lp"
git add -A && git commit -m "説明" && git push
```

pushの1〜2分後に本番へ反映される。

### 残っている宿題

OGP画像（SNSやLINEでURLを送ったときのサムネイル）が未設定。元サイトにも無かった。
必要なら 1200×630 の画像を `assets/ogp.jpg` として置き、`<meta property="og:image">` を追加する。
