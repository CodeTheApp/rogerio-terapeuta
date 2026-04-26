// WhatsApp do consultório (Portugal). Em formato wa.me, sem '+' nem espaços.
export const WHATSAPP_NUMBER = '351926130470';

export function buildWhatsAppUrl(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
