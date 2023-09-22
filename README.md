
# TypeORM, Express.js and PostgreSQL CRUD api




## API Reference

#### Get all users

```http
  GET /users/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|  | `string` | **Required**. Get all Users |

#### Get user

```http
  GET /users/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |


#### Delete User

```http
  DELETE /users/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to delete |


#### Patch User

```http
  PATCH /users/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to edit |


## Authors

- [@KamolovFarrux2005](https://www.github.com/KamolovFarrux2005)
