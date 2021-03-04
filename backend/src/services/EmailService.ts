interface IMailTo {
  name: string;
  email: string;
}

interface IMailMenssage {
  subject: string;
  body: string;
  attachment?: string[];
}

interface IMessageDTO {
  to: IMailTo;
  message: IMailMenssage;
}

interface IEmailService {
  sendMail(request: ImessageDTO): void;
}

// DTO = Data Transfer Object (DDD)

class EmailService implements IEmailService {
  sendMail({ to, message }: IMessageDTO) {
    console.log(`Email enviado para ${to.name}: ${message.subject}`);
  }
}

export default EmailService;