migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cqh9piho4jr4tsj")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cqh9piho4jr4tsj")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
