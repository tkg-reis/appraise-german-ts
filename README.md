##

memo

全体的な参照元

ref
https://pg-life.net/typescript/mongodb-api/


###
typescriptでのnodejsサーバーの構築

ref
https://reffect.co.jp/node-js/express-typescript/#tsconfigjson-%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%AE%E4%BD%9C%E6%88%90
https://qiita.com/nyanchu/items/82903e0463fa9d558639
https://pragmatic.ukiuni.com/express_with_typescript/



1,tscコマンドでコンパイルが成功するか逐次確認する
2,expressの型宣言をする
3,tsconfig.jsonにts-node include compilerOptionsの設定を追記、変更する
4,npx ts-node rootpathで確認して、nodemonでサーバーを維持する

###
send error

ref
https://scrapbox.io/gyarasu/Express(Node)%E3%81%A7%E7%99%BA%E7%94%9F%E3%81%99%E3%82%8B%E3%80%8CCan't_set_headers_after_they_are_sent.%E3%80%8D

結論：リクエストは一個にしないとレスポンスヘッダーエラーになる。
＝＞res.send("meg");の部分を削除して解決！


###
型のnull,undefindを非nullアサーション演算子で回避する

ref
https://qiita.com/cedrictarou/items/c191a5c370a55a1e62de
https://qiita.com/k_kind/items/0e24c54da6fb44403e97
https://zenn.dev/oreo2990/articles/3d780560c5e552

結論：patchのgerman変数やenvの環境変数はnullやstringであることを機械側に保障するために「!」をつける。
つけても問題ない根拠は、patchは既にスキーマの制約を合格しているため型の問題には当たらないと判断。環境変数も同様に。
ただし非nullアサーション演算子の乱用は避ける。バグが発生する可能性があるため。

###
reactのルーティングの設定

ref
https://zenn.dev/925rycki/articles/744093eeb0ece6

結論：基本構造はかなり決まっていて、nextjsのルーティングが作られたのもなんだか納得。

###




