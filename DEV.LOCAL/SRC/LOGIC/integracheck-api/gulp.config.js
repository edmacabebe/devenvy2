/*
 * @Author: Zoilo Dela Cruz 
 * @Date: 2017-06-23 02:44:25 
 * @Last Modified by: Zoilo Dela Cruz
 * @Last Modified time: 2017-06-29 02:14:28
 */

module.exports = () => {
    //TODO: add configuration to different environments local, dev, test, prod
    let config = {
        marklogic: {
            version: 8,
            host: 'localhost',
            httpPort: '30050',
            xccPort: '30051',
            managePort: '8002',
            sessionPort: '8004',
            sessionUser: 'IntegraCheck-session-user',
            sessionPassword: 'em9pbG86em9pbG8=',
            projectCode: 'ICD',
            user: 'admin',
            password: 'admin'
        },
        alljs:['*.js','./bin/*.js', './modules/*.js', './routes/*.js',
         './test/**spec.js', './utils/*.js']
    };
    
    return config;
};