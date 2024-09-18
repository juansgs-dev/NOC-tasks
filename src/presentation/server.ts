import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImplementation } from "../infrastructure/repositories/log.repository.implementation";
import { CronService } from "./tasks/cron-service";
import { EmailService } from './email/email-service';
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { MongoLogDatasource } from "../infrastructure/datasources/mongo-log.datasource";

const LogRepository = new LogRepositoryImplementation(
    // new FileSystemDatasource(),
    new MongoLogDatasource()
);

const emailService = new EmailService();

export class Server {
    
    public static start() {

        console.log('Server started...');

        // const sendEmail = new SendEmailLogs(
        //   emailService, 
        //   fileSystemLogRepository,
        // ).execute(
        //   ['sebassossa02@gmail.com','juan_gonzalez82181@elpoli.edu.co']
        // )
        // emailService.sendEmailWithFileSystemLogs(
        //     ['sebassossa02@gmail.com','juan_gonzalez82181@elpoli.edu.co']
        // );

        CronService.createJob(
            '*/5 * * * * *',
            () => {
                const url = 'https://google.com'; 
                new CheckService(
                  LogRepository,
                    () => console.log(`this ${url} is ok`),
                    ( error ) => console.log(error)
                ).execute(url)

            }
        );

    }

}