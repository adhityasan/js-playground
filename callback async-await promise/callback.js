function getUserId(callback) {
  console.log('Get user ID...')
  setTimeout(() => {
    let userId = 13
    callback(userId)
  }, 1000)
}

function getUser(userId, callback) {
  console.log('Fetching users API...')
  setTimeout(() => {
    let users = [
      {id: 11, username: "a", email: "a@mail.com", profileId: "a19xH56"},
      {id: 12, username: "b", email: "b@mail.com", profileId: "b37KmcS4"},
      {id: 13, username: "c", email: "c@mail.com", profileId: "ck83478s"},
    ]
    let user = users.find((u) => u.id === userId)
    callback(user)
  }, 2000)
}

function getUserProfile(user, callback) {
  console.log('Fetching users Profiles API...')
  setTimeout(() => {
    let usersProfiles = [
      {id: "a19xH56", longname: "aaaaaa", address: "A.st", phone: "0123927"},
      {id: "b37KmcS4", longname: "bbbbbb", address: "B.st", phone: "2738450"},
      {id: "ck83478s", longname: "cccccc", address: "C.st", phone: "19345323"},
    ]
    let profile = usersProfiles.find(p => p.id === user.profileId)
    callback(profile)
  }, 2000)
}

// it's a callback with problem named Christmass Tree, 
const callback_christmass_tree = () => {
  getUserId((userId) => {
    getUser(userId, (user) => {
      getUserProfile(user, (profile => {
        console.log(profile)
      }))
    })
  })
}

// to make it easier to read, you can replace all those unamed ES6 arrow function with named function
const callback_named_function = () => {
  function consoleUserProfile(profile) {
    console.log(profile)
  }
  function handleUser(user) {
    getUserProfile(user, consoleUserProfile)
  }
  function handlerUserId(userId) {
    getUser(userId, handleUser)
  }
  getUserId(handlerUserId)
}

// callback_christmass_tree()
callback_named_function()
