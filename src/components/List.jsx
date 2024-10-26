import Item from "./Item";

export const List = ( {tasks, setTasks} ) => {
    return (
        <ul>
            {tasks.map( t => {
                return <Item key={t.id} {...t} tasks={tasks} setTasks={setTasks}/>;
            })}
        </ul>
    )
}