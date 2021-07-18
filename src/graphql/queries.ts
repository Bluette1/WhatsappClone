/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      imageUri
      status
      chatRoomUser {
        items {
          id
          userId
          chatRoomId
          user {
            id
            name
            imageUri
            status
            chatRoomUser {
              items {
                id
                userId
                chatRoomId
                user {
                  id
                  name
                  imageUri
                  status
                  chatRoomUser {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                chatRoom {
                  id
                  chatRoomUsers {
                    nextToken
                  }
                  messages {
                    nextToken
                  }
                  lastMessageId
                  lastMessage {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          chatRoom {
            id
            chatRoomUsers {
              items {
                id
                userId
                chatRoomId
                user {
                  id
                  name
                  imageUri
                  status
                  chatRoomUser {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                chatRoom {
                  id
                  chatRoomUsers {
                    nextToken
                  }
                  messages {
                    nextToken
                  }
                  lastMessageId
                  lastMessage {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            messages {
              items {
                id
                content
                userId
                chatRoomId
                user {
                  id
                  name
                  imageUri
                  status
                  chatRoomUser {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                chatRoom {
                  id
                  chatRoomUsers {
                    nextToken
                  }
                  messages {
                    nextToken
                  }
                  lastMessageId
                  lastMessage {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            lastMessageId
            lastMessage {
              id
              content
              userId
              chatRoomId
              user {
                id
                name
                imageUri
                status
                chatRoomUser {
                  items {
                    id
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              chatRoom {
                id
                chatRoomUsers {
                  items {
                    id
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                messages {
                  items {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                lastMessageId
                lastMessage {
                  id
                  content
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        imageUri
        status
        chatRoomUser {
          items {
            id
            userId
            chatRoomId
            user {
              id
              name
              imageUri
              status
              chatRoomUser {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            chatRoom {
              id
              chatRoomUsers {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              messages {
                items {
                  id
                  content
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              lastMessageId
              lastMessage {
                id
                content
                userId
                chatRoomId
                user {
                  id
                  name
                  imageUri
                  status
                  chatRoomUser {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                chatRoom {
                  id
                  chatRoomUsers {
                    nextToken
                  }
                  messages {
                    nextToken
                  }
                  lastMessageId
                  lastMessage {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChatRoomUser = /* GraphQL */ `
  query GetChatRoomUser($id: ID!) {
    getChatRoomUser(id: $id) {
      id
      userId
      chatRoomId
      user {
        id
        name
        imageUri
        status
        chatRoomUser {
          items {
            id
            userId
            chatRoomId
            user {
              id
              name
              imageUri
              status
              chatRoomUser {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            chatRoom {
              id
              chatRoomUsers {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              messages {
                items {
                  id
                  content
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              lastMessageId
              lastMessage {
                id
                content
                userId
                chatRoomId
                user {
                  id
                  name
                  imageUri
                  status
                  chatRoomUser {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                chatRoom {
                  id
                  chatRoomUsers {
                    nextToken
                  }
                  messages {
                    nextToken
                  }
                  lastMessageId
                  lastMessage {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          items {
            id
            userId
            chatRoomId
            user {
              id
              name
              imageUri
              status
              chatRoomUser {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            chatRoom {
              id
              chatRoomUsers {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              messages {
                items {
                  id
                  content
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              lastMessageId
              lastMessage {
                id
                content
                userId
                chatRoomId
                user {
                  id
                  name
                  imageUri
                  status
                  chatRoomUser {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                chatRoom {
                  id
                  chatRoomUsers {
                    nextToken
                  }
                  messages {
                    nextToken
                  }
                  lastMessageId
                  lastMessage {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        messages {
          items {
            id
            content
            userId
            chatRoomId
            user {
              id
              name
              imageUri
              status
              chatRoomUser {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            chatRoom {
              id
              chatRoomUsers {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              messages {
                items {
                  id
                  content
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              lastMessageId
              lastMessage {
                id
                content
                userId
                chatRoomId
                user {
                  id
                  name
                  imageUri
                  status
                  chatRoomUser {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                chatRoom {
                  id
                  chatRoomUsers {
                    nextToken
                  }
                  messages {
                    nextToken
                  }
                  lastMessageId
                  lastMessage {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        lastMessageId
        lastMessage {
          id
          content
          userId
          chatRoomId
          user {
            id
            name
            imageUri
            status
            chatRoomUser {
              items {
                id
                userId
                chatRoomId
                user {
                  id
                  name
                  imageUri
                  status
                  chatRoomUser {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                chatRoom {
                  id
                  chatRoomUsers {
                    nextToken
                  }
                  messages {
                    nextToken
                  }
                  lastMessageId
                  lastMessage {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          chatRoom {
            id
            chatRoomUsers {
              items {
                id
                userId
                chatRoomId
                user {
                  id
                  name
                  imageUri
                  status
                  chatRoomUser {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                chatRoom {
                  id
                  chatRoomUsers {
                    nextToken
                  }
                  messages {
                    nextToken
                  }
                  lastMessageId
                  lastMessage {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            messages {
              items {
                id
                content
                userId
                chatRoomId
                user {
                  id
                  name
                  imageUri
                  status
                  chatRoomUser {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                chatRoom {
                  id
                  chatRoomUsers {
                    nextToken
                  }
                  messages {
                    nextToken
                  }
                  lastMessageId
                  lastMessage {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            lastMessageId
            lastMessage {
              id
              content
              userId
              chatRoomId
              user {
                id
                name
                imageUri
                status
                chatRoomUser {
                  items {
                    id
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              chatRoom {
                id
                chatRoomUsers {
                  items {
                    id
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                messages {
                  items {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                lastMessageId
                lastMessage {
                  id
                  content
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listChatRoomUsers = /* GraphQL */ `
  query ListChatRoomUsers(
    $filter: ModelChatRoomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRoomUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        chatRoomId
        user {
          id
          name
          imageUri
          status
          chatRoomUser {
            items {
              id
              userId
              chatRoomId
              user {
                id
                name
                imageUri
                status
                chatRoomUser {
                  items {
                    id
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              chatRoom {
                id
                chatRoomUsers {
                  items {
                    id
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                messages {
                  items {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                lastMessageId
                lastMessage {
                  id
                  content
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        chatRoom {
          id
          chatRoomUsers {
            items {
              id
              userId
              chatRoomId
              user {
                id
                name
                imageUri
                status
                chatRoomUser {
                  items {
                    id
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              chatRoom {
                id
                chatRoomUsers {
                  items {
                    id
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                messages {
                  items {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                lastMessageId
                lastMessage {
                  id
                  content
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              content
              userId
              chatRoomId
              user {
                id
                name
                imageUri
                status
                chatRoomUser {
                  items {
                    id
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              chatRoom {
                id
                chatRoomUsers {
                  items {
                    id
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                messages {
                  items {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                lastMessageId
                lastMessage {
                  id
                  content
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          lastMessageId
          lastMessage {
            id
            content
            userId
            chatRoomId
            user {
              id
              name
              imageUri
              status
              chatRoomUser {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            chatRoom {
              id
              chatRoomUsers {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              messages {
                items {
                  id
                  content
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              lastMessageId
              lastMessage {
                id
                content
                userId
                chatRoomId
                user {
                  id
                  name
                  imageUri
                  status
                  chatRoomUser {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                chatRoom {
                  id
                  chatRoomUsers {
                    nextToken
                  }
                  messages {
                    nextToken
                  }
                  lastMessageId
                  lastMessage {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
      id
      chatRoomUsers {
        items {
          id
          userId
          chatRoomId
          user {
            id
            name
            imageUri
            status
            chatRoomUser {
              items {
                id
                userId
                chatRoomId
                user {
                  id
                  name
                  imageUri
                  status
                  chatRoomUser {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                chatRoom {
                  id
                  chatRoomUsers {
                    nextToken
                  }
                  messages {
                    nextToken
                  }
                  lastMessageId
                  lastMessage {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          chatRoom {
            id
            chatRoomUsers {
              items {
                id
                userId
                chatRoomId
                user {
                  id
                  name
                  imageUri
                  status
                  chatRoomUser {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                chatRoom {
                  id
                  chatRoomUsers {
                    nextToken
                  }
                  messages {
                    nextToken
                  }
                  lastMessageId
                  lastMessage {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            messages {
              items {
                id
                content
                userId
                chatRoomId
                user {
                  id
                  name
                  imageUri
                  status
                  chatRoomUser {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                chatRoom {
                  id
                  chatRoomUsers {
                    nextToken
                  }
                  messages {
                    nextToken
                  }
                  lastMessageId
                  lastMessage {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            lastMessageId
            lastMessage {
              id
              content
              userId
              chatRoomId
              user {
                id
                name
                imageUri
                status
                chatRoomUser {
                  items {
                    id
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              chatRoom {
                id
                chatRoomUsers {
                  items {
                    id
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                messages {
                  items {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                lastMessageId
                lastMessage {
                  id
                  content
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          content
          userId
          chatRoomId
          user {
            id
            name
            imageUri
            status
            chatRoomUser {
              items {
                id
                userId
                chatRoomId
                user {
                  id
                  name
                  imageUri
                  status
                  chatRoomUser {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                chatRoom {
                  id
                  chatRoomUsers {
                    nextToken
                  }
                  messages {
                    nextToken
                  }
                  lastMessageId
                  lastMessage {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          chatRoom {
            id
            chatRoomUsers {
              items {
                id
                userId
                chatRoomId
                user {
                  id
                  name
                  imageUri
                  status
                  chatRoomUser {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                chatRoom {
                  id
                  chatRoomUsers {
                    nextToken
                  }
                  messages {
                    nextToken
                  }
                  lastMessageId
                  lastMessage {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            messages {
              items {
                id
                content
                userId
                chatRoomId
                user {
                  id
                  name
                  imageUri
                  status
                  chatRoomUser {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                chatRoom {
                  id
                  chatRoomUsers {
                    nextToken
                  }
                  messages {
                    nextToken
                  }
                  lastMessageId
                  lastMessage {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            lastMessageId
            lastMessage {
              id
              content
              userId
              chatRoomId
              user {
                id
                name
                imageUri
                status
                chatRoomUser {
                  items {
                    id
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              chatRoom {
                id
                chatRoomUsers {
                  items {
                    id
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                messages {
                  items {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                lastMessageId
                lastMessage {
                  id
                  content
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      lastMessageId
      lastMessage {
        id
        content
        userId
        chatRoomId
        user {
          id
          name
          imageUri
          status
          chatRoomUser {
            items {
              id
              userId
              chatRoomId
              user {
                id
                name
                imageUri
                status
                chatRoomUser {
                  items {
                    id
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              chatRoom {
                id
                chatRoomUsers {
                  items {
                    id
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                messages {
                  items {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                lastMessageId
                lastMessage {
                  id
                  content
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        chatRoom {
          id
          chatRoomUsers {
            items {
              id
              userId
              chatRoomId
              user {
                id
                name
                imageUri
                status
                chatRoomUser {
                  items {
                    id
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              chatRoom {
                id
                chatRoomUsers {
                  items {
                    id
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                messages {
                  items {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                lastMessageId
                lastMessage {
                  id
                  content
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              content
              userId
              chatRoomId
              user {
                id
                name
                imageUri
                status
                chatRoomUser {
                  items {
                    id
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              chatRoom {
                id
                chatRoomUsers {
                  items {
                    id
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                messages {
                  items {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                lastMessageId
                lastMessage {
                  id
                  content
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          lastMessageId
          lastMessage {
            id
            content
            userId
            chatRoomId
            user {
              id
              name
              imageUri
              status
              chatRoomUser {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            chatRoom {
              id
              chatRoomUsers {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              messages {
                items {
                  id
                  content
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              lastMessageId
              lastMessage {
                id
                content
                userId
                chatRoomId
                user {
                  id
                  name
                  imageUri
                  status
                  chatRoomUser {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                chatRoom {
                  id
                  chatRoomUsers {
                    nextToken
                  }
                  messages {
                    nextToken
                  }
                  lastMessageId
                  lastMessage {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        chatRoomUsers {
          items {
            id
            userId
            chatRoomId
            user {
              id
              name
              imageUri
              status
              chatRoomUser {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            chatRoom {
              id
              chatRoomUsers {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              messages {
                items {
                  id
                  content
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              lastMessageId
              lastMessage {
                id
                content
                userId
                chatRoomId
                user {
                  id
                  name
                  imageUri
                  status
                  chatRoomUser {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                chatRoom {
                  id
                  chatRoomUsers {
                    nextToken
                  }
                  messages {
                    nextToken
                  }
                  lastMessageId
                  lastMessage {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        messages {
          items {
            id
            content
            userId
            chatRoomId
            user {
              id
              name
              imageUri
              status
              chatRoomUser {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            chatRoom {
              id
              chatRoomUsers {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              messages {
                items {
                  id
                  content
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              lastMessageId
              lastMessage {
                id
                content
                userId
                chatRoomId
                user {
                  id
                  name
                  imageUri
                  status
                  chatRoomUser {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                chatRoom {
                  id
                  chatRoomUsers {
                    nextToken
                  }
                  messages {
                    nextToken
                  }
                  lastMessageId
                  lastMessage {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        lastMessageId
        lastMessage {
          id
          content
          userId
          chatRoomId
          user {
            id
            name
            imageUri
            status
            chatRoomUser {
              items {
                id
                userId
                chatRoomId
                user {
                  id
                  name
                  imageUri
                  status
                  chatRoomUser {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                chatRoom {
                  id
                  chatRoomUsers {
                    nextToken
                  }
                  messages {
                    nextToken
                  }
                  lastMessageId
                  lastMessage {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          chatRoom {
            id
            chatRoomUsers {
              items {
                id
                userId
                chatRoomId
                user {
                  id
                  name
                  imageUri
                  status
                  chatRoomUser {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                chatRoom {
                  id
                  chatRoomUsers {
                    nextToken
                  }
                  messages {
                    nextToken
                  }
                  lastMessageId
                  lastMessage {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            messages {
              items {
                id
                content
                userId
                chatRoomId
                user {
                  id
                  name
                  imageUri
                  status
                  chatRoomUser {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                chatRoom {
                  id
                  chatRoomUsers {
                    nextToken
                  }
                  messages {
                    nextToken
                  }
                  lastMessageId
                  lastMessage {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            lastMessageId
            lastMessage {
              id
              content
              userId
              chatRoomId
              user {
                id
                name
                imageUri
                status
                chatRoomUser {
                  items {
                    id
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              chatRoom {
                id
                chatRoomUsers {
                  items {
                    id
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                messages {
                  items {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                lastMessageId
                lastMessage {
                  id
                  content
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      content
      userId
      chatRoomId
      user {
        id
        name
        imageUri
        status
        chatRoomUser {
          items {
            id
            userId
            chatRoomId
            user {
              id
              name
              imageUri
              status
              chatRoomUser {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            chatRoom {
              id
              chatRoomUsers {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              messages {
                items {
                  id
                  content
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              lastMessageId
              lastMessage {
                id
                content
                userId
                chatRoomId
                user {
                  id
                  name
                  imageUri
                  status
                  chatRoomUser {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                chatRoom {
                  id
                  chatRoomUsers {
                    nextToken
                  }
                  messages {
                    nextToken
                  }
                  lastMessageId
                  lastMessage {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          items {
            id
            userId
            chatRoomId
            user {
              id
              name
              imageUri
              status
              chatRoomUser {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            chatRoom {
              id
              chatRoomUsers {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              messages {
                items {
                  id
                  content
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              lastMessageId
              lastMessage {
                id
                content
                userId
                chatRoomId
                user {
                  id
                  name
                  imageUri
                  status
                  chatRoomUser {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                chatRoom {
                  id
                  chatRoomUsers {
                    nextToken
                  }
                  messages {
                    nextToken
                  }
                  lastMessageId
                  lastMessage {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        messages {
          items {
            id
            content
            userId
            chatRoomId
            user {
              id
              name
              imageUri
              status
              chatRoomUser {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            chatRoom {
              id
              chatRoomUsers {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              messages {
                items {
                  id
                  content
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              lastMessageId
              lastMessage {
                id
                content
                userId
                chatRoomId
                user {
                  id
                  name
                  imageUri
                  status
                  chatRoomUser {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                chatRoom {
                  id
                  chatRoomUsers {
                    nextToken
                  }
                  messages {
                    nextToken
                  }
                  lastMessageId
                  lastMessage {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        lastMessageId
        lastMessage {
          id
          content
          userId
          chatRoomId
          user {
            id
            name
            imageUri
            status
            chatRoomUser {
              items {
                id
                userId
                chatRoomId
                user {
                  id
                  name
                  imageUri
                  status
                  chatRoomUser {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                chatRoom {
                  id
                  chatRoomUsers {
                    nextToken
                  }
                  messages {
                    nextToken
                  }
                  lastMessageId
                  lastMessage {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          chatRoom {
            id
            chatRoomUsers {
              items {
                id
                userId
                chatRoomId
                user {
                  id
                  name
                  imageUri
                  status
                  chatRoomUser {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                chatRoom {
                  id
                  chatRoomUsers {
                    nextToken
                  }
                  messages {
                    nextToken
                  }
                  lastMessageId
                  lastMessage {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            messages {
              items {
                id
                content
                userId
                chatRoomId
                user {
                  id
                  name
                  imageUri
                  status
                  chatRoomUser {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                chatRoom {
                  id
                  chatRoomUsers {
                    nextToken
                  }
                  messages {
                    nextToken
                  }
                  lastMessageId
                  lastMessage {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              nextToken
            }
            lastMessageId
            lastMessage {
              id
              content
              userId
              chatRoomId
              user {
                id
                name
                imageUri
                status
                chatRoomUser {
                  items {
                    id
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              chatRoom {
                id
                chatRoomUsers {
                  items {
                    id
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                messages {
                  items {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                lastMessageId
                lastMessage {
                  id
                  content
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        userId
        chatRoomId
        user {
          id
          name
          imageUri
          status
          chatRoomUser {
            items {
              id
              userId
              chatRoomId
              user {
                id
                name
                imageUri
                status
                chatRoomUser {
                  items {
                    id
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              chatRoom {
                id
                chatRoomUsers {
                  items {
                    id
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                messages {
                  items {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                lastMessageId
                lastMessage {
                  id
                  content
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        chatRoom {
          id
          chatRoomUsers {
            items {
              id
              userId
              chatRoomId
              user {
                id
                name
                imageUri
                status
                chatRoomUser {
                  items {
                    id
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              chatRoom {
                id
                chatRoomUsers {
                  items {
                    id
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                messages {
                  items {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                lastMessageId
                lastMessage {
                  id
                  content
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              content
              userId
              chatRoomId
              user {
                id
                name
                imageUri
                status
                chatRoomUser {
                  items {
                    id
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              chatRoom {
                id
                chatRoomUsers {
                  items {
                    id
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                messages {
                  items {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                lastMessageId
                lastMessage {
                  id
                  content
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          lastMessageId
          lastMessage {
            id
            content
            userId
            chatRoomId
            user {
              id
              name
              imageUri
              status
              chatRoomUser {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            chatRoom {
              id
              chatRoomUsers {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              messages {
                items {
                  id
                  content
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              lastMessageId
              lastMessage {
                id
                content
                userId
                chatRoomId
                user {
                  id
                  name
                  imageUri
                  status
                  chatRoomUser {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                chatRoom {
                  id
                  chatRoomUsers {
                    nextToken
                  }
                  messages {
                    nextToken
                  }
                  lastMessageId
                  lastMessage {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const messagesByChatRoom = /* GraphQL */ `
  query MessagesByChatRoom(
    $chatRoomId: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByChatRoom(
      chatRoomId: $chatRoomId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        userId
        chatRoomId
        user {
          id
          name
          imageUri
          status
          chatRoomUser {
            items {
              id
              userId
              chatRoomId
              user {
                id
                name
                imageUri
                status
                chatRoomUser {
                  items {
                    id
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              chatRoom {
                id
                chatRoomUsers {
                  items {
                    id
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                messages {
                  items {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                lastMessageId
                lastMessage {
                  id
                  content
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        chatRoom {
          id
          chatRoomUsers {
            items {
              id
              userId
              chatRoomId
              user {
                id
                name
                imageUri
                status
                chatRoomUser {
                  items {
                    id
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              chatRoom {
                id
                chatRoomUsers {
                  items {
                    id
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                messages {
                  items {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                lastMessageId
                lastMessage {
                  id
                  content
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          messages {
            items {
              id
              content
              userId
              chatRoomId
              user {
                id
                name
                imageUri
                status
                chatRoomUser {
                  items {
                    id
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                createdAt
                updatedAt
              }
              chatRoom {
                id
                chatRoomUsers {
                  items {
                    id
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                messages {
                  items {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                lastMessageId
                lastMessage {
                  id
                  content
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          lastMessageId
          lastMessage {
            id
            content
            userId
            chatRoomId
            user {
              id
              name
              imageUri
              status
              chatRoomUser {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              createdAt
              updatedAt
            }
            chatRoom {
              id
              chatRoomUsers {
                items {
                  id
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              messages {
                items {
                  id
                  content
                  userId
                  chatRoomId
                  user {
                    id
                    name
                    imageUri
                    status
                    createdAt
                    updatedAt
                  }
                  chatRoom {
                    id
                    lastMessageId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                nextToken
              }
              lastMessageId
              lastMessage {
                id
                content
                userId
                chatRoomId
                user {
                  id
                  name
                  imageUri
                  status
                  chatRoomUser {
                    nextToken
                  }
                  createdAt
                  updatedAt
                }
                chatRoom {
                  id
                  chatRoomUsers {
                    nextToken
                  }
                  messages {
                    nextToken
                  }
                  lastMessageId
                  lastMessage {
                    id
                    content
                    userId
                    chatRoomId
                    createdAt
                    updatedAt
                  }
                  createdAt
                  updatedAt
                }
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
