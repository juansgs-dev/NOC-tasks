import { envs } from "./config/plugin/envs.plugin";
import { Server } from "./presentation/server";

(async() => {
    main();
})();

function main() {
    Server.start();
    // console.log( envs.MAILER_EMAIL )
}