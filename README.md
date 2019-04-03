# Todo_API
Node.js todo api

<h1>Api calls and routes</h1>
<p>All calls will return status code 400 on failure. POST, PUT and DELETE methods return status code 200 on success.</p>

<h2>/todo</h2>

<h3>GET</h3>

<p>[
    {
        "id": 5,
        "what": "Bake cookies",
        "who": "Maija Meikäläinen",
        "in_progress": 1,
        "done": 0,
        "due": "2019-03-31T21:00:00.000Z",
        "priority": 1
    },
    {
        "id": 6,
        "what": "Buy groceries",
        "who": "Maija Meikäläinen",
        "in_progress": 1,
        "done": 0,
        "due": "2019-03-31T21:00:00.000Z",
        "priority": 5
    },
    {
        "id": 7,
        "what": "Go to sleep",
        "who": "Maija Meikäläinen",
        "in_progress": 0,
        "done": 0,
        "due": "2019-04-02T21:00:00.000Z",
        "priority": 1
    },
    {
        "id": 9,
        "what": "Do laundry",
        "who": "Maija Meikäläinen",
        "in_progress": 0,
        "done": 0,
        "due": "2019-04-01T21:00:00.000Z",
        "priority": 5
    },
    {
        "id": 10,
        "what": "Drink beer",
        "who": "Matti Meikäläinen",
        "in_progress": 0,
        "done": 1,
        "due": "2019-03-30T22:00:00.000Z",
        "priority": 5
    }
]</p>

<h3>POST</h3>

<p>input:
    {
        "what": "Drink beer",
        "who": "Matti Meikäläinen",
        "in_progress": 0,
        "done": 1,
        "due": "2019-03-31",
        "priority": 5
    }
</p>
<h2>/todo/:id</h2>

<h3>GET</h3>

<h3>PUT</h3>
<p>In put method user can insert only data that needs to be changed, inserting the whole object isn't necessary</p>
<p>example:
    {
        "what": "Change title",
        "who": "Developer",
        "in_progress": 1,
        "done": 0,
        "priority": 5
    }


<h3>DELETE</h3>
    <p>Deletes by id.</p>
