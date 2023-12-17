# はじめに
- 各コンテナビルドについて  
  フロントエンド：reactコンテナ  
  バックエンド：djangoコンテナ  
  データベース：postgresコンテナ

## 各コンテナについて
## ディレクトリ構造
root/  
├── backend/  
│   │── app(django用)  
│   └── dockerfile(django用)  
└── frontend/  
│   │── app(react用)   
│   └── dockerfile(react用)  
├── backend/  
└── docker-compose.yml  

## 参考
https://qiita.com/mirrors/items/595f35249b065c679b2c

