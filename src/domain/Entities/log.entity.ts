
export enum LogSeverityLevel {
    low = 'low',
    medium = 'medium',
    high = 'high'
}

export interface LogEntityOptions {
    level: LogSeverityLevel;
    message: string;
    origin: string; 
    createdAt?: Date;
}

export class LogEntity {

    public level: string;
    public message: string;
    public createdAt: Date;
    public origin: string; 

    constructor( options: LogEntityOptions) {
        const { level, message, origin, createdAt = new Date() } = options;
        this.level = level;
        this.message = message;
        this.origin = origin;
        this.createdAt = createdAt;
    }

    static fromJson = ( json: string ): LogEntity => {
        const { message, level, origin, createdAt } = JSON.parse(json);
        
        const log = new LogEntity({
            message,
            level, 
            origin,
            createdAt
        });
        return log;
    }

    static fromObject = ( object: { [key: string]: any } ): LogEntity => {
        const { message, level, createdAt, origin } = object;
        const log = new LogEntity({
          message, level, createdAt, origin
        });
        return log;
      }

}