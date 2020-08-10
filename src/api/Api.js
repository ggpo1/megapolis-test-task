
class Api {
    static getTasks() {
        return new Promise((resolve => {
            fetch(`https://test.megapolis-it.ru/api/list`, {
                method: 'GET',
            }).then((response) => response.json()).then((body) => {
                resolve(body.data);
            }).catch(() => {
            })
        }));
    }

    static addTask(title) {
        return new Promise((resolve => {
            fetch(`https://test.megapolis-it.ru/api/list`, {
                method: 'POST',
                body: JSON.stringify({ title }),
            }).then((response) => response.json()).then((body) => {
                resolve(body.id);
            }).catch(() => {
            })
        }));
    } 

    static removeTask(id) {
        return new Promise((resolve => {
            fetch(`https://test.megapolis-it.ru/api/list/${id}`, {
                method: 'DELETE',
            }).then((response) => response.json()).then((body) => {
                resolve(body.success);
            }).catch(() => {
            })
        }));
    } 

    static editTask(id, title) {
        return new Promise((resolve => {
            fetch(`https://test.megapolis-it.ru/api/list/${id}`, {
                method: 'POST',
                body: JSON.stringify({ title })
            }).then((response) => response.json()).then((body) => {
                resolve(body.success);
            }).catch(() => {
            })
        }));
    } 
    
}

export default Api;