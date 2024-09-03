import inquirer from "inquirer";
import qr from "qr-image"
import fs from "fs";

inquirer
    .prompt([
        {
            message: "Type URL",
            name: "URL",
        },
    ])

    .then((answer)=>{
        const url = answer.URL;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream("qr-img1.png"));
    })

