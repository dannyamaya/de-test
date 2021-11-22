# Data Engineer Test

## _Danny Amaya - danny.amaya92@gmail.com_


Objective: A customer has the need to analyze a dataset of fire incidents in the city of San Francisco. In order to do so, it requests you to make the data available in a data warehouse and create a model to run dynamic queries efficiently

## Solution #1 - Dataprep

- Skills involved Dataprep, DataStorage and Bigquery
- No previous setup required
- No big SQL or Code Skills required
- Easy cron management
- Best option taking time as priority

Basically dataprep works as a spreedsheet with steroids, you can import from any source any size of data, then you can apply transformations for each column represented in the sheet with an intuitive programming language and then you execute job all through the UI, then with the same way you can schedule daily basis this.

## Solution #2 - Dataflow

- Skills involved Dataflow, DataStorage, Bigquery, Javascript
- It's required to have the UDF function, Json schema and tmp folder previously in Google Storage
- Dataflow concepts required
- Cron management variable, could be through Cloud Scheduler.
- Not the best option if time it's the priority
- Normally requires some framework to be scalable


Dataprep uses dataflow for their data processing being this it's engine, in this case the UDF was created in Javascript, this funciton creastes and push each line of the csv to bigquery applying any transformation that we may need, no transformations was required in this test.

## Querying the dataset

A view was created in bigquery with fire incidents by day, this could be consumed by any data analyst or visualization tool.
