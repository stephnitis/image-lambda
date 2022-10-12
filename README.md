# image-lambda

## Author

Stephanie Hill

## Functionality

- We used S3 Buckets, which are cloud object storage
- Our process started with a JSON file with an array of objects
- We first needed to set permissions so that we could read and update the file
- From here tested our ability to retrieve this data by creating a "get" function in Lambda
- Lambda is a compute service that lets you build applications, it has a quick response to new information and events and we were able to write our code here and test its functionality
- We then updated our JSON format to be an empty array and added some images into our bucket
- Next we needed to create a Put function, and add a trigger so that the lambda function could access the bucket when new items were added
- From here we were able to track and monitor our events through cloud-watch which is a monitoring and management service providing and data and insights for AWS
- We essentially then added code to push each added image into our array, creating an image library for users to update.

## Issues Encountered

Definitely had a lot of struggles, things very clearly needed to be done in a very specific way. I think one of the biggest struggles for me was wasting a lot of time looking into adding permissions when the problems I was having were just in how my files were being passed through.

Grateful for the team who kept pushing through and working through the failures and successes together.

## Credits and Collaborators

Demo code, Brandon Pitts, Keelen Fisher, Tyler main, Luis Rosales

[Link To JSON Image File](https://sh-img-finder.s3.us-west-2.amazonaws.com/images.json)