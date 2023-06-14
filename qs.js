//Find all the topics and tasks taught in the month of October:

db.topics.aggregate([
    {
        $lookup: {
            from: "tasks",
            localField: "_id",
            foreignField: "topic_id",
            as: "tasks"
        }
    },
    {
        $match: {
            "tasks.deadline": {
                $gte: ISODate("2022-10-01"),
                $lte: ISODate("2022-10-31")
            }
        }
    }
])

// 2 Find all the company drives that appeared between 15th Oct 2022 
//and 31st Oct 2022:

db.company_drives.find({
    date: {
        $gte: ISODate("2022-10-15"),
        $lte: ISODate("2022-10-31")
    }
})

// 3 Find all the company drives and students who appeared for the placement:

db.company_drives.aggregate([
    {
        $lookup: {
            from: "users",
            localField: "_id",
            foreignField: "drive_id",
            as: "students"
        }
    }
])

// 4 Find the number of problems solved by a user in codekata:

db.codekata.aggregate([
    {
        $match: {
            user_id: "<user_id>"
        }
    },
    {
        $group: {
            _id: "$user_id",
            problemsSolved: {
                $sum: 1
            }
        }
    }
])

//  5 Find all the mentors with a mentee count more than 15:

db.mentors.find({
    mentee_count: {
        $gt: 15
    }
})

// Find the number of users who were absent and didn't submit a task between 15th Oct 2022 and 31st Oct 2022

db.attendance.aggregate([
    {
        $lookup: {
            from: "tasks",
            localField: "user_id",
            foreignField: "user_id",
            as: "tasks"
        }
    },
    {
        $match: {
            $and: [
                { date: { $gte: ISODate("2020-10-15") } },
                { date: { $lte: ISODate("2020-10-31") } },
                { present: false },
                { "tasks.status": { $ne: "submitted" } }
            ]
        }
    }
])
