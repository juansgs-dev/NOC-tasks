import fs from 'fs';
import { LogDatasource } from "../../domain/datasources/log.datasources";
import { LogEntity, LogSeverityLevel } from "../../domain/Entities/log.entity";


export class FileSystemDatasource implements LogDatasource {

    private readonly logPath ='logs/';
    private readonly lowLogPath = 'logs/logs-low.log';
    private readonly mediumLogPath = 'logs/logs-medium.log';
    private readonly highLogPath = 'logs/logs-high.log';

    constructor() {
        this.createLogsFiles();
    }

    private createLogsFiles = () => {
        if (!fs.existsSync(this.logPath)) {
            fs.mkdirSync(this.logPath);
        }

        [
            this.lowLogPath,
            this.mediumLogPath,
            this.highLogPath
        ].forEach( path => {
            if (fs.existsSync(path)) return;

            fs.writeFileSync(path, '');
        } )


    }

    async saveLog(newLog: LogEntity): Promise<void> {

        const LogAsJson = `${JSON.stringify(newLog)}\n `

        fs.appendFileSync( this.lowLogPath, LogAsJson);

        if ( newLog.level === LogSeverityLevel.low ) return;
        
        if (newLog.level === LogSeverityLevel.medium ) {
            fs.appendFileSync( this.mediumLogPath, LogAsJson);
        } else {
            fs.appendFileSync( this.highLogPath, LogAsJson);
        }

        
    }

    getLogs(severitylevel: LogSeverityLevel): Promise<LogEntity[]> {
        throw new Error('method no implement');
    }

}