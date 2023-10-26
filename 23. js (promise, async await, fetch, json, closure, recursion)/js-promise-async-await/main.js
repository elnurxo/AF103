//PROMISES
const num = 42;


// promise.then((res)=> res*2)
// .then((data)=>{
//     return data+10;
// }).then((data)=>{
//     console.log('RESOLVE: ',data);
// }).catch((err)=>{
//     console.error('ERROR: ',err);
// }).finally(()=>{
//     console.log('finally');
// })

//Promise Chain

function g() {
    const promise = new Promise((resolve,reject)=>{
        resolve(num);
    });
    return promise;
}

// function gPromise(callback) {
//     callback().then((result) => {
//         console.log(result);
//     }).catch((err) => {
//         console.error(err);
//     });
// }

async function gAsync() {
    let r =  await g();
    console.log(r);
}

// gPromise(g);
gAsync();