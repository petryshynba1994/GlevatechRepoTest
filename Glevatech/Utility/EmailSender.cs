using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.AspNetCore.Identity.UI.Services;
using MimeKit;

namespace Glevatech.Utility
{
    public class EmailSender : IEmailSender
    {
       

       public  Task SendEmailAsync(string email, string subject, string htmlMessage)
       {
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("Glevatech", "glevatech@outlook.com"));
            message.To.Add(new MailboxAddress("Отримувач", email));
            message.Subject = subject;

            var builder = new BodyBuilder();
            builder.HtmlBody = htmlMessage;
            message.Body = builder.ToMessageBody();

            using (var client = new SmtpClient())
            {
                client.Connect("smtp-mail.outlook.com", 587, SecureSocketOptions.StartTls);
                //client.Connect("smtp-mail.outlook.com", 587, true);
                client.Authenticate("glevatech@outlook.com", "Petryshynba1994");
                client.Send(message);
                client.Disconnect(true);
            }
            return Task.CompletedTask;
       }
    }
}
