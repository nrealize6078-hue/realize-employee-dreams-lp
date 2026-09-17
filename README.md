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

LINE公式アカウント: `https://lin.ee/Xkldeyi`
2か所に置いてある。**URLを変えるときは両方直すこと。**

| 場所 | 中身 |
|---|---|
| `index.html` 締めセクション内の `.line-card` | 「LINEでご相談いただけます」のカード＋友だち追加ボタン |
| `index.html` 末尾の `.cta-bar` | 画面下に貼りつく固定ボトムバー |

固定バーの挙動:

- ファーストビュー（`.hero`）を過ぎると下からせり上がる。`main.js` 末尾の処理
- 幅820px以下で文言が短い版（`.bar-short`）に切り替わる
- バーの高さは CSS 変数 `--bar-h`（PC 76px / スマホ 68px）。
  締めセクションとフッターの下余白がこの変数を足して計算されているので、
  **高さを変えるときは `--bar-h` だけ直せばよい**
- CSS末尾に `[hidden]{display:none!important}` を入れてある。
  後からバー内に出し分けの要素を足しても `hidden` が効くようにするため

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

## 公開する前にやること

`index.html` の冒頭に、元サイトのURLが3か所残っている（9〜11行目あたり）。
別のURLで公開するなら、この3つを新しいURLに書き換える。そのままだと
検索エンジンが「本物は元サイトのほう」と判断してしまう。

- `<link rel="canonical" href="...">`
- `<meta property="og:url" content="...">`
- フッター内のリンク

OGP画像（SNSやLINEでURLを送ったときのサムネイル）は元サイトにも設定が無い。
必要なら 1200×630 の画像を `assets/ogp.jpg` として置き、`<meta property="og:image">` を追加する。
