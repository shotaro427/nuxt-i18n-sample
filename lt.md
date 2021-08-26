---
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.jpg')
marp: true
---

# **Nuxtのi18n化**
2021.06.18


---

# i18nとは

Internationalizationの略。
Iとnの間に18文字あるのでi18n。
ちなみにこのような着し方を**ヌメロニム**という(k8sとか)

![地球儀](https://2.bp.blogspot.com/-lyNll4xOgNo/UdYhITDF5sI/AAAAAAAAV4s/VjdMYefJm20/s400/chikyuugi.png)

---

# nuxt-i18n
[nuxt-i18n](https://i18n.nuxtjs.org/)
- vue-i18nと統合
- 言語ごとに自動ルート作成
- 検索エンジンの最適化
- 辞書の遅延読み込み

---

## インストール

```powershell
$ yarn add nuxt-i18n
```
---

## nuxt.config.jsのmoduleに設定を追加
```javascript
export default {
  // 略...
  modules: [
    [
      'nuxt-i18n',
      {
        locales: [ 
          { code: 'ja', name: 'Japanese', iso: 'ja_JP', file: 'ja.json' },
          { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' },
        ],
        defaultLocale: 'en', // デフォルトの言語
        langDir: 'locales/', // 翻訳ファイルのディレクトリパス
        strategy: 'no_prefix', // URLに言語のプレフィックスを追加するかの指定
        vueI18n: {
          fallbackLocale: 'en', // 翻訳ファイルが見つからなかった場合の言語を指定
        },
        vueI18nLoader: true,
        lazy: true, // 遅延読み込みの有効化
      },
    ],
  ],
}
```

---

## 翻訳ファイルの作成
プロジェクト直下に`locales`というディレクトリを作成。
```
./myproject
├── locales
│   ├── ja.json
│   └── en.json
```

```json
{
  "apple": "Apple"
}
```

---
## Vueファイル内で使用
```html
<p>{{ $t('apple') }}</p>

<p>{{ $t('fruit.apple') }}</p>
```
翻訳したい言葉に変数が入った場合どうするの？
![クエスチョン](https://1.bp.blogspot.com/-eMLID2dYzwM/VwIgW_nlilI/AAAAAAAA5bY/-osLYuNceb4GArB0E5Cl1D4oYMVDNVKIw/s400/question_head_boy.png)


---
## 特殊な翻訳をする場合
翻訳ファイル内で`{変数名}`と書く。 
```json
{
  "name": "Dear {name}"
}
```
表示する時は、第二引数に変数名を含めたオブジェクトを渡す
```html
<p>{{ $t('name', { name: 'hogehoge' }) }}</p>
```
