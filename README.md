# Next.js × Django ブログ

## Django(バックエンド)の環境構築

### 仮想環境の作成
```
python -m venv .venv
```

### 仮想環境に入る
```
.venv/Scripts/Activate.ps1
```

### 仮想環境から抜ける
```
deactivate
```

### 必要なライブラリのインストール
```
pip3 install -r requirements.txt
```

### django-environによる環境変数化(欲しい方のみ)
```
pip install django-environ
```

参考資料: https://allneko.club/django/python-environ/

### Djangoプロジェクトの作成
```
django-admin startproject mysite .
```

### マイグレーション
```
python manage.py migrate
```

### サーバ起動
```
python manage.py runserver
```

### スーパーユーザーの作成
```
python manage.py createsuperuser
```

### Djangoアプリケーションの作成
```
python manage.py startapp app
```

### DjangoのAPI化
```py
# mysite>settings.py

import os

INSTALLED_APPS = [
    # 略
    'rest_framework',
    'app',
    'corsheaders',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    # 略
]

# localhost:3000からのアクセスを許可する
CORS_ORIGIN_WHITELIST = [
    "http://localhost:3000",
]

MEDIA_URL = ''
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

```

