function getUserId() {
  console.log('Get user ID...')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let userId = 13
      resolve(userId)
    }, 1000)
  })
}

function getUser(userId) {
  console.log('Fetching users API...')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let users = [
        {id: 11, username: "a", email: "a@mail.com", profileId: "a19xH56"},
        {id: 12, username: "b", email: "b@mail.com", profileId: "b37KmcS4"},
        {id: 13, username: "c", email: "c@mail.com", profileId: "ck83478s"},
      ]
      let user = users.find((u) => u.id === userId)
      resolve(user)
      // reject(new Error('Something went wrong on getting users data'))
    }, 2000)
  })
}

function getUserProfile(user) {
  console.log('Fetching users Profiles API...')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let usersProfiles = [
        {id: "a19xH56", longname: "aaaaaa", address: "A.st", phone: "0123927"},
        {id: "b37KmcS4", longname: "bbbbbb", address: "B.st", phone: "2738450"},
        {id: "ck83478s", longname: "cccccc", address: "C.st", phone: "19345323"},
      ]
      let profile = usersProfiles.find(p => p.id === user.profileId)
      resolve(profile)
      // reject(new Error('Something went wrong on getting user profile data'))
    }, 2000)
  })
}
