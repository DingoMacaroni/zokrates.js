# zokrates.js

This is a Node.js wrapper around [ZoKrates](https://github.com/Zokrates).
Originally developed at [@eyblockchain/zokrates.js](https://github.com/EYBlockchain/zokrates.js).

## Quickstart

This library is meant to be used through Docker containers running a Linux OS. In the Dockerfile
that will be running this library, you need to include the ZoKrates library as a builder, as such:

```Dockerfile
  FROM zokrates/zokrates:0.6.3 as builder
```

In the same Dockerfile, you then need to copy over the ZoKrates executable as well.

```Dockerfile
  COPY --from=builder /home/zokrates/.zokrates/bin/zokrates /app/zokrates
  COPY --from=builder /home/zokrates/.zokrates/stdlib /app/stdlib
```

From then, you can import and use zokrates.js as any other standard Node.js library.

```js
  const zokratesjs = require('zokrates.js');
```

## Supported Node.js and ZoKrates versions

<!-- Add upport for node version 10,11,12,13,14 and zokrates form 0.6 here -->