var db_uri = process.env.mongo_db_uri;

if (!db_uri) {
    db_uri = 'mongodb://localhost:27017/testdb';
}

module.exports = {
	url : db_uri
};