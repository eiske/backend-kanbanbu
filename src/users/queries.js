export const checkUserExists = "SELECT u FROM users u WHERE u.id = $1";
export const checkTaskTodoExists = "SELECT s FROM tasks_todo s WHERE s.id = $1";
export const checkTaskDoingExists =
    "SELECT s FROM tasks_doing s WHERE s.id = $1";
export const checkTaskCompletedExists =
    "SELECT s FROM tasks_completed s WHERE s.id = $1";
export const checkMarkdownExists = "SELECT s FROM markdown s WHERE s.id = $1";

// Board Tasks todo queries

export const getBoardTasksTodoQuery =
    "select U.id as user_id, U.name, U.email, T.id as task_id, T.title, T.description, T.priority, T.due_date_start, T.due_date_end from users as U inner join tasks_todo as T on U.id = T.users_id WHERE U.id = $1";
export const addBoardTasksTodoQuery =
    "insert into tasks_todo (id, title, description, priority, due_date_start, due_date_end, users_id)  values ($1, $2, $3, $4, $5, $6, $7)";
export const updateBoardTodoTasksQuery =
    "UPDATE tasks_todo SET title = $1, description = $2, priority = $3, due_date_start = $4, due_date_end = $5 WHERE id = $6";
export const deleteBoardTasksTodoQuery = "DELETE FROM tasks_todo WHERE id = $1";

// Board Tasks doing queries

export const getBoardTasksDoingQuery =
    "select U.id as user_id, U.name, U.email, T.id as task_id, T.title, T.description, T.priority, T.due_date_start, T.due_date_end from users as U inner join tasks_doing as T on U.id = T.users_id WHERE U.id = $1";
export const addBoardTasksDoingQuery =
    "insert into tasks_doing (id, title, description, priority, due_date_start, due_date_end, users_id)  values ($1, $2, $3, $4, $5, $6, $7)";
export const updateBoardTasksDoingQuery =
    "UPDATE tasks_doing SET title = $1, description = $2, priority = $3, due_date_start = $4, due_date_end = $5 WHERE id = $6";
export const deleteBoardTasksDoingQuery =
    "DELETE FROM tasks_doing WHERE id = $1";

// Board Tasks completed queries

export const getBoardTasksCompletedQuery =
    "select U.id as user_id, U.name, U.email, T.id as task_id, T.title, T.description, T.priority, T.due_date_start, T.due_date_end from users as U inner join tasks_completed as T on U.id = T.users_id WHERE U.id = $1";
export const addBoardTasksCompletedQuery =
    "insert into tasks_completed (id, title, description, priority, due_date_start, due_date_end, users_id)  values ($1, $2, $3, $4, $5, $6, $7)";
export const updateBoardTasksCompletedQuery =
    "UPDATE tasks_completed SET title = $1, description = $2, priority = $3, due_date_start = $4, due_date_end = $5 WHERE id = $6";
export const deleteBoardTasksCompletedQuery =
    "DELETE FROM tasks_completed WHERE id = $1";

// Subjects queries

export const getSubjectsQuery =
    "select U.id as user_id, U.name, U.email, S.id as subject_id, S.title from users as U inner join subjects as S on U.id = S.users_id WHERE U.id = $1";
export const addSubjectsQuery =
    "insert into subjects (title, users_id)  values ($1, $2)";
export const checkSubjectsExists = "SELECT s FROM subjects s WHERE s.id = $1";
export const updateSubjectsQuery =
    "UPDATE subjects SET title = $1 WHERE id = $2";
export const deleteSubjectsQuery = "DELETE FROM subjects WHERE id = $1";
export const deleteSubjectsMarkdownQuery =
    "DELETE FROM markdown WHERE subject_name = $1 and users_id = $2";

// Markdown queries

export const getMarkdownQuery =
    "select U.id as user_id, U.name, U.email, M.id as markdown_id, M.subject_name, M.annotation_block, M.page_name, M.url_id, M.page_id from users as U inner join markdown as M on U.id = M.users_id WHERE U.id = $1";
export const getMarkdownToExportQuery =
    "select U.id as user_id, U.name, U.email, M.id as markdown_id, M.subject_name, M.annotation_block, M.page_name, M.url_id, M.page_id from users as U inner join markdown as M on U.id = M.users_id WHERE U.id = $1 and M.subject_name = $2";
export const addMarkdownQuery =
    "insert into markdown (annotation_block, page_name, url_id, page_id, subject_name, users_id)  values($1, $2, $3, $4, $5, $6)";
export const updateMarkdownQuery =
    "UPDATE markdown SET annotation_block = $1, page_name = $2, url_id = $3, page_id = $4, subject_name = $5 WHERE id = $6";
export const deleteMarkdownQuery = "DELETE FROM markdown WHERE id = $1";
