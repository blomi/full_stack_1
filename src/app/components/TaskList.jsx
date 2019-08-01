import React from "react";
import { connect } from "react-redux";
import { requestTaskCreation } from "../store/mutations";
import { Link } from "react-router-dom";

export const TaskList = ({ tasks, name, id, createNewTask }) => (
  <>
    <h3>{name}</h3>
    <div>
      {tasks.map(task => (
        <Link key={task.id} to={`/task/${task.id}`}>
          <div>{task.name}</div>
        </Link>
      ))}
    </div>
    <button onClick={e => createNewTask(id)}>Add new </button>
  </>
);

const mapStateToProps = (state, ownProps) => {
  let groupId = ownProps.id;
  return {
    name: ownProps.name,
    id: groupId,
    tasks: state.tasks.filter(task => task.group === groupId)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createNewTask(id) {
      console.log("creating new task... ", id);
      dispatch(requestTaskCreation(id));
    }
  };
};

export const ConnectedTaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
