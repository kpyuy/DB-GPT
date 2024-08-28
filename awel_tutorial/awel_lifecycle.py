import asyncio
from dbgpt.core.awel import DAG, MapOperator

class MyLifecycleTask(MapOperator[str, str]):
    async def before_dag_run(self):
        print("Before DAG run")

    async def after_dag_end(self, event_loop_task_id):
        print("After DAG end")

    async def map(self, x: str) -> str:
        return f"Hello, {x}!"

with DAG("awel_lifecycle_hooks") as dag:
    task = MyLifecycleTask()

print(asyncio.run(task.call("world")))