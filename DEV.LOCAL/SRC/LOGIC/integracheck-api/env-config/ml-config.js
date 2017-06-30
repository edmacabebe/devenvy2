/*
 * @Author: Zoilo Dela Cruz 
 * @Date: 2017-06-28 22:53:10 
 * @Last Modified by: Zoilo Dela Cruz
 * @Last Modified time: 2017-06-29 05:02:18
 */

module.exports = () => {
    let config = {
        local: {
            marklogic: {
                version: 9,
                hostname: 'localhost',
                port: '30050',
                sessionPort: '8004',
                sessionUser: 'IntegraCheck-session-user',
                sessionPassword: 'em9pbG86em9pbG8=',
                timeout: 100
            }
        },
        dev:{
            marklogic: {
                version: 9,
                hostname: '172.17.0.3',
                port: '30050',
                sessionPort: '8004',
                sessionUser: 'IntegraCheck-session-user',
                sessionPassword: 'em9pbG86em9pbG8='
            }
        },
        test:{
            marklogic: {
                version: 9,
                hostname: '172.17.0.2',
                port: '30050',
                sessionPort: '8004',
                sessionUser: 'IntegraCheck-session-user',
                essionPassword: 'em9pbG86em9pbG8='
            }
        },
        prod:{
            marklogic: {
                version: 9,
                hostname: 'localhost',
                port: '30050',
                sessionPort: '8004',
                sessionUser: 'IntegraCheck-session-user',
                sessionPassword: 'em9pbG86em9pbG8='
            }
        }
    };

    return config;
};
