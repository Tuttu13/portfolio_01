# はじめに
ポートフォリオ作成

# 各コンテナの概要
#### ディレクトリ構造
root/  
├── backend/  
│   │── app(django用)  
│   └── dockerfile(django用)  
└── frontend/  
│   │── app(react用)   
│   └── dockerfile(react用)  
├── backend/  
└── docker-compose.yml  
#### 各コンテナビルドについて
  
フロントエンド：react  
バックエンド：django  
データベース：postgres

# フロントエンド開発について  
以下の手順でをフロントエンドコンテナ内で実行すること

1. プロジェクト実行  
```npm start```　

1. モジュールインストール  
```npm install```　

1. 1(プロジェクト実行)ができなかった場合、モジュールを全て削除してから、再度2(モジュールインストール)を行う  
```rm -rf node_modules```　

## 参考
https://qiita.com/mirrors/items/595f35249b065c679b2c

