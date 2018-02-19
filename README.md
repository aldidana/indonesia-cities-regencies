# List of all cities/regencies in Indonesia

## Install
```javascript
npm install indonesia-cities-regencies --save
```

## Example
```javascript
const indonesia = require('indonesia-cities-regencies')

indonesia.get('jak') // default limit is 10
indonesia.get('jak', 5)
indonesia.getAll() // return all
indonesia.getAll(5)
```

## Credits
- [Wikipedia](https://id.wikipedia.org/wiki/Daftar_kabupaten_dan_kota_di_Indonesia)
- [Gunawan Wijaya](https://github.com/gunawan-pomona) for scraping the data 

## License
MIT @Aldi Priya Perdana