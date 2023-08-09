// Add your code here
function submitData (userName, userEmail){
return fetch('http://localhost:3000/users', {
    method:'POST',
    headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
    },
    body: JSON.stringify({
        name:userName,
        email:userEmail
    })
})
.then(response => response.json())
.then( function ( object ) {
    document.body.innerHTML = object[ "id" ]
 

})
.catch( function ( error ) {
    document.body.innerHTML = error.message
  } )

}



  
 

//   const newP = document.createElement("p");
//  const body = document.querySelector('body');
//  body.appendChild(newP);
// const  pTag = document.getElementsByTagName('p')[0]
// pTag.innerHTML = `${data.name}  ${data.email}`