module.exports = (sequelize, DataTypes) => {

    const Profile = sequelize.define("profile", {
        name: {
            type: DataTypes.STRING
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        about: {
            type: DataTypes.TEXT
        },
        bio: {
            type: DataTypes.TEXT
        },
        followerCount: {
            type: DataTypes.INTEGER
        },
        connectionCount: {
            type: DataTypes.INTEGER
        }
    
    })

    return Profile

}

// name: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   url: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   about: Sequelize.TEXT,
//   bio: Sequelize.TEXT,
//   location: Sequelize.STRING,
//   followerCount: Sequelize.INTEGER,
//   connectionCount: Sequelize.INTEGER