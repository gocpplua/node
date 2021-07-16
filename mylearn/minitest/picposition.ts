// npm install exif
var ExifImage = require('exif').ExifImage;
 
try {
    new ExifImage({ image : 'C:/Users/Administrator/Desktop/k.jpeg' }, function (error, exifData) {
        if (error)
            console.log('Error: '+error.message);
        else
            console.log(exifData); // Do something with your data!
            // GPSLongitude  和 GPSLatitude 获得的是度分秒，需要转换下 
            // 经纬度转换-----度分秒以及经纬度和米:https://cloud.tencent.com/developer/article/1046281
            // 网页转换:https://www.opengps.cn/map/tools/gpsconvert.aspx
            // 转换会就可以在地图上标记点:https://api.map.baidu.com/lbsapi/getpoint/index.html
    });
} catch (error) {
    console.log('Error: ' + error.message);
}