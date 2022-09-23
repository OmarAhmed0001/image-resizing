## scripts

- "start": "npx nodemon src/index.ts"
- "build": "npx tsc"
- "jasmine": "jasmine"
- "test": "npm run build && npm run jasmine"

## endpoints 

- get ('/resize/:name/:width/:hieght')
- the name shoulde be a name from images file with the extention of the image 
- the width should be a posative integer number 
- the hieght should be a posative integer number 
- So we write in the url first the local host that i determine then image name follwed by the width then the hieght
- the url should be like that (http://localhost:3000/resize/encenadaport.jpg/400/300)

- get ('/show/:name')
- the name shoulde be a name from images file with the extention of the image 
- So we write in the url first the local host that i determine then image name
- the url should be like that (http://localhost:3000/show/encenadaport.jpg)

## the functionality :
- to resize image put ( resize/photoname/width/height ) 
- it support cashing so if the user wanted the photo with the same height and width it will not be processed agin 


