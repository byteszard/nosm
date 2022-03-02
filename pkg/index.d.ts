/* tslint:disable */
/* eslint-disable */
/**
* @returns {string}
*/
export function sm4_generate_key(): string;
/**
* @returns {string}
*/
export function sm4_generate_iv(): string;
/**
* @param {string} key
* @param {string} plain
* @returns {string}
*/
export function sm4_encrypt_ecb(key: string, plain: string): string;
/**
* @param {string} key
* @param {string} cipher
* @returns {string}
*/
export function sm4_decrypt_ecb(key: string, cipher: string): string;
/**
* @param {string} key
* @param {string} iv
* @param {string} plain
* @returns {string}
*/
export function sm4_encrypt_cbc(key: string, iv: string, plain: string): string;
/**
* @param {string} key
* @param {string} iv
* @param {string} cipher
* @returns {string}
*/
export function sm4_decrypt_cbc(key: string, iv: string, cipher: string): string;
/**
* @param {string} key
* @param {string} iv
* @param {string} plain
* @returns {string}
*/
export function sm4_encrypt_cfb(key: string, iv: string, plain: string): string;
/**
* @param {string} key
* @param {string} iv
* @param {string} cipher
* @returns {string}
*/
export function sm4_decrypt_cfb(key: string, iv: string, cipher: string): string;
/**
* @param {string} key
* @param {string} iv
* @param {string} plain
* @returns {string}
*/
export function sm4_encrypt_ofb(key: string, iv: string, plain: string): string;
/**
* @param {string} key
* @param {string} iv
* @param {string} cipher
* @returns {string}
*/
export function sm4_decrypt_ofb(key: string, iv: string, cipher: string): string;
/**
* @param {string} key
* @param {string} iv
* @param {string} plain
* @returns {string}
*/
export function sm4_encrypt_ctr(key: string, iv: string, plain: string): string;
/**
* @param {string} key
* @param {string} iv
* @param {string} cipher
* @returns {string}
*/
export function sm4_decrypt_ctr(key: string, iv: string, cipher: string): string;
/**
* @param {string} plain
* @returns {string}
*/
export function sm3_digest(plain: string): string;
/**
* @returns {KeyPair}
*/
export function sm2_generate_keypair(): KeyPair;
/**
* @param {string} public_key
* @param {string} plain
* @returns {string}
*/
export function sm2_encrypt(public_key: string, plain: string): string;
/**
* @param {string} private_key
* @param {string} cipher
* @returns {string}
*/
export function sm2_decrypt(private_key: string, cipher: string): string;
/**
* @param {string} public_key
* @param {string} plain
* @returns {string}
*/
export function sm2_encrypt_c1c2c3(public_key: string, plain: string): string;
/**
* @param {string} private_key
* @param {string} cipher
* @returns {string}
*/
export function sm2_decrypt_c1c2c3(private_key: string, cipher: string): string;
/**
* @param {string} private_key
* @param {string} public_key
* @param {string} plain
* @returns {string}
*/
export function sm2_sign(private_key: string, public_key: string, plain: string): string;
/**
* @param {string} public_key
* @param {string} plain
* @param {string} signature
* @returns {boolean}
*/
export function sm2_verify(public_key: string, plain: string, signature: string): boolean;
/**
*/
export class KeyPair {
  free(): void;
/**
* @returns {string}
*/
  private_key(): string;
/**
* @returns {string}
*/
  public_key(): string;
}
