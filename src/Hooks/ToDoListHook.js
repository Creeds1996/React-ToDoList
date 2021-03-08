import { useReducer } from "react";

const ToDoListReducer = (state, action) => {
  switch (action.type) {
    case "AddTask":
      return {
        ...state,
        [action.progress]: state[action.progress].concat({
          TaskName: action.name,
          Progress: action.progress,
        }),
      };
    case "DeleteTask":
      return {
        ...state,
        [action.progress]: state[action.progress].filter((_, index) => {
          return index !== action.index;
        }),
      };
    case "EditTask":
      // return {
      //   ...state,
      //   [action.oProgress]: state[action.oProgress].map((element, index) => {
      //     if (index === action.oIndex) {
      //       return { TaskName: action.uTaskName, Progress: action.uProgress };
      //     } else {
      //       return { ...element };
      //     }
      //   }),
      // };
      return action.oProgress === action.uProgress
        ? {
            ...state,
            [action.oProgress]: state[action.oProgress].map(
              (element, index) => {
                if (index === action.oIndex) {
                  return {
                    TaskName: action.uTaskName,
                    Progress: action.uProgress,
                  };
                } else {
                  return { ...element };
                }
              }
            ),
          }
        : {
            ...state,
            [action.oProgress]: state[action.oProgress].filter((_, index) => {
              return index !== action.oIndex;
            }),
            [action.uProgress]: state[action.uProgress].concat({
              TaskName: action.uTaskName,
              Progress: action.uProgress,
            }),
          };
    default:
      return state;
  }
};

const useToDoHook = () => {
  const [ToDoData, Dispatch] = useReducer(ToDoListReducer, {
    NotStarted: [],
    InProgress: [],
    Completed: [],
  });

  const addTaskHandler = (name, progress) => {
    Dispatch({
      type: "AddTask",
      name: name,
      progress: progress,
    });
  };

  const editTaskHandler = (
    originalProgress,
    originalIndex,
    newProgress,
    newTaskName
  ) => {
    Dispatch({
      type: "EditTask",
      oProgress: originalProgress,
      oIndex: originalIndex,
      uProgress: newProgress || null,
      uTaskName: newTaskName,
    });
  };

  const deleteTaskHandler = (index, progress) => {
    Dispatch({
      type: "DeleteTask",
      index: index,
      progress: progress,
    });
  };

  return [ToDoData, addTaskHandler, deleteTaskHandler, editTaskHandler];
};

export default useToDoHook;
