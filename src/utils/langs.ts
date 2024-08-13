export interface Texts {
  [key: string]: {
    greeting: string;
    description: string;
    appointment: string;
    teamtitle: string;
    team: string;
    bookwith: string;
  };
}

export const texts: Texts = {
  en: {
    greeting: "YOUR TRUSTED BARBER SHOP",
    description: "\
    Our team is made up of masters in the art of transformation, ready to create a unique look that celebrates your individuality.\
    After all, we want you to express your true essence.\
    Come visit us and discover how we can help you manifest the best version of yourself, one scissor at a time and that's it.",
    appointment: "BOOK AN APPOINTMENT",
    teamtitle: "TEAM",
    team: "MEET THE FAMILY",
    bookwith: "Book with",
  },
  pt: {
    greeting: "A SUA BARBEARIA DE CONFIANÇA",
    description: "\
    Nossa equipa é composta por mestres na arte da transformação, prontos para criar um visual único que celebra a tua individualidade.\
    Afinal, queremos que expresses a tua verdadeira essência.\
    Vem nos visitar e descobre como podemos ajudar-te a manifestar a tua melhor versão, uma tesourada de cada vez e já está.",
    appointment: "AGENDAR AGORA",
    teamtitle: "EQUIPA",
    team: "CONHEÇA A FAMÍLIA",
    bookwith: "Agendar com",
  }
};