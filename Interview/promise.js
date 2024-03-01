const myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation (e.g., fetching data)
  setTimeout(() => {
    const data = "Promise resolved with this data";
    // If the operation is successful, call resolve with the result
    resolve(data);
    // If there's an error, call reject with an error object
    // reject(new Error("An error occurred"));
  }, 2000); // Simulated delay of 2 seconds
});

myPromise
  .then((result) => {
    console.log("Promise resolved:", result);
  })
  .catch((error) => {
    console.error("Promise rejected:", error);
  });






//promise chaining

function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous API call to fetch user data
    setTimeout(() => {
      const user = { id: userId, name: "John Doe" };
      resolve(user);
    }, 1000); // Simulated delay of 1 second
  });
}

function fetchUserPosts(user) {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous API call to fetch user's posts
    setTimeout(() => {
      const posts = ["Post 1", "Post 2", "Post 3"];
      resolve({ user, posts });
    }, 1500); // Simulated delay of 1.5 seconds
  });
}

// Usage: Chaining promises
fetchUserData(123)
  .then((user) => {
    console.log("User Data:", user);
    return fetchUserPosts(user);
  })
  .then((data) => {
    console.log("User Posts:", data.posts);
  })
  .catch((error) => {
    console.error("Error:", error);
  });



const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 1 resolved');
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 2 resolved');
  }, 1500);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 3 resolved');
  }, 2000);
});

// Using Promise.all to wait for all promises to resolve
Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log('All promises resolved:', results);
  })
  .catch(error => {
    console.error('At least one promise was rejected:', error);
  });


const promisei = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 1 resolved');
  }, 1000);
});

const promisej = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 2 resolved');
  }, 1500);
});

const promisek = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 3 resolved');
  }, 2000);
});

// Using Promise.race to get the first settled promise
Promise.race([promisei, promisej, promisek])
  .then(result => {
    console.log('The first promise to settle:', result);
  })
  .catch(error => {
    console.error('All promises were rejected:', error);
  });

