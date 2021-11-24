import { parse } from './parse'

/**
 * @param {string} value número de telefone
 */
export function formatWhatsapp(value: string): string {
  value = parse(value)
  if (!value) return null

  if (value.substring(0, 2) > '28' && value.length == 11) {
    value = value.substring(0, 2) + value.substring(3)
  }

  value = '55' + value
  return value
}
