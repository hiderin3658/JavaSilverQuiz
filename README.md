# JavaSilver SE11 クイズ

Java SE 11 認定資格（JavaSilver）の学習を効率的に進めるためのクイズアプリケーションです。

## 🎯 特徴

- **即時フィードバック**: 問題に答えると即座に正誤と解説が表示されます
- **レスポンシブ対応**: スマートフォン、タブレット、PCのすべてで快適に利用可能
- **10テーマ・200問**: 試験範囲を網羅した充実の問題数
- **モダンなUI**: 学習しやすいシンプルで美しいデザイン

## 📚 コンテンツ

全10テーマ、各テーマに2つのクイズセット（Set A / Set B）、合計200問を収録しています。

### テーマ一覧

1. **変数・データ型・演算子／var** - 基本的な変数宣言、型推論、演算子
2. **制御構造** - if、switch、for、while などの制御文
3. **配列** - 配列の宣言、初期化、操作
4. **メソッド・スコープ・オーバーロード** - メソッドの定義と呼び出し
5. **クラス・初期化・static** - クラスの基礎、初期化ブロック
6. **継承・オーバーライド・ポリモーフィズム** - オブジェクト指向の基本
7. **例外処理** - try-catch、例外の種類
8. **パッケージ・アクセス修飾子** - パッケージとアクセス制御
9. **コアAPI** - String、StringBuilder、配列、コレクション
10. **モジュールシステム** - Java 9以降のモジュール機能

各テーマ10問×2セット = 20問

## 🚀 使い方

### オンラインで使用（GitHub Pages）

[https://[your-username].github.io/JavaSilverQuiz/](https://[your-username].github.io/JavaSilverQuiz/)

### ローカルで使用

1. リポジトリをクローン
```bash
git clone https://github.com/[your-username]/JavaSilverQuiz.git
cd JavaSilverQuiz
```

2. ブラウザで `index.html` を開く
```bash
open index.html
```

または、簡易サーバーを起動
```bash
# Python 3の場合
python3 -m http.server 8000

# Node.jsの場合
npx http-server
```

ブラウザで `http://localhost:8000` にアクセス

## 📱 レスポンシブ対応

- **スマートフォン**: 1問ずつ画面に表示、タップしやすい大きなボタン
- **タブレット**: 最適化されたレイアウト
- **PC**: 全問スクロール表示、効率的な学習

## 🛠️ 技術スタック

- **HTML5**: セマンティックなマークアップ
- **CSS3**: レスポンシブデザイン、アニメーション
- **JavaScript (Vanilla)**: フレームワーク不使用、軽量で高速

## 📂 プロジェクト構造

```
JavaSilverQuiz/
├── index.html                 # トップページ
├── assets/
│   ├── css/
│   │   └── common.css        # 共通スタイル
│   └── js/
│       └── quiz.js           # 共通ロジック
├── theme01_variables_operators_var/
│   ├── theme01_..._setA_10q.html
│   └── theme01_..._setB_10q.html
├── theme02_control_flow/
├── theme03_arrays/
├── theme04_methods_scope_overload/
├── theme05_classes_init_static/
├── theme06_inheritance_override_poly/
├── theme07_exceptions/
├── theme08_packages_access/
├── theme09_core_api/
└── theme10_modules/
```

## 🎨 デザイン

- プログレスバーで進捗を可視化
- 正解は緑、不正解は赤で即座にフィードバック
- スムーズなアニメーション
- 読みやすいフォントとレイアウト

## 📝 ライセンス

このプロジェクトは学習目的で作成されています。

## 🤝 コントリビューション

問題の追加や修正、UIの改善など、コントリビューションを歓迎します。

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 お問い合わせ

問題や提案がある場合は、[Issues](https://github.com/[your-username]/JavaSilverQuiz/issues) からお知らせください。

---

**JavaSilver SE11 認定試験の合格を応援しています！** 🎓
