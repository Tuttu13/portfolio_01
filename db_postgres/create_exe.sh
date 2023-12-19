echo `date '+%y/%m/%d %H:%M:%S'`
echo "一括SQLを実行します。"

# SQLを実行する
psql -U sandbox -h 127.0.0.1 -d db_sandbox -f ./all.sql > ./result.log

echo `date '+%y/%m/%d %H:%M:%S'`
echo "一括SQLの実行が終了しました。"