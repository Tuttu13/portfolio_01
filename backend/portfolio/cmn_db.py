from psycopg2 import (
    connect, sql
)



class commom_db():

    def connect_db(self):

        path = 'postgresql://{user}:{password}@{host}:{port}/{dbname}'

        db = connect(
            path.format(
                user="postgres",        #ユーザ
                password="postgresql",  #パスワード
                host="localhost",       #ホスト名
                port="5432",            #ポート
                dbname="dvdrental"      #データベース名
            )
        )

        return db
    
class commom_query():

    def get_data():

        db = commom_db.connect_db()

        # auto commit を有効にする
        # db.autocommit = True

        cur = db.cursor()
        cur.execute('SELECT * FROM users')
        cur.close()
        db.close()
