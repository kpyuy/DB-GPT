from dbgpt.core.awel import DAG, HttpTrigger, MapOperator, setup_dev_environment

with DAG("awel_hello_world") as dag:
    trigger_task = HttpTrigger(endpoint="/awel_tutorial/hello_world")
    task = MapOperator(map_function=lambda x: f"Hello, world!")
    trigger_task >> task

setup_dev_environment([dag], port=5555)