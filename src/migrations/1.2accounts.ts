import * as Sequelize from 'sequelize';

const tableName = 'Accounts';


// Up function is to create a new table and define its structure
export async function up(i:any){
    const queryInterface = i.getQueryInterface() as Sequelize.QueryInterface;
    queryInterface.createTable(tableName, {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            unique: true,
            primaryKey: true
        },
        Type: {
            type: Sequelize.CHAR(200),
            allowNull: false,
        },
        Name: {
            type: Sequelize.CHAR(200),
            allowNull: false
        },
        Balance: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        UserId: {
            type: Sequelize.INTEGER,
            references:{
                model: 'Users',
                key: 'id'
            }
        }
    })
};

// Down function is to drop the table
export async function down(i: any) {
    const queryInterface = i.getQueryInterface() as Sequelize.QueryInterface;
    queryInterface.dropTable(tableName);
}