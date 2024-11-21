import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { create } from "zustand";

interface messagesType {
  messages: string;
  role: string;
  name: string;
  lastname: string;
  time: string;
  
}

interface IMessagesStoreState {
  messages: messagesType[];
}

interface IMessagesStore {
  MessagesStoreState: IMessagesStoreState;
  addMessageActions: (message: messagesType) => void;
}

const MessagesStore = create<IMessagesStore>()(
  persist(
    immer(
      devtools(
        (set) => ({
          MessagesStoreState: {
            messages: [],
          },
          addMessageActions: (message: messagesType) => {
            set(({ MessagesStoreState }) => {
              MessagesStoreState.messages.push(message);
            });
          },
        }),
        { name: "MessagesStore" }
      )
    ),
    {
      name: "messages",
    }
  )
);

export const useMessagesStore = () => {
  const {
    MessagesStoreState
    , addMessageActions
  } = MessagesStore();

  const getAllMessagesSelector = () => {
    return MessagesStoreState.messages.reverse();
  };

  return {
    actions: {
      addMessageActions,
    },
    selectors: {
      getAllMessagesSelector,
    },
  };
};
