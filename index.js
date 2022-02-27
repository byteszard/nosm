import * as wsm4n from "./pkg";

console.log("==========================SM3测试==========================");
let hash = wsm4n.sm3_digest("abc");
console.log("abc摘要：" + hash);
console.log("")

console.log("==========================SM2测试==========================");

console.log("1---SM2随机秘钥对---");
let pair = wsm4n.sm2_generate_keypair();
console.log("私钥：" + pair.private_key());
console.log("公钥：" + pair.public_key());
console.log("")

console.log("2---SM2加密解密(c1c3c2)---");
let p1 = "兽人永不为奴，我们终将成王。——加尔鲁什·地狱咆哮";
console.log("明文：" + p1);
let c1 = wsm4n.sm2_encrypt(pair.public_key(), p1);
console.log("密文：" + c1);
let t1 = wsm4n.sm2_decrypt(pair.private_key(), c1);
console.log("解密：" + t1);
console.log("")

console.log("3---SM2加密解密(c1c2c3)---");
let p2 = "圣光会抛弃你的，英雄，就像抛弃我那样。——巫妖王";
console.log("明文：" + p2);
let c2 = wsm4n.sm2_encrypt_c1c2c3(pair.public_key(), p2);
console.log("密文：" + c2);
let t2 = wsm4n.sm2_decrypt_c1c2c3(pair.private_key(), c2);
console.log("解密：" + t2);
console.log("")

console.log("4---SM2签名验签---");
let p3 = "没人生来杰出（No one breather who is worthier）——奥格瑞姆·毁灭之锤";
console.log("明文：" + p3);
let signature = wsm4n.sm2_sign(pair.private_key(), pair.public_key(), p3);
console.log("签名：" + signature);
let valid = wsm4n.sm2_verify(pair.public_key(), p3, signature);
console.log("验签：" + valid);
console.log("")

console.log("==========================SM4测试==========================");

console.log("1---SM4随机秘钥和初始化向量---");
let key = wsm4n.sm4_generate_key();
let iv = wsm4n.sm4_generate_iv();
console.log("密钥：" + key);
console.log("向量：" + iv);
console.log("")
let p4 = "记住‘被遗忘者’的含义，我们既非生者也非死者，我们将被活着的和死去的人遗忘。我们回到了曾经告别的世界上，但是却永远无法回到我们曾经活着的那些日子，永远无法回到那些我们曾经爱过的人的身边。我们是存在也是诅咒，因此我们遗忘过去，并且被过去遗忘。——希尔瓦娜斯";
console.log("明文：" + p4);
console.log("")

console.log("2---SM4加密解密(ECB)---");
let cc1 = wsm4n.sm4_encrypt_ecb(key, p4);
console.log("密文：" + cc1);
console.log("解密：" + wsm4n.sm4_decrypt_ecb(key, cc1));
console.log("");

console.log("3---SM4加密解密(CBC)---");
let cc2 = wsm4n.sm4_encrypt_cbc(key, iv, p4);
console.log("密文：" + cc2);
console.log("解密：" + wsm4n.sm4_decrypt_cbc(key, iv, cc2));
console.log("");


console.log("4---SM4加密解密(CFB)---");
let cc3 = wsm4n.sm4_encrypt_cfb(key, iv, p4);
console.log("密文：" + cc3);
console.log("解密：" + wsm4n.sm4_decrypt_cfb(key, iv, cc3));
console.log("");


console.log("5---SM4加密解密(OFB)---");
let cc4 = wsm4n.sm4_encrypt_ofb(key, iv, p4);
console.log("密文：" + cc4);
console.log("解密：" + wsm4n.sm4_decrypt_ofb(key, iv, cc4));
console.log("");


console.log("5---SM4加密解密(CTR)---");
let cc5 = wsm4n.sm4_encrypt_ctr(key, iv, p4);
console.log("密文：" + cc5);
console.log("解密：" + wsm4n.sm4_decrypt_ctr(key, iv, cc5));
console.log("");
