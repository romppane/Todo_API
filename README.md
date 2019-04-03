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
<p>localhost:55555/todo/10</p>
<p>output: [
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

<h3>PUT</h3>
<p>In put method user can insert just the data that needs to be changed, inserting the whole object isn't necessary</p>
<p>example:
    {
        "what": "Change title",
        "who": "Developer",
        "in_progress": 1,
        "done": 0,
        "priority": 5
    }
    </p>


<h3>DELETE</h3>
    <p>Deletes by id.</p>

<h2>/priorities</h2>
<h3>GET</h3>
<p>[
    {
        "id": 1,
        "title": "very low"
    },
    {
        "id": 2,
        "title": "low"
    },
    {
        "id": 3,
        "title": "medium"
    },
    {
        "id": 4,
        "title": "high"
    },
    {
        "id": 5,
        "title": "very high"
    }
]</p>

<h2>/priorities/:id</h2>
<p>localhost:55555/priorities/1</p>
<p>[
    {
        "id": 1,
        "title": "very low"
    }
]</p>
