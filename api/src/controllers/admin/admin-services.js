const makeDeleteAdmin = function ({ removeAdmin }) {
    return async function deleteAdmin(httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        };
        try {
            const deleted = await removeAdmin({ id: httpRequest.params.id });
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

const makeGetAdmins = function ({ listAdmins }) {
    return async function getAdmins(httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        };
        try {
            const admins = await listAdmins({})
            return {
                headers,
                statusCode: 200,
                body: admins
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

const makeEditAdmin = function ({ editAdmin }) {
    return async function postEditAdmin(httpRequest) {
        try {
            const { ...adminInfo } = httpRequest.body;
            const toEdit = {
                ...adminInfo,
                id: httpRequest.params.id
            };
            const editedAdmin = await editAdmin(toEdit)
            return {
                headers: {
                    'Content-Type': 'application/json',
                    // 'Last-Modified': new Date(editedAdmin.modifiedOn).toUTCString()
                },
                statusCode: 200,
                body: { patched: editedAdmin }
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


const makeAddAdmin = function ({ addAdmin }) {
    return async function postAddAdmin(httpRequest) {
        try {
            const { ...adminInfo } = httpRequest.body
            const newAdmin = await addAdmin({
                ...adminInfo,
            })
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 201,
                body: { posted: newAdmin }
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

module.exports = { makeDeleteAdmin, makeGetAdmins, makeEditAdmin, makeAddAdmin };