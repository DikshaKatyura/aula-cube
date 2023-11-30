const EmptyTaskList = () => {
  return (
    <div className="card w-50 m-auto p-2">
      <h3 className="text-center">
        Your Task List is <span className="text-danger">Empty!</span>
      </h3>
      <p className="text-center text-success">
        <strong>Add Task for organizing your upcoming productive day!</strong>
      </p>
    </div>
  );
};

export default EmptyTaskList;
