import fs from 'fs';
import { LogDatasource } from "../../domain/datasources/log.datasources";
import { LogEntity, LogSeverityLevel } from "../../domain/Entities/log.entity";


export class FileSystemDataource implements LogDatasource {

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
            this.logPath,
            this.mediumLogPath,
            this.highLogPath
        ].forEach( path => {
            if (fs.existsSync(path)) return;

            fs.writeFileSync(path, '');
        } )


    }

    saveLog(log: LogEntity): Promise<void> {
        throw new Error('method no implement');
    }

    getLogs(severitylevel: LogSeverityLevel): Promise<LogEntity[]> {
        throw new Error('method no implement');
    }

}