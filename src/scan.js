const scanResult = {
    filename: 'intense-noping',
    report_summary: {
        summary:
            'Nmap ended at Sun Feb 16 16:34:15 2020 ; 256 IP addresses (43 hosts up) scanned in -1 seconds',
        nmap_version: '7.80',
        command: 'nmap -T4 -A -v -Pn 172.31.151.90/24',
        scan_type: 'syn',
    },
    products: [
        'product: Microsoft HTTPAPI httpd version: 2.0 extrainfo: SSDP/UPnP',
        'product: Microsoft IIS httpd version: 10.0',
        'product: Microsoft Windows RPC',
        'product: Microsoft Windows netbios-ssn',
        'product: MySQL extrainfo: unauthorized',
        'product: OpenSSH version: 7.4p1 Debian 10+deb9u7 extrainfo: protocol 2.0',
        'product: Windows 10 Home Single Language 17763 microsoft-ds extrainfo: workgroup: WORKGROUP',
        'product: nginx version: 1.10.3',
    ],
    devices: [
        'specialized: AVtech, embedded',
        'general purpose: Linux, Linux(3.X)',
        'general purpose: Microsoft, Windows(2008)',
        'phone: Apple, iOS(11.X)',
        'general purpose: Microsoft, Windows(Longhorn)',
        'printer: DYMO, embedded',
        'general purpose: Linux, Linux(2.6.X)',
        'firewall: Fortinet, embedded',
        'general purpose: Microsoft, Windows(XP)',
        'general purpose: Linux, Linux(2.4.X)',
    ],
    ports: [
        22,
        80,
        135,
        139,
        445,
        3000,
        3306,
        5357,
        6646,
        7070,
        8600,
        41511,
        49152,
        62078,
    ],
    hosts: [
        {
            ip: '172.31.151.5',
            mac: 'B8:41:A4:52:72:8B',
            vendor: 'Apple',
            distance: 0,
            services: [
                {
                    port: 62078,
                    tcp_ip: 'tcp',
                    state: 'open',
                    service: 'tcpwrapped',
                    banner: '',
                },
            ],
            os: 'Fortinet FortiGate 100D firewall',
            os_accuracy: 87,
        },
        {
            ip: '172.31.151.9',
            mac: '48:E2:44:00:39:5F',
            vendor: 'Hon Hai Precision Ind.',
            distance: 0,
            services: [],
            os: '',
            os_accuracy: '',
        },
        {
            ip: '172.31.151.10',
            mac: '9C:B6:D0:B7:28:51',
            vendor: 'Rivet Networks',
            distance: 0,
            services: [
                {
                    port: 80,
                    tcp_ip: 'tcp',
                    state: 'open',
                    service: 'http',
                    banner: 'product: Microsoft IIS httpd version: 10.0',
                },
                {
                    port: 3306,
                    tcp_ip: 'tcp',
                    state: 'open',
                    service: 'mysql',
                    banner: 'product: MySQL extrainfo: unauthorized',
                },
            ],
            os: 'DYMO LabelManager Wireless PNP printer',
            os_accuracy: 87,
        },
        {
            ip: '172.31.151.21',
            mac: 'C0:EE:FB:E8:0D:B9',
            vendor: 'OnePlus Tech (Shenzhen)',
            distance: 0,
            services: [
                {
                    port: 1972,
                    tcp_ip: 'tcp',
                    state: 'filtered',
                    service: 'intersys-cache',
                    banner: '',
                },
            ],
            os: '',
            os_accuracy: '',
        },
        {
            ip: '172.31.151.26',
            mac: '44:46:87:72:0B:83',
            vendor: '',
            distance: 0,
            services: [],
            os: '',
            os_accuracy: '',
        },
        {
            ip: '172.31.151.32',
            mac: '44:04:44:F7:01:0E',
            vendor: 'Guangdong Oppo Mobile Telecommunications',
            distance: 0,
            services: [],
            os: '',
            os_accuracy: '',
        },
        {
            ip: '172.31.151.50',
            mac: '70:BB:E9:2B:64:B0',
            vendor: 'Xiaomi Communications',
            distance: 0,
            services: [],
            os: '',
            os_accuracy: '',
        },
        {
            ip: '172.31.151.51',
            mac: '20:34:FB:6E:88:BF',
            vendor: 'Xiaomi Communications',
            distance: 0,
            services: [],
            os: '',
            os_accuracy: '',
        },
        {
            ip: '172.31.151.56',
            mac: '60:83:73:42:31:1E',
            vendor: '',
            distance: 0,
            services: [
                {
                    port: 62078,
                    tcp_ip: 'tcp',
                    state: 'open',
                    service: 'tcpwrapped',
                    banner: '',
                },
            ],
            os: 'Apple iOS 11.0',
            os_accuracy: 97,
        },
        {
            ip: '172.31.151.60',
            mac: '20:16:B9:48:5E:13',
            vendor: 'Intel Corporate',
            distance: 0,
            services: [
                {
                    port: 135,
                    tcp_ip: 'tcp',
                    state: 'open',
                    service: 'msrpc',
                    banner: 'product: Microsoft Windows RPC',
                },
                {
                    port: 139,
                    tcp_ip: 'tcp',
                    state: 'open',
                    service: 'netbios-ssn',
                    banner: 'product: Microsoft Windows netbios-ssn',
                },
                {
                    port: 445,
                    tcp_ip: 'tcp',
                    state: 'open',
                    service: 'microsoft-ds',
                    banner: '',
                },
            ],
            os: 'Microsoft Windows XP SP2',
            os_accuracy: 85,
        },
        {
            ip: '172.31.151.64',
            mac: '40:74:E0:83:29:58',
            vendor: 'Intel Corporate',
            distance: 0,
            services: [
                {
                    port: 5357,
                    tcp_ip: 'tcp',
                    state: 'open',
                    service: 'http',
                    banner:
                        'product: Microsoft HTTPAPI httpd version: 2.0 extrainfo: SSDP/UPnP',
                },
            ],
            os: 'DYMO LabelManager Wireless PNP printer',
            os_accuracy: 87,
        },
        {
            ip: '172.31.151.73',
            mac: 'FC:77:74:36:15:32',
            vendor: 'Intel Corporate',
            distance: 0,
            services: [],
            os: '',
            os_accuracy: '',
        },
        {
            ip: '172.31.151.75',
            mac: 'A8:DB:03:53:FC:C4',
            vendor: 'Samsung Electro-mechanics(thailand)',
            distance: 0,
            services: [],
            os: '',
            os_accuracy: '',
        },
        {
            ip: '172.31.151.95',
            mac: '70:BB:E9:3F:0F:82',
            vendor: 'Xiaomi Communications',
            distance: 0,
            services: [],
            os: '',
            os_accuracy: '',
        },
        {
            ip: '172.31.151.113',
            mac: '00:71:CC:30:D8:63',
            vendor: 'Hon Hai Precision Ind.',
            distance: 0,
            services: [
                {
                    port: 5357,
                    tcp_ip: 'tcp',
                    state: 'open',
                    service: 'http',
                    banner:
                        'product: Microsoft HTTPAPI httpd version: 2.0 extrainfo: SSDP/UPnP',
                },
                {
                    port: 41511,
                    tcp_ip: 'tcp',
                    state: 'open',
                    service: 'unknown',
                    banner: '',
                },
            ],
            os: 'AVtech Room Alert 26W environmental monitor',
            os_accuracy: 87,
        },
        {
            ip: '172.31.151.114',
            mac: 'D8:32:E3:41:E5:A8',
            vendor: 'Xiaomi Communications',
            distance: 0,
            services: [],
            os: '',
            os_accuracy: '',
        },
        {
            ip: '172.31.151.119',
            mac: 'B4:CB:57:CD:D5:FB',
            vendor: 'Guangdong Oppo Mobile Telecommunications',
            distance: 0,
            services: [],
            os: '',
            os_accuracy: '',
        },
        {
            ip: '172.31.151.129',
            mac: '70:1C:E7:90:7D:4C',
            vendor: 'Intel Corporate',
            distance: 0,
            services: [
                {
                    port: 135,
                    tcp_ip: 'tcp',
                    state: 'open',
                    service: 'msrpc',
                    banner: 'product: Microsoft Windows RPC',
                },
                {
                    port: 139,
                    tcp_ip: 'tcp',
                    state: 'open',
                    service: 'netbios-ssn',
                    banner: 'product: Microsoft Windows netbios-ssn',
                },
                {
                    port: 445,
                    tcp_ip: 'tcp',
                    state: 'open',
                    service: 'microsoft-ds',
                    banner:
                        'product: Windows 10 Home Single Language 17763 microsoft-ds extrainfo: workgroup: WORKGROUP',
                },
            ],
            os: 'Microsoft Windows Server 2008 SP1 or Windows Server 2008 R2',
            os_accuracy: 85,
        },
        {
            ip: '172.31.151.131',
            mac: '58:85:A2:2C:B8:9B',
            vendor: 'Realme Chongqing MobileTelecommunications',
            distance: 0,
            services: [
                {
                    port: 3000,
                    tcp_ip: 'tcp',
                    state: 'open',
                    service: 'ppp',
                    banner: '',
                },
            ],
            os: 'Linux 2.4.21',
            os_accuracy: 100,
        },
        {
            ip: '172.31.151.132',
            mac: '88:E9:FE:62:81:49',
            vendor: 'Apple',
            distance: 0,
            services: [
                {
                    port: 49152,
                    tcp_ip: 'tcp',
                    state: 'open',
                    service: 'unknown',
                    banner: '',
                },
            ],
            os: 'Apple iOS 11.0',
            os_accuracy: 97,
        },
        {
            ip: '172.31.151.136',
            mac: '4A:5A:38:E8:FF:46',
            vendor: '',
            distance: 0,
            services: [],
            os: '',
            os_accuracy: '',
        },
        {
            ip: '172.31.151.138',
            mac: 'D4:6A:6A:25:53:D9',
            vendor: 'Hon Hai Precision Ind.',
            distance: 0,
            services: [],
            os: '',
            os_accuracy: '',
        },
        {
            ip: '172.31.151.144',
            mac: '50:E0:85:51:D3:2B',
            vendor: 'Intel Corporate',
            distance: 0,
            services: [
                {
                    port: 5357,
                    tcp_ip: 'tcp',
                    state: 'open',
                    service: 'http',
                    banner:
                        'product: Microsoft HTTPAPI httpd version: 2.0 extrainfo: SSDP/UPnP',
                },
            ],
            os: 'AVtech Room Alert 26W environmental monitor',
            os_accuracy: 87,
        },
        {
            ip: '172.31.151.157',
            mac: '74:70:FD:B6:89:FB',
            vendor: 'Intel Corporate',
            distance: 0,
            services: [],
            os: '',
            os_accuracy: '',
        },
        {
            ip: '172.31.151.171',
            mac: '3C:20:F6:26:D5:A3',
            vendor: 'Samsung Electronics',
            distance: 0,
            services: [
                {
                    port: 8600,
                    tcp_ip: 'tcp',
                    state: 'open',
                    service: 'asterix',
                    banner: '',
                },
            ],
            os: 'Linux 3.8',
            os_accuracy: 95,
        },
        {
            ip: '172.31.151.175',
            mac: 'C4:2A:D0:EC:12:17',
            vendor: 'Apple',
            distance: 0,
            services: [
                {
                    port: 62078,
                    tcp_ip: 'tcp',
                    state: 'open',
                    service: 'tcpwrapped',
                    banner: '',
                },
            ],
            os: 'Apple iOS 11.0',
            os_accuracy: 97,
        },
        {
            ip: '172.31.151.183',
            mac: '3C:6A:A7:0C:EA:9F',
            vendor: 'Intel Corporate',
            distance: 0,
            services: [
                {
                    port: 5357,
                    tcp_ip: 'tcp',
                    state: 'open',
                    service: 'http',
                    banner:
                        'product: Microsoft HTTPAPI httpd version: 2.0 extrainfo: SSDP/UPnP',
                },
            ],
            os: 'AVtech Room Alert 26W environmental monitor',
            os_accuracy: 87,
        },
        {
            ip: '172.31.151.190',
            mac: '58:00:E3:A2:CF:8D',
            vendor: 'Liteon Technology',
            distance: 0,
            services: [
                {
                    port: 22,
                    tcp_ip: 'tcp',
                    state: 'open',
                    service: 'ssh',
                    banner:
                        'product: OpenSSH version: 7.4p1 Debian 10+deb9u7 extrainfo: protocol 2.0',
                },
                {
                    port: 80,
                    tcp_ip: 'tcp',
                    state: 'open',
                    service: 'http',
                    banner: 'product: nginx version: 1.10.3',
                },
            ],
            os: 'Linux 2.6.32',
            os_accuracy: 96,
        },
        {
            ip: '172.31.151.191',
            mac: '70:BB:E9:7C:DC:0E',
            vendor: 'Xiaomi Communications',
            distance: 0,
            services: [],
            os: '',
            os_accuracy: '',
        },
        {
            ip: '172.31.151.193',
            mac: '54:B8:02:31:82:46',
            vendor: 'Samsung Electronics',
            distance: 0,
            services: [],
            os: '',
            os_accuracy: '',
        },
        {
            ip: '172.31.151.202',
            mac: '44:03:2C:BC:6E:D9',
            vendor: 'Intel Corporate',
            distance: 0,
            services: [
                {
                    port: 135,
                    tcp_ip: 'tcp',
                    state: 'open',
                    service: 'msrpc',
                    banner: 'product: Microsoft Windows RPC',
                },
                {
                    port: 139,
                    tcp_ip: 'tcp',
                    state: 'open',
                    service: 'netbios-ssn',
                    banner: 'product: Microsoft Windows netbios-ssn',
                },
                {
                    port: 445,
                    tcp_ip: 'tcp',
                    state: 'open',
                    service: 'microsoft-ds',
                    banner: '',
                },
            ],
            os: 'Microsoft Windows Longhorn',
            os_accuracy: 92,
        },
        {
            ip: '172.31.151.208',
            mac: 'DC:1A:C5:11:AA:7D',
            vendor: 'vivo Mobile Communication',
            distance: 0,
            services: [],
            os: '',
            os_accuracy: '',
        },
        {
            ip: '172.31.151.216',
            mac: 'E8:D0:FC:F5:82:AD',
            vendor: 'Liteon Technology',
            distance: 0,
            services: [
                {
                    port: 135,
                    tcp_ip: 'tcp',
                    state: 'open',
                    service: 'msrpc',
                    banner: 'product: Microsoft Windows RPC',
                },
                {
                    port: 139,
                    tcp_ip: 'tcp',
                    state: 'open',
                    service: 'netbios-ssn',
                    banner: 'product: Microsoft Windows netbios-ssn',
                },
                {
                    port: 445,
                    tcp_ip: 'tcp',
                    state: 'open',
                    service: 'microsoft-ds',
                    banner: '',
                },
                {
                    port: 5357,
                    tcp_ip: 'tcp',
                    state: 'open',
                    service: 'http',
                    banner:
                        'product: Microsoft HTTPAPI httpd version: 2.0 extrainfo: SSDP/UPnP',
                },
                {
                    port: 6646,
                    tcp_ip: 'tcp',
                    state: 'open',
                    service: 'tcpwrapped',
                    banner: '',
                },
            ],
            os: 'Microsoft Windows Server 2008 SP1 or Windows Server 2008 R2',
            os_accuracy: 85,
        },
        {
            ip: '172.31.151.218',
            mac: '58:00:E3:D4:3D:4B',
            vendor: 'Liteon Technology',
            distance: 0,
            services: [],
            os: '',
            os_accuracy: '',
        },
        {
            ip: '172.31.151.223',
            mac: 'C0:EE:FB:DB:B8:47',
            vendor: 'OnePlus Tech (Shenzhen)',
            distance: 0,
            services: [],
            os: '',
            os_accuracy: '',
        },
        {
            ip: '172.31.151.230',
            mac: '30:35:AD:AC:DA:DC',
            vendor: 'Apple',
            distance: 0,
            services: [],
            os: '',
            os_accuracy: '',
        },
        {
            ip: '172.31.151.231',
            mac: '1C:36:BB:C5:DF:F4',
            vendor: 'Apple',
            distance: 0,
            services: [
                {
                    port: 62078,
                    tcp_ip: 'tcp',
                    state: 'open',
                    service: 'tcpwrapped',
                    banner: '',
                },
            ],
            os: 'Fortinet FortiGate 100D firewall',
            os_accuracy: 87,
        },
        {
            ip: '172.31.151.232',
            mac: '00:F4:8D:DC:E4:EF',
            vendor: 'Liteon Technology',
            distance: 0,
            services: [],
            os: '',
            os_accuracy: '',
        },
        {
            ip: '172.31.151.238',
            mac: '70:C9:4E:F7:BA:21',
            vendor: 'Liteon Technology',
            distance: 0,
            services: [
                {
                    port: 5357,
                    tcp_ip: 'tcp',
                    state: 'open',
                    service: 'http',
                    banner:
                        'product: Microsoft HTTPAPI httpd version: 2.0 extrainfo: SSDP/UPnP',
                },
                {
                    port: 6646,
                    tcp_ip: 'tcp',
                    state: 'open',
                    service: 'tcpwrapped',
                    banner: '',
                },
            ],
            os: 'AVtech Room Alert 26W environmental monitor',
            os_accuracy: 87,
        },
        {
            ip: '172.31.151.246',
            mac: 'C0:9A:D0:AA:E1:26',
            vendor: 'Apple',
            distance: 0,
            services: [
                {
                    port: 62078,
                    tcp_ip: 'tcp',
                    state: 'open',
                    service: 'tcpwrapped',
                    banner: '',
                },
            ],
            os: 'Apple iOS 11.0',
            os_accuracy: 97,
        },
        {
            ip: '172.31.151.247',
            mac: '50:5B:C2:D1:73:21',
            vendor: 'Liteon Technology',
            distance: 0,
            services: [
                {
                    port: 5357,
                    tcp_ip: 'tcp',
                    state: 'open',
                    service: 'http',
                    banner:
                        'product: Microsoft HTTPAPI httpd version: 2.0 extrainfo: SSDP/UPnP',
                },
                {
                    port: 7070,
                    tcp_ip: 'tcp',
                    state: 'open',
                    service: 'realserver',
                    banner: '',
                },
            ],
            os: 'AVtech Room Alert 26W environmental monitor',
            os_accuracy: 87,
        },
        {
            ip: '172.31.151.249',
            mac: '04:C8:07:28:BF:5C',
            vendor: 'Xiaomi Communications',
            distance: 0,
            services: [],
            os: '',
            os_accuracy: '',
        },
        {
            ip: '172.31.151.240',
            mac: '',
            vendor: '',
            distance: 0,
            services: [
                {
                    port: 2022,
                    tcp_ip: 'tcp',
                    state: 'filtered',
                    service: 'down',
                    banner: '',
                },
                {
                    port: 5222,
                    tcp_ip: 'tcp',
                    state: 'filtered',
                    service: 'xmpp-client',
                    banner: '',
                },
            ],
            os: '',
            os_accuracy: '',
        },
    ],
};

export default scanResult;
