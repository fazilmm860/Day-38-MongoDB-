//Collection: users

//Fields: _id, name, email, role

// use ZenClass  / / Switch to your desired database or create a new one

db.createCollection("users")

db.users.insertMany([
    {
        name: "John Doe",
        email: "johndoe@example.com",
        role: "user"

    },
    {
        name: "Jane Smith",
        email: "janesmith@example.com",
        role: "admin"

    },

    {
        name: "Smith",
        email: "smith@example.com",
        role: "admin"

    },
    {
        name: "Doe",
        email: "doe@example.com",
        role: "user"

    },
])

//     Collection: codekata

// Fields: _id, user_id, problem_id, date, status, etc.
db.createCollection("codekata")

db.codekata.insertMany([
    {
        user_id: "user1",
        problem_id: "problem1",
        date: ISODate("2022-09-12"),
        status: "completed"

    },
    {
        user_id: "user2",
        problem_id: "problem2",
        date: ISODate("2022-10-02"),
        status: "in progress"

    },

])

// Collection: attendance

// Fields: _id, user_id, date, present, etc.

db.createCollection("attendance")

db.attendance.insertMany([
    {
        user_id: "user1",
        date: ISODate("2022-09-12"),
        present: true

    },
    {
        user_id: "user2",
        date: ISODate("2022-10-02"),
        present: false

    },

])

// Collection: topics

// Fields: _id, name, description

db.createCollection("topics")

db.topics.insertMany([
    {
        name: "Topic 1",
        description: "Description for Topic 1"

    },
    {
        name: "Topic 2",
        description: "Description for Topic 2"

    },

])

// Collection: tasks

// Fields: _id, topic_id, title, description, deadline

db.createCollection("tasks")

db.tasks.insertMany([
    {
        topic_id: "topic1",
        title: "Task 1",
        description: "Description for Task 1",
        deadline: ISODate("2022-12-01")

    },
    {
        topic_id: "topic2",
        title: "Task 2",
        description: "Description for Task 2",
        deadline: ISODate("2022-10-02")

    },

])

// Collection: company_drives

// Fields: _id, name, date, description

db.createCollection("company_drives")

db.company_drives.insertMany([
    {
        name: "Company Drive 1",
        date: ISODate("2022-10-15"),
        description: "Description for Company Drive 1"

    },
    {
        name: "Company Drive 2",
        date: ISODate("2022-10-20"),
        description: "Description for Company Drive 2"

    },

])

// Collection: mentors

// Fields: _id, name, email, mentee_count

db.mentors.insertMany([
    {
        name: "Manikandan",
        email: "manikandan@example.com",
        mentee_count: 10
        // Add more fields as needed
    },
    {
        name: "Anbualagan",
        email: "anbualagan@example.com",
        mentee_count: 20
        // Add more fields as needed
    },
])