const AWS = require('aws-sdk');
const S3 = new AWS.S3();

exports.handler = async (event) => {

    // let bucketName = '<bucket-name>';
    // let key = 'images.json';
    // let images = await S3.getObject({Bucket: bucketName, Key: key}).promise();
    
    let bucketName = event.Records[0].s3.bucket.name;
    let key = event.Records[0].s3.object.key;
    let images = await S3.getObject({Bucket: bucketName, Key: key}).promise();
    
    let stringifiedImages = images.Body.toString();
    let parsedImages = JSON.parse(stringifiedImages);
    
    // let addImages = await S3.putObject({Bucket: bucketName, Key: key}).promise();

     console.log('data ------------->', parsedImages)
    
    const response = {
        statusCode: 200,
        body: JSON.stringify(),
    };
    return response;
};
