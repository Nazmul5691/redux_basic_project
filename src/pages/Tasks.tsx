import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TasksCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTasks, updateFilter } from "@/redux/features/tasks/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";


export default function Tasks() {

    // const tasks = useAppSelector((state) => state.tasks.task)
    const tasks = useAppSelector(selectTasks)

    console.log(tasks);

    const dispatch = useAppDispatch();


    return (
        <div>
            <div className="flex justify-end my-4 ">
                <h1 className="mr-auto">Task</h1>
                <Tabs defaultValue="all" className="mr-4">
                    <TabsList>
                        <TabsTrigger onClick={() => dispatch(updateFilter("all"))} value="all">All</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter("low"))} value="low">Low</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter("medium"))} value="medium">Medium</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter("high"))} value="high">High</TabsTrigger>
                    </TabsList>
                </Tabs>
                <AddTaskModal />
            </div>
            <div className="flex flex-col gap-4">
                {
                    tasks.map((task) => (
                        <TaskCard task={task} key={task.id} />
                    ))
                }
            </div>
        </div>
    );
}