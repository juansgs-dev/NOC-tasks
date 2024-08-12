import { LogEntity, LogSeverityLevel } from '../Entities/log.entity';


export abstract class LogRepository {
    abstract saveLog(log: LogEntity): Promise<void>;
    abstract getLogs(severitylevel: LogSeverityLevel): Promise<LogEntity[]>;
}