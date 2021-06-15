/**
 * @Topic { key-in }
 */

// 1번 방법
// type FriendList = {
//     count: number;
//     friends: {
//         firstName: string;
//         lastName: string;
//     }[]
// }

// type APIResponse = {
//     user: {
//         userId: string;
//         friendList: string;
//     }
// }

// function renderFriendList(friendList: FriendList) {}

type APIResponse = {
  user: {
    userId: string;
    friendList: {
      count: number;
      friends: {
        firstName: string;
        lastName: string;
      }[];
    };
  };
};

function getAPIResponse(): Promise<APIResponse> {}

// key-in
type FriendList = APIResponse['user']['friendList'];
// function renderFriendList(friendList: unknown) {}
function renderFriendList(friendList: FriendList) {}

let response = await getAPIResponse();
renderFriendList(response.user.friendList);

type ResponseKeys = keyof APIResponse;
type UserKeys = keyof APIResponse['user']; // 'userId' | 'friendList'
type FriendListKeys = keyof APIResponse['user']['friendList']; // 'count' | 'friends'

// 객체에 주어진 키에 해당하는 값을 반환하는 게터
function get<O extends object, K extends keyof O>(o: O, k: K): O[K] {
  return o[k];
}

type ActivityLog = {
  lastEvent: Date;
  events: {
    id: string;
    timestamp: Date;
    type: 'Read' | 'Write';
  };
};

let activityLog: ActivityLog = {
  lastEvent: new Date(),
  events: { id: '1', timestamp: new Date(), type: 'Read' },
};
let lastEvent = get(activityLog, 'lastEvent');

export {};
