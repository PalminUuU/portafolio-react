import $, { each, valHooks } from "jquery";
import React, { useState, useEffect } from "react";
import { TodoList } from "../components/TodoList";
import { TodoAdd } from "../components/TodoAdd";
import { useTodo } from "../hooks/useTodo";
import "../assets/css/todo.css"

function AboutPage(props) {

    const {todos,
        todosCount,
        pendingTodosCount,
        handleCompleteTodo,
        handleDeleteTodo,
        handleNewTodo,
        handleUpdateTodo, } = useTodo()
  return (
    <>
      <div className="card-to-do">
        <h1>Lista de Compras</h1>
        <div className="counter-todos">
          <h3>N° Artículos: {todosCount}</h3>
          <h3>Pendientes: {pendingTodosCount}</h3>
        </div>

        <div className="add-todo">
            <h3>Agregar Artículo</h3>
            <TodoAdd handleNewTodo={handleNewTodo}/>
        </div>
        <TodoList
        todos={todos}
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleUpdateTodo={handleUpdateTodo}
        />
      </div>
    </>
  );
}

export default AboutPage;
