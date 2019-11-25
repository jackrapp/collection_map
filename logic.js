// Query URL
var queryUrl = "https://search.artsmia.org/ids/";

// object variable
var object = 0;

// object array
var objectList = 0;

// loop through buckets and read url into json
    // collection size 131975 as of 2019/05/09
// split requests into smaller chunks
for (var i = 0; i < 132; i ++) {
    // request size 1000
    for (var j = 0; j < 1000; j ++) {
        // end loop, do not add number
        if (j == 999) {
            console.log(objectList);
            
            // get request from artsmia api
            d3.json(queryUrl+objectList, function(data) {
                // test/examine data
                console.log(data.hits.hits[0]);
            });

            // add to object to start next list
            object +=1;
        }
        // count up from 0
        else {
            object += 1;
            
            // add new number to list
            objectList += `,${object}`;
        }
    };

    // reset objectList for next request
    objectList = object;

};