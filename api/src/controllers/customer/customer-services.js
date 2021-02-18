const makeDeleteCustomer = function ({ removeCustomer }) {
    return async function deleteCustomer(httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        };
        try {
            const deleted = await removeCustomer({ id: httpRequest.params.id });
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

const makeGetCustomers = function ({ listCustomers }) {
    return async function getCustomers(httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        };
        try {
            const customers = await listCustomers()
            return {
                headers,
                statusCode: 200,
                body: customers
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

const makeEditCustomer = function ({ editCustomer }) {
    return async function postEditCustomer(httpRequest) {
        try {
            const { ...customerInfo } = httpRequest.body;
            const toEdit = {
                ...customerInfo,
                id: httpRequest.params.id
            };
            const editedCustomer = await editCustomer(toEdit)
            return {
                headers: {
                    'Content-Type': 'application/json',
                    // 'Last-Modified': new Date(editedCustomer.modifiedOn).toUTCString()
                },
                statusCode: 200,
                body: { patched: editedCustomer }
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


const makeAddCustomer = function ({ addCustomer, customerLogin }) {
    return async function postAddCustomer(httpRequest) {
        try {
            const { ...customerInfo } = httpRequest.body
            const newCustomer = await addCustomer({ ...customerInfo });
            const token = await customerLogin({ ...customerInfo, role: "customer" });
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 201,
                body: { posted: newCustomer, token }
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

const makeGetCustomer = function ({ getCustomer: getCustomerById }) {
    return async function getCustomerById(httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        };
        try {
            const { id } = httpRequest.body;
            const customer = await getCustomerById(id)
            return {
                headers,
                statusCode: 200,
                body: customer
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

const makeLoginCustomer = function ({ customerLogin }) {
    return async function loginCustomer(httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        };
        try {
            const token = await customerLogin(httpRequest.body);
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

module.exports = { makeAddCustomer, makeDeleteCustomer, makeEditCustomer, makeGetCustomers, makeGetCustomer, makeLoginCustomer };
