# cuuid
Non-standard `datetime + random` UUID. `8-4-4-4-12` format same as UUID.

## Usage
```js
import cuuid from 'cuuid'

const id = cuuid()
console.log(id) // e.g. 166d4acd-9997-c0f7-4d3d-6ff8b8a9a3a5

```

## Source Code
You can just copy and paste

```js
function cuuid() {
	const str = (Date.now().toString(16) + Math.random().toString(16).slice(2) + Math.random().toString(16).slice(2) + Math.random().toString(16).slice(2)).slice(0, 32)
	return str.slice(0, 8) + '-' + str.slice(8, 12) + '-' + str.slice(12, 16) + '-' + str.slice(16, 20) + '-' + str.slice(20)
}
```

## License
MIT