# Nodemailer sample for moosend / Sitecore Send

This sample provides a sample of using Nodemailer to send mail through Moosend / Sitecore Send's SMTP Service.

## Prerequisites

- Node.js 18 or later
- Moosend or Sitecore Send SMTP Service

## How to setup

If you want to execute local environment, please execute following steps.

1. Clone this repository
2. Copy .env.local.example to **.env.local**

execute build command

```
npm run build
```

## .env.local

Please set following params in .env.local

| Param     | Description        |
| --------- | ------------------ |
| MAIL_USER | SMTP Username      |
| MAIL_PASS | SMTP Password      |
| MAIL_FROM | Sender Email       |
| MAIL_TO   | Test Email Address |

## Send test email

With the above settings completed, a test e-mail is sent by executing the following command.

```
npm run start
```

## Release history

2024.02.02 Initial Release
