import {actionTypes} from './actions'

const INITIAL_STATE = {
 LOGGED_IN: false,
 PROFILE: {},
 TIME_DATA: [{
  "id": "ed9d82d6-25c3-4c77-9c26-a035804b44f9",
  "from": "8:34",
  "to": "15:52",
  "for": "Shufflebeat",
  "Date": "2020-06-02"
}, {
  "id": "74e14b43-0f36-4d80-a408-bdbebbd62669",
  "from": "8:16",
  "to": "15:34",
  "for": "Babblestorm",
  "Date": "2020-06-03"
}, {
  "id": "84985fc3-d89e-4dc0-b587-ded5ebde71e3",
  "from": "8:54",
  "to": "13:19",
  "for": "Yodel",
  "Date": "2020-06-06"
}, {
  "id": "94c06bb5-7ac6-48d3-bc47-9329494c1be6",
  "from": "8:10",
  "to": "16:40",
  "for": "Skiptube",
  "Date": "2020-06-04"
}, {
  "id": "5a22f58f-8fb8-4932-aa5e-bc1b079cb08a",
  "from": "8:31",
  "to": "12:38",
  "for": "Kayveo",
  "Date": "2020-06-05"
}, {
  "id": "d808a185-975b-4ad1-b398-6a7a3b4c921b",
  "from": "8:23",
  "to": "16:56",
  "for": "Demivee",
  "Date": "2020-06-04"
}, {
  "id": "f057a4f1-e259-4895-a22d-3c5ea6bd6698",
  "from": "8:52",
  "to": "15:28",
  "for": "Trunyx",
  "Date": "2020-06-02"
}, {
  "id": "d0fc2f4b-bd55-4455-bb4c-3639ccd31c12",
  "from": "8:21",
  "to": "15:44",
  "for": "Gabcube",
  "Date": "2020-06-06"
}, {
  "id": "a0ca5f23-bb2c-4086-b870-b0d8ba9912b6",
  "from": "8:21",
  "to": "14:53",
  "for": "Meembee",
  "Date": "2020-06-07"
}, {
  "id": "f49f12d0-a996-425e-b516-4329f52d476f",
  "from": "8:51",
  "to": "12:22",
  "for": "Midel",
  "Date": "2020-06-07"
}]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.login:
      return {
        ...state,
        LOGGED_IN: true,
        PROFILE: action.payload
      };

      case actionTypes.addTime:
        return {
          ...state,
          TIME_DATA: [...state.TIME_DATA, action.payload]
        }
    default:
      return state
  }
};
