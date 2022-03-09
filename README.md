使い方を調べたのでメモ。

## 起動

初回起動時に以下を実行してレプリカセットの設定を有効化する。

```sh
docker-compose exec mongodb-primary mongo -u admin -p secret /docker-entrypoint-initdb.d/99-manual-init.js
```

`--bind_ip_all` で受け付け範囲を `0.0.0.0` にしているので以下でも良い。

```sh
mongo --host localhost --port 27020 -u admin -p secret /docker-entrypoint-initdb.d/99-manual-init.js
```

## 初期化

初期化する際は MongoDB のデータを格納する `./primary/*`, `./secondary-1/*`, `./secondary-2/*` を空にする必要がある。 (`.gitkeep` は残す)

```sh
rm -rf primary/* ; rm -rf secondary-1/* ; rm -rf secondary-2/*
```