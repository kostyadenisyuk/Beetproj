import React, { Component } from "react";

// Modules

import { MdDelete, MdEdit } from "react-icons/md";
import { nanoid } from "nanoid";

// Components

// import { ApplicationShell } from "../components/ApplicationShell";
// import { ReactIcon } from "../../../components/ReactIcon";
// import { PageTitle } from "../components/PageTitle";
import { EditModal } from "./components/EditModal";

// Styles

import "./styles.scss";

// ----------------

export class TodoListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditModalOpen: false,
      inputValue: "",
      modalData: {},
      todoList: [],
    };
  }

  setInputValue = (value) => {
    this.setState({ inputValue: value });
  };

  addTodo = () => {
    this.setState((prevState) => ({
      todoList: [
        {
          completed: false,
          name: this.state.inputValue,
          id: nanoid(),
        },
        ...prevState.todoList,
      ],
    }));
  };

  removeTodo = (id) => {
    this.setState((prevState) => ({
      todoList: prevState.todoList.filter((todo) => todo.id !== id),
    }));
  };

  toggleComplete = (_value, id) => {
    this.setState((prevState) => ({
      todoList: prevState.todoList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    }));
  };

  toggleModal = () => {
    this.setState((prevState) => ({
      isEditModalOpen: !prevState.isEditModalOpen,
    }));
  };

  onShowEditModal = (todo) => {
    this.setState({
      modalData: todo,
    });

    this.toggleModal();
  };

  onSaveHandler = (newValue, id) => {
    this.setState(
      (prevState) => ({
        todoList: prevState.todoList.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              name: newValue,
            };
          } else {
            return item;
          }
        }),
      }),
      () => this.toggleModal()
    );
  };

  render() {
    const { todoList, inputValue, isEditModalOpen, modalData } = this.state;

    const todoUncompletedList = todoList.filter((item) => !item.completed);
    const todoCompletedList = todoList.filter((item) => item.completed);
    const uncompletedCount = todoUncompletedList.length;
    const completedCount = todoCompletedList.length;

    return (
      <>
        {/* <ApplicationShell> */}
        {/* <PageTitle title="Todo list example" /> */}

        <div className="todo-list__input-block">
          <input
            placeholder="Enter todo name"
            onChange={(event) => this.setInputValue(event.target.value)}
            name="todo-input"
            value={inputValue}
          />

          <button onClick={this.addTodo}>Add todo</button>
        </div>

        <div className="todo-list__lists">
          <div className="todo-list__wrapper todo-list__wrapper--right-padding">
            <h3 className="todo-list__header">{`Todos ${uncompletedCount}:`}</h3>

            {!!todoUncompletedList.length ? (
              todoUncompletedList.map((todo) => {
                return (
                  <div key={todo.id} className="todo-list__todo">
                    <div className="todo-list__todo-info">
                      <p
                        className="todo-list__todo-info-text"
                        title={todo.name}
                      >
                        {todo.name}
                      </p>

                      <input
                        className="todo-list__todo-info-checkbox"
                        checked={todo.completed}
                        onChange={(event) =>
                          this.toggleComplete(event.target.value, todo.id)
                        }
                        type="checkbox"
                      />
                    </div>

                    <button
                      className="todo-list__todo-btn todo-list__todo-btn--edit"
                      onClick={() => this.onShowEditModal(todo)}
                    >
                      {/* <ReactIcon size="xl"> */}
                      <MdEdit />
                      {/* </ReactIcon> */}
                    </button>

                    <button
                      className="todo-list__todo-btn todo-list__todo-btn--remove"
                      onClick={() => this.removeTodo(todo.id)}
                    >
                      {/* <ReactIcon size="xl"> */}
                      <MdDelete />
                      {/* </ReactIcon> */}
                    </button>
                  </div>
                );
              })
            ) : (
              <div className="todo-list__empty-block">No todos</div>
            )}
          </div>

          <div className="todo-list__wrapper todo-list__wrapper--left-padding">
            <h3 className="todo-list__header">{`Complete todos ${completedCount}:`}</h3>

            {!!todoCompletedList.length ? (
              todoCompletedList.map((todo) => {
                return (
                  <div key={todo.id} className="todo-list__todo">
                    <div className="todo-list__todo-info">
                      <p
                        className="todo-list__todo-info-text"
                        title={todo.name}
                      >
                        {todo.name}
                      </p>
                    </div>

                    <button
                      className="todo-list__todo-btn todo-list__todo-btn--remove"
                      onClick={() => this.removeTodo(todo.id)}
                    >
                      {/* <ReactIcon size="xl"> */}
                      <MdDelete />
                      {/* </ReactIcon> */}
                    </button>
                  </div>
                );
              })
            ) : (
              <div className="todo-list__empty-block">No completed todos</div>
            )}
          </div>
        </div>
        {/* </ApplicationShell> */}

        {isEditModalOpen && modalData.name && (
          <EditModal
            onClose={this.toggleModal}
            onSave={this.onSaveHandler}
            title="Edit todo modal"
            data={modalData}
            open={isEditModalOpen}
          />
        )}
      </>
    );
  }
}
