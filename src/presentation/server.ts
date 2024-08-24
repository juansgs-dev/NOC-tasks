import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImplementation } from "../infrastructure/repositories/log.repository.implementation";
import { CronService } from "./tasks/cron-service";
import { EmailService } from './email/email-service';

const fileSystemLogRepository = new LogRepositoryImplementation(
    new FileSystemDatasource()
);

export class Server {
    
    public static start() {

        console.log('Server started...');

        const emailService = new EmailService();

        emailService.sendEmail({
            to: 'juan_gonzalez82181@elpoli.edu.co',
            subject: 'Prueba logs system',
            htmlBody: `
            <h3>Logs Sistema</h3>
            <p>Ver logs</p>
            `
        });

        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const url = 'https://google.com'; 
        //         new CheckService(
        //             fileSystemLogRepository,
        //             () => console.log(`this ${url} is ok`),
        //             ( error ) => console.log(error)
        //         ).execute(url)

        //     }
        // );

    }

}