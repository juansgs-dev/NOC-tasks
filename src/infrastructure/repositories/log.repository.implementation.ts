import { LogRepository } from "../../domain/repository/log.repository";
import { LogDatasource } from '../../domain/datasources/log.datasources';
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";


export class LogRepositoryImplementation implements LogRepository {

    constructor(
        private readonly logDatasource: LogDatasource
    ){}

    async saveLog(log: LogEntity): Promise<void> {
        return this.logDatasource.saveLog(log);
    }

    async getLogs(severitylevel: LogSeverityLevel): Promise<LogEntity[]> {
        return this.logDatasource.getLogs(severitylevel);
    }
}