'use strict'  

const openModal = () => document.getElementById ('modal')
.classList.add ('active')

const closeModal = () => {
    clearFields()
    document.getElementById('modal').classList.remove('active')
   


const isValidFields = () =>{
    return document.getElementById('form').reportValidity()

}

//interação com layout

const clearTable = () =>{
    const rows = document.querySelectorAll('tableClient>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}
const createRow = (client) =>{
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
                 <td>${client.nome}</td>
                        <td>${client.email}</td>
                        <td>${client.celular}</td>
                        <td>${client.cidade}</td>
                        <td>
                            <button type="button" class="button green">editar</button>
                            <button type="button" class="button red">excluir</button>
                        </td> ` 

                        document.querySelector('#tableClient>tbody').appendChild(newRow)
}

const updateTable = () => {
    const dbClient = readClient ()
    dbClient.forEach(createRow)
}

const clearFields = () =>{
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = " ")
}


const saveClient = () => {
    if (isValidFields()) {
        const client={
            nome:document.getElementById('nome').value,
            email:document.getElementById('email').value,
            celular:document.getElementById('celular').value,
            cidade:document.getElementById('cidade').value
        }

        createClient(client)
        clearFields()
        closeModal()
    }
}
const getLocalStorage = () => JSON.parse(localStorage.getItem('dbClient')) ?? []

const setLocalStorage = () =>   localStorage.setItem("dbCliente", JSON.stringify(client))


//CRUD -create read update delete

const updateClient = (index, client) => {
    const dbClient = readClient ()
    dbClient[index] = client
    setLocalStorage(dbClient)
}

const createClient = (client) => {
    const dbClient = getLocalStorage()
    db_client.push (client)
    setLocalStorage(dbClient)

}

const deleteClient = (index) => {
    const dbClient = readClient()
    dbClient.splice(index,1)
    setLocalStorage(dbClient)

}

//Eventos
document.getElementById('cadastrarCliente')
.addEventListener('click', openModal)

document.getElementById ('modalClose')
.addEventListener('click', closeModal)

document.getElementById('salvar')
.addEventListener('click', saveClient) }