use('rickmorty');

db.getCollection('characters').insertMany([
    {'name': 'Jerry Smith', 'species': 'Human', 'image': 'https://rickandmortyapi.com/api/character/avatar/5.jpeg'},
    {'name': 'Beth Smith', 'species': 'Human', 'image': 'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}
]);