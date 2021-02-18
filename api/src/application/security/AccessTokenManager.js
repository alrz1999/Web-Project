const makeGenerateToken = function ({ jwtTokenManager }) {
    return async function generateToken({ ...payload }) {
        const result = await jwtTokenManager.generateToken({ payload });
        return `Bearer ${result}`;
    }
}

const makeDecodeToken = function ({ jwtTokenManager }) {
    return async function decodeToken({ token }) {
        const result = await jwtTokenManager.decodeToken({ token });
        return result;
    }
}


const accessTokenService = {
    makeGenerateToken,
    makeDecodeToken
};

module.exports = { accessTokenService, makeDecodeToken, makeGenerateToken };