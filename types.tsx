/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type ChatRoom = {
  id: String;
  users: [User];
  lastMessage: Message;
}

export type Message = {
  id: String;
  content: String;
  createdAt: String;
}

export type User = {
  id: String;
  name: String;
  imageUri: String;
}



