const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 1, userName: 'Kate Bishop', currentUser: true, birthday: '18 jul 1993', email: 'katebishop@mail.com', friendStatus: false, followerStatus: false, closeFriend: false, onlineStatus: true, location: {country: "Ukraine", city: "Kyiv"}},
        {id: 2, userName: 'John Snow', currentUser: false, birthday: '22 dec 1983', email: 'johnsnow@mail.com', friendStatus: true, followerStatus: true, closeFriend: false, onlineStatus: true, location: {country: "UK", city: "Glasgow"}},
        {id: 3, userName: 'Patty Smith', currentUser: false, birthday: '7 mar 1989', email: 'pattysmith@mail.com', friendStatus: true, followerStatus: true, closeFriend: true, onlineStatus: false, location: {country: "USA", city: "New York"}},
        {id: 4, userName: 'Ariana Grande', currentUser: false, birthday: '14 apr 1999', email: 'arianagrande@mail.com', friendStatus: false, followerStatus: true, closeFriend: false, onlineStatus: true, location: {country: "USA", city: "Las Vegas"}},
        {id: 5, userName: 'Tom Cruise', currentUser: false, birthday: '30 oct 1971', email: 'tcruise@mail.com', friendStatus: false, followerStatus: false, closeFriend: false, onlineStatus: true, location: {country: "USA", city: "San Francisco"}},
        {id: 6, userName: 'Billy Eilish', currentUser: false, birthday: '11 nov 1996', email: 'billye@mail.com', friendStatus: true, followerStatus: false, closeFriend: true, onlineStatus: false, location: {country: "UK", city: "London"}},
        {id: 7, userName: 'Andriy Borysenko', currentUser: false, birthday: '5 nov 1989', email: 'aborysenko@mail.com', friendStatus: true, followerStatus: true, closeFriend: true, onlineStatus: true, location: {country: "Ukraine", city: "Kyiv"}},
        {id: 8, userName: 'Lesia Kosach', currentUser: false, birthday: '17 dec 1996', email: 'lesiakosach@mail.com', friendStatus: true, followerStatus: true, closeFriend: true, onlineStatus: false, location: {country: "Ukraine", city: "Kyiv"}},
        {id: 9, userName: 'Taras Bandera', currentUser: false, birthday: '10 jan 1991', email: 'tarasbandera@mail.com', friendStatus: true, followerStatus: true, closeFriend: false, onlineStatus: true, location: {country: "Ukraine", city: "Lviv"}},
        {id: 10, userName: 'Iryna Myrna', currentUser: false, birthday: '4 aug 1998', email: 'irynamyrna@mail.com', friendStatus: true, followerStatus: false, closeFriend: true, onlineStatus: true, location: {country: "Ukraine", city: "Boryspil"}},
    ],
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
      case FOLLOW:
          return {

          };
      case UNFOLLOW:
          return {

          };
      case SET_USERS:
          return {

          };
      default:
          return state;
  }
};

export const followActionCreator = (userId) =>{
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollowActionCreator = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsersActionCreator = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export default friendsReducer;
