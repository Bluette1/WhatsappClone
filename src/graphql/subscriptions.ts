/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateChatRoomUser = /* GraphQL */ `
  subscription OnCreateChatRoomUser {
    onCreateChatRoomUser {
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
export const onUpdateChatRoomUser = /* GraphQL */ `
  subscription OnUpdateChatRoomUser {
    onUpdateChatRoomUser {
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
export const onDeleteChatRoomUser = /* GraphQL */ `
  subscription OnDeleteChatRoomUser {
    onDeleteChatRoomUser {
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
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom {
    onCreateChatRoom {
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
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom {
    onUpdateChatRoom {
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
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom {
    onDeleteChatRoom {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
