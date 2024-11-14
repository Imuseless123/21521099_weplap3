class DatabaService{
    constructor(DBName){
        this.DBName = DBName;
    }

    connectToDB(){
        console.log("connecting...");
    }

    getUserData(userId){
        console.log(`fetching data for user ${userId}...`);
    }
}

class MySQLDatabaService extends DatabaService{
    constructor(){
        super("MySQL");
    }

    connectToDB(){
        super.connectToDB();
        console.log("connected to MySQL Databa");
    }

    getUserData(userId){
        super.getUserData(userId);
        console.log(`fetched data for user ${userId} from ${this.DBName}`);
        return {id: userId, name: `user name (${this.DBName})`};
    }
}

class SQLServerDatabaService extends DatabaService{
    constructor(){
        super("SQLServer");
    }

    connectToDB(){
        super.connectToDB();
        console.log("connected to SQLServer Databa");
    }

    getUserData(userId){
        super.getUserData(userId);
        console.log(`fetched data for user ${userId} from ${this.DBName}`);
        return {id: userId, name: `user name (${this.DBName})`};
    }

    closeSQLServerConnection(){
        console.log("closed SQL Server Database connection");
    }
}

class PostgreSQLDatabaService extends DatabaService{
    constructor(){
        super("PostgreSQL");
    }

    connectToDB(){
        super.connectToDB();
        console.log("connected to PostgreSQL Databa");
    }

    getUserData(userId){
        super.getUserData(userId);
        console.log(`fetched data for user ${userId} from ${this.DBName}`);
        return {id: userId, name: `user name (${this.DBName})`};
    }

    rollBackTransaction(){
        console.log("rolled back Postgre SQL Database transaction");
    }
}

class UserManager{
    constructor(databaService){
        if (!(databaService instanceof DatabaService)) {
            throw new Error("Invalid parameter: DatabaService must be an instance of DatabaService");
        }
        this.databaService = databaService;
    }

    getUser(userId){
        if(this.databaService instanceof DatabaService){
            this.databaService.connectToDB();
            const user =  this.databaService.getUserData(userId);
            console.log(`user details: ${user}`);
            return user;
        }
        else{
            console.log(`no user found`);
            return null;
        }

    }
}

const userManager = new UserManager(new MySQLDatabaService());
userManager.getUser(1);