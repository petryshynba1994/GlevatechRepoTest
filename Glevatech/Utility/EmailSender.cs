using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.AspNetCore.Identity.UI.Services;
using MimeKit;

namespace Glevatech.Utility
{
    public class EmailSender : IEmailSender
    {
        private readonly IConfiguration _config;
        public EmailSender(IConfiguration config)
        {
            _config = config;
        }

       public  Task SendEmailAsync(string email, string subject, string htmlMessage)
       {
            string? smtpServer = _config["EmailSender:SmtpServer"];
            int smtpPort = int.Parse(_config["EmailSender:SmtpPort"]);
            string? username = _config["EmailSender:Username"];
            string? password = _config["EmailSender:Password"];


            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("Glevatech", username));
            message.To.Add(new MailboxAddress("Отримувач", email));
            message.Subject = subject;

            var builder = new BodyBuilder();
            builder.HtmlBody = htmlMessage;
            message.Body = builder.ToMessageBody();

            using (var client = new SmtpClient())
            {
                client.Connect(smtpServer, smtpPort, SecureSocketOptions.StartTls);
                //client.Connect("smtp-mail.outlook.com", 587, true);
                client.Authenticate(username, password);
                client.Send(message);
                client.Disconnect(true);
            }
            return Task.CompletedTask;
       }
    }
}
