# Blog analytics with loadash

Blogs are retrived from the third party api and used `loadash` for the analytics

## Run Locally

Clone the project

```bash
  git clone https://github.com/kmabhinai/blog-analytics-with-loadash
```

Go to the project directory

```bash
  cd blog-analytics-with-loadash
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NODE_ENV`

`PORT`

## API Reference

#### Get the statstics of the blogs

```http
  GET /api/blog-stats
```

#### Search the blog by the query

```http
  GET /api/blog-search?query=${string}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `string`  | `string` | Query for searching in the titles |

## Documentation

[Documentation](https://documenter.getpostman.com/view/24310853/2s9YJbzMqU#313c29a4-6191-4c85-9239-e937a310ff38)
