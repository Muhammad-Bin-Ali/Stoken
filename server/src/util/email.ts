import AWS from "aws-sdk";

const config: AWS.SES.ClientConfiguration = {
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
  region: "us-east-1",
};

const SES = new AWS.SES(config);

export function sendEmail(recipiant: string, subject: string, body: string) {
  const options: AWS.SES.SendEmailRequest = {
    Source: process.env.AWS_SES_EMAIL_ADDRESS!,
    Destination: {
      ToAddresses: [recipiant],
    },
    ReplyToAddresses: [],
    Message: {
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: body,
        },
      },
    },
  };

  return SES.sendEmail(options).promise();
}

export function sendConfirmationEmail(recipiant: string, code: string) {
  // when testing, you don't have to check your email
  if (process.env.NODE_ENV !== "production") {
    console.log(`Your email verification code is ${code}'`);
  }

  code = code.toUpperCase();

  let body = `To verify your email, please enter the code <b>${code}</b> on our site.\nIf you did not create an account with us, please ignore this message.`;
  return sendEmail(recipiant, `Your confirmation code is ${code}`, body);
}
