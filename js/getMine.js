
/**

 * 获取文件后缀名（文件类型）

 * */

exports.getMine = function(extname){

    switch(extname){

        case '.html':

        return 'text/html';   

        case '.css':

        return 'text/css';

        case '.js':

        return 'text/javascript';

        default:

        return 'text/html';

    }

}