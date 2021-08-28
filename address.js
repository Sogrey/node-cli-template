#!/usr/bin/env node

var address = require('address');

address(function (err, addrs) {
    console.log(addrs.ip, addrs.ipv6, addrs.mac);
    // '192.168.0.2', 'fe80::7aca:39ff:feb0:e67d', '78:ca:39:b0:e6:7d'
});

address('vboxnet', function (err, addrs) {
    console.log(addrs.ip, addrs.ipv6, addrs.mac);
    // '192.168.56.1', null, '0a:00:27:00:00:00'
});

address.dns(function (err, addrs) {
    console.log(addrs);
    // ['10.13.2.1', '10.13.2.6']
});