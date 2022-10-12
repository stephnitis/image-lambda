const AWS = require('aws-sdk');
const S3 = new AWS.S3();

exports.handler = async (event) => {

    let bucketName = event.Records[0].s3.bucket.name;
    let key = event.Records[0].s3.object.key;
    let size = event.Records[0].s3.object.size;
    try {
    let images = await S3.getObject({Bucket: bucketName, Key: key}).promise();
    let stringifiedImages = images.Body.toString();
    let parsedImages = JSON.parse(stringifiedImages);
    parsedImages.push({
        name:key,
        size,
        type: "jpeg"
    });
    const params = {
        Bucket: bucketName,
        Key: "images.json"
    };
    let imgData = JSON.stringify(parsedImages);
    await S3.putObject({... params, Body: imgData}).promise();

     console.log('data ------------->', parsedImages)
    } catch (e) {
        console.log(e);
        let newImage = {
            Bucket: bucketName,
            Key: "images.json",
            Body: JSON.stringify([{name: key, size: size, type: ".jpeg"}]),
        };
        await S3.putObject(newImage).promise();
    }
    
    const response = {
        statusCode: 200,
        body: JSON.stringify(),
    };
    return response;
};
