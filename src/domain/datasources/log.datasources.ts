import { LogEntity, LogSeverityLevel } from '../Entities/log.entity';


export abstract class LogDatasource {
    abstract saveLog(log: LogEntity): Promise<void>;
    abstract getLogs(severitylevel: LogSeverityLevel): Promise<LogEntity[]>;
}