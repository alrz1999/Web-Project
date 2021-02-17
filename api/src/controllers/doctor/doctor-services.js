const makeDeleteDoctor = function ({ removeDoctor }) {
    return async function deleteDoctor(httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        };
        try {
            const deleted = await removeDoctor({ id: httpRequest.params.id });
            return {
                headers,
                statusCode: deleted.deletedCount === 0 ? 404 : 200,
                body: { deleted }
            };
        } catch (e) {
            // TODO: Error logging
            console.log(e)
            return {
                headers,
                statusCode: 400,
                body: {
                    error: e.message
                }
            };
        }
    }
}

const makeGetDoctors = function ({ listDoctors }) {
    return async function getDoctors(httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        };
        try {
            const doctors = await listDoctors({})
            return {
                headers,
                statusCode: 200,
                body: doctors
            };
        } catch (e) {
            // TODO: Error logging
            console.log(e);
            return {
                headers,
                statusCode: 400,
                body: {
                    error: e.message
                }
            };
        }
    }
}

const makeEditDoctor = function ({ editDoctor }) {
    return async function postEditDoctor(httpRequest) {
        try {
            const { ...doctorInfo } = httpRequest.body;
            const toEdit = {
                ...doctorInfo,
                id: httpRequest.params.id
            };
            const editedDoctor = await editDoctor(toEdit)
            return {
                headers: {
                    'Content-Type': 'application/json',
                    // 'Last-Modified': new Date(editedDoctor.modifiedOn).toUTCString()
                },
                statusCode: 200,
                body: { patched: editedDoctor }
            };
        } catch (e) {
            // TODO: Error logging
            console.log(e)
            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 404,
                body: {
                    error: e.message
                }
            };
        }
    }
}


const makeAddDoctor = function ({ addDoctor }) {
    return async function postAddDoctor(httpRequest) {
        try {
            const { ...doctorInfo } = httpRequest.body
            const newDoctor = await addDoctor({
                ...doctorInfo,
            })
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 201,
                body: { posted: newDoctor }
            }
        } catch (e) {
            // TODO: Error logging
            console.log(e)
            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 400,
                body: {
                    error: e.message
                }
            }
        }
    }
}

const makeGetDoctor = function ({ getDoctor }) {
    return async function getDoctorById(httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        };
        try {
            const { id } = httpRequest.body;
            const doctor = await getDoctor(id)
            return {
                headers,
                statusCode: 200,
                body: doctor
            };
        } catch (e) {
            // TODO: Error logging
            console.log(e);
            return {
                headers,
                statusCode: 400,
                body: {
                    error: e.message
                }
            };
        }
    }
};

const makeLoginDoctor = function ({ doctorLogin }) {
    return async function loginDoctor(httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        };
        try {
            const { phoneNumber, password } = httpRequest.body;
            const token = await doctorLogin({ phoneNumber, password });
            return {
                headers,
                statusCode: 200,
                body: {
                    success: true,
                    token: token,
                    // expiresIn: tokenObject.expires
                }
            };
        } catch (e) {
            // TODO: Error logging
            console.log(e);
            return {
                headers,
                statusCode: 400,
                body: {
                    error: e.message
                }
            };
        }
    }
};

module.exports = { makeDeleteDoctor, makeGetDoctors, makeEditDoctor, makeAddDoctor, makeGetDoctor, makeLoginDoctor };