/**
 * @Author George Pustovalov
 * @Project TG_BotToRecognizeTransport
 */
var TelegramBot = require('node-telegram-bot-api');
// Устанавливаем токен, который выдавал нам бот
var token = "6258443712:AAHuuH6eM_NN8KenvbYfJsJn2LlIb-5YQL0";
// Включить опрос сервера. Бот должен обращаться к серверу Telegram, чтобы получать актуальную информацию
// Подробнее: https://core.telegram.org/bots/api#getupdates
var bot = new TelegramBot(token, { polling: true });







        const WizardScene = require('/Users/georgijpustovalov/Downloads/Projects/node_modules/telegraf/lib/scenes/wizard')
        const Composer = require('composer');

        let OCR = require('node-ts-ocr');
        const fileManager = require('file-manager')

        var allFunctionalitiesFlag = true
        if(allFunctionalitiesFlag == true){

        var imageDownload;
        let OCR = require('node-ts-ocr');
        // const wizardScene = require('telegraf/scenes/wizard')
        var namedownloadImages;
        bot.setMyCommands([
            {command: '/start', description: 'Начало работы с ботом'},
            {command: '/upload', description: 'Загрузить фотографию'}
            // {command: '/info', description: 'Получить информацию о статусе заявки в службу поддержки'},
            // {command: '/escalation', description: 'Эскалировать запрос в СТП'},
            // {command: '/test', description: 'Эскалировать запрос в СТП'}
        ]).then(r => {
            console.log(" bot.setMyCommands OK")
        }
        ).catch(err =>{
            console.log(" bot.setMyCommands err ",err)
        })





        var downloadDir = '/Users/georgijpustovalov/Downloads/Projects/public/images';
        let something = ''
        var https = require('https')












        bot. on('message', function (msg) {

            console.log("user ", msg.from.id, " name ",msg.from.username);

            let url = `https://api.telegram.org/bot${token}/getFile?file_id=${msg.photo[2].file_id}`;
            console.log(url);



            var flag = true;

            if(flag == true){
                    var fs = require('fs'),
                        request = require('request');

                var downloadDir = '/Users/georgijpustovalov/Downloads/Projects/public/images';
                var https = require('https')
                bot.getFileLink(msg.photo[2].file_id).then( async (fileUri) => {

                    let time = process.hrtime();
                    let extension = fileUri.split('.').pop();
                    let newName = `${time[0]}${time[1]}.${extension}`;
                    let file = fs.createWriteStream(`${downloadDir}/${newName}`);
                    let request = await https.get(fileUri, (response) => {
                        response.pipe(file);

                    });

                    console.log("Image download - ", newName);
                    namedownloadImages = newName;
                    imageDownload = "/Users/georgijpustovalov/Downloads/Projects/public/images/" + newName;
                    file.on('finish', () =>{
                        // console.log('msg.text = ', file)
                        bot.sendMessage(msg.chat.id, "<b>Фотография принята!</b> "  , {parse_mode: "HTML"});
                        bot.sendMessage(msg.chat.id, "<b>Обрабатываю...</b> "  , {parse_mode: "HTML"});

                        runingScript();


                    })
                });
            };


            if (msg.text=="/start") {

                bot.sendMessage(msg.chat.id, "<b>Приветствую</b> \n <i>Я чат-бот для распознавания маршрутов общественного транспорта</i>" +
                    " \n <em>Сделайте фотографию автобуса и отправьте ее мне, чтобы я мог Вам помочь</em> \n "  , {parse_mode: "HTML"});

                // return;
            }


            if (msg.text=="/upload") {

                bot.sendMessage(msg.chat.id, "<b>Сделайте фотографию и отправьте ее мне - я знаю, как Вам помочь!</b>  " , {parse_mode: "HTML"})

            }
            var express = require('express');
            var app = express();

            async function runingScript() {
                // var spawn = require("child_process").spawn;
                // var process = spawn('python',["/Users/georgijpustovalov/Downloads/yolodetected_generatescript-main/dist/MainClassStarterExe",
                //     req.query.firstname,
                //     req.query.lastname]);
                //
                // process.stdout.on('data', function(data) {
                //     res.send(data.toString());
                // } )
                // const child = execFile('/Users/georgijpustovalov/Downloads/Projects/MainClassStarterExe.exe', [], (error, stdout, stderr) => {
                //     if (error) {
                //         throw error;
                //     }
                //     console.log(stdout);
                // });

                // data = "/Users/georgijpustovalov/Downloads/Projects/public/images", newName;

                console.log(imageDownload)

                // // let text = new Array();
                // let text = {
                //     title: "title 1",
                // };


                textOcr = OCR.Ocr.extractText(imageDownload);
                    // .then(result => console.log("textOcr", result))

                // const data = {text: textOcr};

                //
                // var stringify = JSON.stringify(textOcr);
                // fs.writeFileSync("./ocrData.json", stringify, 'utf-8');
                //

                let file_path = "/Users/georgijpustovalov/Downloads/Projects/";
                let file_name = "ocrData.json";


                fs.writeFileSync(file_path + file_name, JSON.stringify(textOcr));

                console.log("text --- ", fs);





                var exec = require('child_process').exec;


                var fun = function () {
                    console.log("fun() start");

                    ls = exec('/Users/georgijpustovalov/Downloads/yolodetected_generatescript-main/dist/MainClassStarterExe', function (err, data) {
                        console.log(err)
                        console.log(data.toString());
                    });


                    ls.stdout.on('data', function (data) {

                        console.log('stdout: ' + data);
                        ls.stdin.write(imageDownload + "\n", "utf-8");
                    });


                    ls.stdout.on('data', function (data) {
                        console.log('stdout: ' + data);
                        ls.stdin.write("bus\n", "utf-8");
                    });


                    ls.stderr.on('data', function (data) {
                        console.log('stderr: ' + data)
                    });

                    ls.on('exit', function (code) {
                        console.log('child process exited with code ' + code);

                        var resultAddedFile = getMostRecentFileNameCV2("/Users/georgijpustovalov/Downloads/webProjectCNN_jspCollab-master-2/src/main/webapp/downloadImages/loadFiles/cv2_detected_object")

                        console.log(resultAddedFile);

                        var photo = '/Users/georgijpustovalov/Downloads/webProjectCNN_jspCollab-master-2/src/main/webapp/downloadImages/loadFiles/cv2_detected_object/' + resultAddedFile;
                        bot.sendPhoto(msg.chat.id, photo, {caption: "Я распознал автобус на Вашем снимке"});

                        var photoResize = '/Users/georgijpustovalov/Downloads/webProjectCNN_jspCollab-master-2/src/main/webapp/downloadImages/loadFiles/yolo_detectedImages/' + resultAddedFile;
                        bot.sendPhoto(msg.chat.id, photoResize, {caption: "Я обрезал Ваше изображение, для того чтобы облегчить себе работу :)"});
                        bot.sendMessage(msg.chat.id, "<b>Распознаю маршрут...</b>  ", {parse_mode: "HTML"})
                        console.log("namedownloadImages ---" + namedownloadImages)
                    });
                }

                fun();

            }

        })


        var fs = require('fs'),
            path = require('path'),
            _ = require('underscore');


        function getMostRecentFileNameCV2(dir) {
            var files = fs.readdirSync(dir);

            return _.max(files, function (f) {
                var fullpath = path.join(dir, f);
                return fs.statSync(fullpath).ctime;
            });
        }
        function getMostRecentFileNameResizingImages(dir) {
            var files = fs.readdirSync(dir);

            return _.max(files, function (f) {
                var fullpath = path.join(dir, f);
                return fs.statSync(fullpath).ctime;
            });
        }

        }