import argon2 from "argon2"

const hashPassword=async(plainPassword)=>{
    const hash=await argon2.hash(plainPassword);
    return hash;
}

export default hashPassword;
