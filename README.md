## Database
* server 작업 시, 아래의 cloud mlab mongoDB 를 사용하시면 됩니다. (read only)
`mongodb://student:JNytCZanZaDEcTxMZyM2wsaF@ds161312.mlab.com:61312/codesplash`
위 data에는 `images` 라는 collection에 `db.json` 데이터가 들어 있습니다.

* server에서 databse 통해 받아오는 photo list를 보면 id 값이 있습니다. 그 id값을 이용해서 `https://picsum.photos/200/300?image=fetched_id` 의 `picsum api`를 활용하여 그림을 그리시면 됩니다.
