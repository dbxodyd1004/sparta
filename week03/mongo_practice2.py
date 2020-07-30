from pymongo import MongoClient

client = MongoClient('localhost', 27017)
db = client.dbsparta

# doc = db.movies.find_one({'rank': '13'})
# print(doc['star'])

# docs = list(db.movies.find({'star' : '9.41'}))
# for doc in docs:
#     print(doc['title'])

db.movies.update_many({'star': '9.41'}, {'$set': {'star': '0'}})
docs = list(db.movies.find({'star': '9.41'}))
print(docs)


