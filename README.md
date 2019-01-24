# List of all cities/regencies in Indonesia

## Install

```javascript
npm install indonesia-cities-regencies --save
```

## Example

```javascript
const indonesia = require('indonesia-cities-regencies')

indonesia.getAll() // return all

indonesia.get('jak') // default limit is 10

indonesia.get('jak', 5)
```

```json
[ { "name": "Kota Administrasi Jakarta Pusat",
    "island": "Jawa",
    "province": "Jakarta",
    "capital": "Menteng" },
  { "name": "Kabupaten Administrasi Kepulauan Seribu",
    "island": "Jawa",
    "province": "Jakarta",
    "capital": "Pulau Pramuka" },
  { "name": "Kota Administrasi Jakarta Barat",
    "island": "Jawa",
    "province": "Jakarta",
    "capital": "-" },
  { "name": "Kota Administrasi Jakarta Selatan",
    "island": "Jawa",
    "province": "Jakarta",
    "capital": "-" },
  { "name": "Kota Administrasi Jakarta Timur",
    "island": "Jawa",
    "province": "Jakarta",
    "capital": "Jatinegara" } ]
```

## Credits

- [Wikipedia](https://id.wikipedia.org/wiki/Daftar_kabupaten_dan_kota_di_Indonesia)
- [Gunawan Wijaya](https://github.com/gunawanwijaya) for scraping the data

## Used in production by

- [Pomona](https://web.pomona.id/)

## License

MIT @Aldi Priya Perdana